
import logo from '../assets/img/logo.png'
import userImg from '../assets/img/DefaultUserImage.png'
import home from '../assets/img/home.png'
import '../assets/CSS/Header.css'
import { useNavigate } from "react-router-dom"
import React, { useState } from "react"


function Head({ isLoggedIn }) 
{
    const navigate = useNavigate();
    const [showExtraButtons, setShowExtraButtons] = useState(false);

    const AccessButton = () => 
    {
        if (!isLoggedIn) 
        {
            navigate("/login");
        } 
        else 
        {
            setShowExtraButtons(prev => !prev);
        }
    };

    const routeInitial = () => 
    {
        const path = '/Initial_Page';
        navigate(path);
    };

    const routeLanding = () => 
    {
        const path = '/InitialPage';
        navigate(path);
    };


    return (
        <div className="main-content">
            <header className="header">
                {/* Logo */}
                <div>
                    <img src={logo} alt="Logo" className="header-logo" onClick={routeInitial}/>
                </div>

                {/* Spacer */}
                <div className="header-spacer"></div>

                <div>
                    <img src={home} alt="Home" style={{ width: "20px", height: "20px" }} className="me-4" onClick={routeInitial}/>
                    <a onClick={routeLanding} className="me-4" style={{ color: 'black' }}>About Us</a>
                    <a className="me-4" style={{ color: 'black' }}>Contact</a>
                </div>

                {/* Access button */}
                <div className="header-access">
                    <img src={userImg} alt="User image" onClick={AccessButton} style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }}/>
                    {isLoggedIn && showExtraButtons && (
                        <div id="extraButtons" className="mt-3">
                            <button className="btn btn-primary btn-sm mb-1">Reserve</button>
                            <button className="btn btn-secondary btn-sm mb-1">My profile</button>
                            <button className="btn btn-danger btn-sm mb-1">Log out</button>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default Head;