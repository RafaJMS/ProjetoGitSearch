import { useState } from 'react'
import axios from 'axios'
import logo from './assets/github.svg'
import './App.css'
import CardRepo from './components/ReposCard'

function App() {

  const [Usuario,setUsuario] = useState("")
  const [DataUser,setDataUser] = useState()
  const [ReposUser,setReposUser] = useState()

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handlePesquisa();
    }
  }

  async function handlePesquisa() {

      const responseInfo = await axios.get(`https://api.github.com/users/${Usuario}`);
      const { avatar_url, name, location,login } = responseInfo.data;
      setDataUser({ avatar_url, name, location, login });
      console.log(responseInfo.data)

      const responseRepos = await axios.get(`https://api.github.com/users/${Usuario}/repos`);
      setReposUser(responseRepos.data)
      console.log(ReposUser)
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
            <h2 className='user-name'>Nome: {DataUser.name}</h2>
            <span className='user-name'>User: {DataUser.login}</span>
            <span>{DataUser.location}</span>
            <div className='imgbox'>
            <img className='user-avatar' src={DataUser.avatar_url} alt='avatar-user'></img> 
            </div>
            </div>
            <div className='repos'>
            <h1>Projetos</h1>
            <hr></hr>
              {ReposUser ? (
                
                        ReposUser.map((projeto, index) => (
                        <CardRepo project={projeto} key={index}/>
                        
                        
                      ))
              ):(
              <>
              <span>Nenhum Projeto Disponivel</span>
              </>)}
            
            
      </div>
            </>
            }
        </div>
        </div>
        
      
    </>
  )
}

export default App
