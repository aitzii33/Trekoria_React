
import logo from '../assets/logo.svg';
import userImg from '../assets/img/DefaultUserImage.png';
import home from '../assets/img/home.png';
import '../assets/CSS/Header.css';
import { useNavigate } from "react-router-dom"


export default function Head() 
{
  const navigate = useNavigate();
  
  const routeInitial = () => 
  {
    const path = '/Initial_Page';
    navigate(path);
  };

  const routeAboutUs = () =>
  {
    const path = '/About';
    navigate(path);
  }

  const routeContact = () => 
  {
    const path = '/ContactUs';
    navigate(path);
  };


  return (
    <div className="main-content">
      <header className="header">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="header-logo" style={{ width: "auto", height: "80px" }}/>
        </div>

        {/* Spacer */}
        <div className="header-spacer"></div>


        {/* Spacer */}
        <div className="header-spacer"></div>

        {/* Navigation */}
        <nav className="header-nav" style={{ marginRight: "180px" }}>
          <a>
            <img src={home} alt="Home" style={{ width: "20px", height: "20px" }} onClick={(routeInitial)}/>
          </a>
          <a onClick={(routeAboutUs)}>About Us</a>
          <a onClick={(routeContact)}>Contact</a>
        </nav>
      </header>
    </div>
  );
}
