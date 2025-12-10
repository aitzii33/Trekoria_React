
import { useState } from 'react'
import logIn from './Layout/LogIn';
import './App.css'
import Head from './Components/Header';
import Landing from './Layout/Landing';
import Foot from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Landing/>
      <Foot />
    </>
  )
}

export default App
