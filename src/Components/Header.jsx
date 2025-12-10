
import logo from '../assets/logo.png'
import home from "../assets/home.png";
import '../assets/CSS/Header.css';
import userImg from 'DefaultUserImage.png';

function Head() 
{
    function AccessButton()
    {
        //it's going to show options button with the reserve, my profile and log out
        document.getElementById("userImage").addEventListener("click", () => 
        {
            const box = document.getElementById("extraButtons");
            //box.classList.toggle("d-none");

            if (box.classList.contains("d-none")) 
            {
                box.classList.remove("d-none");
                box.classList.add("fade-in");
            } 
            else 
            {
                box.classList.add("d-none");
                box.classList.remove("fade-in");
            }
        });
    }


    return (
        <div className="main-content">
            <header className="header">
                {/* Logo */}
                <div>
                    <img src={logo} alt="Logo" className="header-logo" />
                </div>

                {/* Spacer */}
                <div className="header-spacer"></div>

                {/* Title */}
                <h1>TREKORIA</h1>

                {/* Access button */}
                <div className="header-access">
                    <img src={userImg} alt='User image' onClick={AccessButton()}/>

                    <div id="extraButtons" class="mt-3 d-none">
                        <button class="btn btn-primary btn-sm mb-1">Reserve</button>
                        <button class="btn btn-secondary btn-sm mb-1">my profile</button>
                        <button class="btn btn-danger btn-sm mb-1">Log out</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Head;
