import { useState } from 'react'
import logIn from './Layout/LogIn';
import './App.css'
import Header from './Components/Header';
import Landing from './Layout/Landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Landing/>
    </>
  )
}

export default App
