
import { useState } from 'react'
import './App.css'
import Header from './Components/Header_Landing';
import Landing from './Layout/InitialPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />
      <Landing/>

    </>
  )
}

export default App
