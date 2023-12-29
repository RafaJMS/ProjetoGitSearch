import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [Usuario,setUsuario] = useState()

  function handlePesquisa(e){
      setUsuario(e.value)
      console.log(Usuario)
      axios.get(`https://api.github.com/users/${Usuario}`).then(response => console.log(response.data))
  }

  return (
    <>
      <div className='container'>
        <div className='input-box'>
          <label className='label-entrada'>GitHub:</label>
            <input type="text" onClick={e=>handlePesquisa(e.target.value)} />
        </div>
        <div className='response-box'>

        </div>
      </div>
    </>
  )
}

export default App
