import { useState } from 'react'
import logIn from './Layout/LogIn';
import './App.css'
import Header from './Components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    </>
  )
}

export default App
