
import logo from '../assets/logo.png'
import '../assets/CSS/Header.css';

import museums from '../Layout/Museum_Admin.jsx'
import user from '../Layout/Users_Admin.jsx'
import analytic from '../Layout/Analytic_Admin.jsx'

export default function Head() 
{
  return (
    <div className="main-content">
      <header className="header">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="header-logo" />
        </div>

        {/* Spacer */}
        <div className="header-spacer"></div>

        {/* Name of the application */}
        <div><h1>TREKORIA</h1></div>

        {/* Spacer */}
        <div className="header-spacer"></div>

        {/* Navigation */}
        <nav className="header-nav">
          <a href={museums}>Museums</a>
          <a href={user}>Users</a>
          <a href={analytic}>Analytics</a>
        </nav>

        {/* Access button */}
        <div className="header-access">
          <button className="btn btn-primary"> Access </button>
        </div>
      </header>
    </div>
  );
}
