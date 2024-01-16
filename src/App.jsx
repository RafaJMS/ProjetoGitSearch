import { useState } from 'react'
import axios from 'axios'
import logo from './assets/github.svg'
import './App.css'

function App() {

  const [Usuario,setUsuario] = useState("")
  const [DataUser,setDataUser] = useState()

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handlePesquisa();
    }
  }

  async function handlePesquisa() {

      const response = await axios.get(`https://api.github.com/users/${Usuario}`);
      const { avatar_url, name, location,login } = response.data;
      setDataUser({ avatar_url, name, location, login });
      console.log(response.data)

  }

 

  return (
    <>
      <div className='container'>
          <h2 className='label-entrada'>GitSearch</h2>
          <div className='input-box'>
            <input type="text" placeholder='GitUser' id='input-entrada' value={Usuario} onChange={e=>setUsuario(e.target.value)} onKeyDown={handleKeyPress} />
            <img id='logo' src={logo} alt='logo-github'onClick={handlePesquisa}></img> 
        </div>
        <div className='response-box'>
          { DataUser &&
          <>
          <div className='text-box'>
            <span className='user-name'>{DataUser.name}</span>
            <span className='user-name'>({DataUser.login})</span>
            <span>{DataUser.location}</span>
            </div>
            <img className='user-avatar' src={DataUser.avatar_url} alt='avatar-user'></img> 
            
            
            </>}
        </div>
      </div>
    </>
  )
}

export default App
