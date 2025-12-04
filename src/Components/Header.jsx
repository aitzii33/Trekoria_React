import React, { useState } from "react";
import logo from '../assets/logo.png'
import home from "../assets/home.png";
import '../CSS/Header.css';

export default function Head() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="main-content">
        <header className="header">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="header-logo" />
      </div>

      {/* Spacer */}
      <div className="header-spacer"></div>

      {/* Navigation */}
      <nav className="header-nav">
        <a href="#">
          <img src={home} alt="Home" style={{ width: "20px", height: "20px" }} />
        </a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </nav>

      {/* Access button */}
      <div className="header-access">
        <button
          className="btn btn-primary"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Access
        </button>
        {showDropdown && (
          <ul className="header-dropdown">
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </ul>
        )}
      </div>
    </header>
    </div>
    
  );
}
