import './App.css'
import { Routes, Route } from 'react-router-dom'

import Landing from './Layout/LandingPage'
import Initial from './Layout/Initial_Page'
import ContactUs from './Components/Contact2'
import Login from './Layout/LogIn'
import ForgotPass from './Layout/Forgot_Pass'
import Register from './Layout/Register'
import AboutUs from './Components/AboutUs'
import Profile from './Layout/MyProfile'
import Activities from './Layout/Activities'  
import ActivityClick from './Layout/ActivitiesInfo'
import Cart from './Layout/Cart'
import Payment from './Layout/Payment'
import AdminPortal from './Layout/Admin/AdminPortal'

import "./assets/i18n/i18n";                   // keep this to initialize i18n

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Home" element={<Initial />} />
      <Route path="/LogIn" element={<Login />} />
      <Route path="/ForgotPass" element={<ForgotPass />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/About" element={<AboutUs />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Activities" element={<Activities />} />
      <Route path="/ActivityClick" element={<ActivityClick/>} />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/Pay" element={<Payment/>} />
      <Route path="/AdminPortal" element={<AdminPortal />} />
    </Routes>
  );
}

export default App;
