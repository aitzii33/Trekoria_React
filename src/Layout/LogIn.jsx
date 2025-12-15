import logo from '../assets/img/logo.png'
import "../assets/CSS/LogIn.css"
import Header from '../Components/Header_Landing'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
import { ProveUserPassword  } from '../Funtions'

function Login() 
{
    const navigate = useNavigate();
  
    const NavegateForgot = () => 
    {
        const path = '/ForgotPass';
        navigate(path);
    };

    const NavegateRegister = () => 
    {
        const path = '/Register';
        navigate(path);
    };

    const Verify = (e) => 
    {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const data = ProveUserPassword(password, username);

        if(data === false)
        {
            alert('The user name or the password is incorrect');
        }
        else 
        {
            //redirect to inital page
            const path = '/Home';
            navigate(path);
        }
    };


    return(
        <>
            <Header/>
            <div className="container py-5 h-100 d-flex justify-content-center align-items-center" onSubmit={Verify}>
                <div className="card rounded-3 text-black col-xl-10 col-lg-6 p-md-5 mx-md-4">
                    <div className="text-center">
                        <img src={logo} alt="logo" style={{ width: "185px" }}/>
                        <h4 className="mt-1 mb-5 pb-1">We are Trekoria</h4>
                        </div>

                        <form onSubmit={Verify} > 
                        <div className="form-outline mb-4">
                            <input type="email" className="form-control" id="username" placeholder="Introduce your username"/>
                            <label className="form-label" id="username"></label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" className="form-control" id="password" placeholder="Introduce your password"/>
                            <label className="form-label" id="password"></label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                            <button className="btn btn-primary btn-block fa-lg mb-4" type="submit"> Log in </button>
                            <br></br>
                            <br></br>
                            <a className="text-muted" onClick={NavegateForgot}> Forgot password/user? </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">Don't have an account?</p>
                            <a className="btn btn-outline-danger" onClick={NavegateRegister}> Register </a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;