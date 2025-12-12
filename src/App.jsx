
import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Landing from "./Layout/LandingPage"
import Initial from './Layout/Initial_Page'
import ContactUs from './Components/Contact'
import Login from "./Layout/LogIn"


function App()
{
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Home" element={<Initial />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
 );
}

export default App;