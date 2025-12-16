
import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './Layout/LandingPage'
import Initial from './Layout/Initial_Page'
import ContactUs from './Components/Contact'
import Login from './Layout/LogIn'
import ForgotPass from './Layout/Forgot_Pass'
import Register from './Layout/Register'
import AboutUs from './Components/AboutUs'


function App()
{
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Home" element={<Initial />} />
        <Route path="/LogIn" element={<Login />} />
        <Route path="/ForgotPass" element={<ForgotPass />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<AboutUs />} />
    </Routes>
    </>
 );
}

export default App;