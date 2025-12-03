import { useState } from 'react'
import Footer from './Components/Footer'
import Head from './Components/Header'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head></Head>
      <Footer></Footer>
    </>
  )
}

export default App
