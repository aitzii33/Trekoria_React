
import logo from '../assets/logo.svg'
import userImg from '../assets/img/DefaultUserImage.png'
import home from '../assets/img/home.png'
import '../assets/CSS/Header.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"


function Head({ isLoggedIn }) 
{
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    const AccessButton = () => 
    {
        if (!isLoggedIn) 
        {
            navigate("/login");
        } 
        else 
        {
            setShowDropdown(prev => !prev);
        }
    };

    const routeInitial = () => 
    {
        const path = '/Home';
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

    const routeProfile = () => 
    {
        const path = '/Profile';
        navigate(path);
    };

    const routeLogOut = () => 
    {
        //Close the sesion
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
                    <a onClick={routeAboutUs} className="me-4" style={{ color: 'black' }}>About Us</a>
                    <a onClick={routeContact} className="me-4" style={{ color: 'black' }}>Contact</a>
                </div>

                {/* Access button */}
                <div className="header-access">
                    <img src={userImg} alt="profile" onClick={AccessButton} style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }}/>
                    {showDropdown && ( 
                        <ul style={{ position: "absolute", top: "100%", right: 0, background: "white", border: "1px solid #ccc", listStyle: "none", margin: 0, padding: "8px 0" }} >
                            <li onClick={routeProfile}>Perfil</li>
                            <li onClick={routeLogOut}>Cerrar sesión</li>
                        </ul>
                    )}
                </div>
            </header>
        </div>
    );
}

export default Head;