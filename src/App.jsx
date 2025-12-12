
import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Landing from "./Layout/InitialPage"
import Footer from './Components/Footer'
import Initial from './Layout/Initial_Page'
import Header from './Components/Header_Landing'
import ContactUs from './Components/Contact'


function App()
{
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Home" element={<Initial />} />
      </Routes>
    </>
 );
}

export default App;