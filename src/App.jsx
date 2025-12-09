import { useState } from 'react' 
import Footer from './Components/Footer'
import Head from './Components/Header'

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
