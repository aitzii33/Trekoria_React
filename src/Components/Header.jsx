
import logo from '../assets/img/logo.png'
import userImg from '../assets/img/DefaultUserImage.png'
import '../assets/CSS/Header.css'

function Head() 
{
    function AccessButton()
    {
        //it's going to show options button with the reserve, my profile and log out

        //if() log out, redirect to the log in page 
        //{
        //
        //}
        //else
        //{
        //    const box = document.getElementById("extraButtons");
        //
        //    if (box.classList.contains("d-none")) 
        //    {
        //        box.classList.remove("d-none");
        //        box.classList.add("fade-in");
        //    } 
        //    else 
        //    {
        //        box.classList.add("d-none");
        //        box.classList.remove("fade-in");
        //    }
        //}
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

                {/*
                    <nav className="header-nav" style={{ marginRight: "180px" }}>
                        <a>
                            <img src={home} alt="Home" style={{ width: "20px", height: "20px" }} onClick={(routeInitial)}/>
                        </a>
                        <a href="#">About Us</a>
                    </nav>
                */}


                {/* Access button */}
                <div className="header-access">
                    <img src={userImg} alt='User image' onClick={AccessButton} style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }}/>
                    {/* 
                        <div id="extraButtons" class="mt-3 d-none">
                            <button class="btn btn-primary btn-sm mb-1">Reserve</button>
                            <button class="btn btn-secondary btn-sm mb-1">my profile</button>
                            <button class="btn btn-danger btn-sm mb-1">Log out</button>
                        </div>
                    */}
                </div>
            </header>
        </div>
    );
}

export default Head;