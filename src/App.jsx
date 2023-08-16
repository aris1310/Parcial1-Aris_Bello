import { useState } from 'react'
import './App.css'
import Form from './Components/Form'

function App() {
  const [error,setError] = useState(false)


  return (
    <>
    <h2>Elge tu genero de musica favorito</h2>
    <Form setError={setError}/>
    {error && <h2>Verifica la informacion ingresada</h2>}
    


    </>
  )
}

export default App
