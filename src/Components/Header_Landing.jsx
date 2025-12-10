
import logo from '../assets/img/logo.png'
import home from "../assets/img/home.png"
import '../assets/CSS/Header.css'
//import { useNavigate } from "react-router-dom"

function Head() 
{
  //const navigate = useNavigate();
//
  //const redirect = () =>
  //{
  //  navigate('../Layout/Initial_Page');
  //}
//

  return (
    <div className="main-content">
      <header className="header">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="header-logo" onClick={redirect}/>
        </div>

        {/* Spacer */}
        <div className="header-spacer"></div>

        {/* Name of the application */}
        <div><h1>TREKORIA</h1></div>

        {/* Spacer */}
        <div className="header-spacer"></div>

        {/* Navigation */}
        <nav className="header-nav" style={{ marginRight: "180px" }}>
          <a href="#">
            <img src={home} alt="Home" style={{ width: "20px", height: "20px" }} />
          </a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </div>
  );
}

export default Head;