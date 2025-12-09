import { useState } from 'react' 
import Footer from './Components/Footer'
import './App.css'
import Head from './Components/Header';
import Landing from './Layout/Landing';
import Foot from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head />
      <Landing />
      <Foot />
    </>
  )
}

export default App
