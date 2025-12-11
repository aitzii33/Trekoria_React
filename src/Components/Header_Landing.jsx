
import logo from '../assets/logo.png'
import home from "../assets/home.png";
import '../assets/CSS/Header.css';

export default function Head() 
{
  return (
    <div className="main-content">
      <header className="header">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="header-logo" style={{ width: "20px", height: "20px" }}/>
        </div>

        {/* Spacer */}
        <div className="header-spacer"></div>


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

        {/* Access button */}
        <div className="header-access">
          <button className="btn btn-primary"> Access </button>
        </div>
      </header>
    </div>
  );
}
