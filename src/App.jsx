import { useState } from 'react'
import logIn from '../src/Layout/LogIn'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <logIn></logIn>
    </>
  )
}

export default App
