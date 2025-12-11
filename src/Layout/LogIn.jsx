import "../assets/CSS/Login.css"
import logo from '../assets/img/logo.css'

function LoginPage() 
{
  return (
    <div className="container py-5 h-100 d-flex justify-content-center align-items-center">
        <div className="card rounded-3 text-black col-xl-10 col-lg-6 p-md-5 mx-md-4">
            <div className="text-center">
                <img src={logo} alt="logo" style={{ width: "185px" }}/>
                <h4 className="mt-1 mb-5 pb-1">We are Trekoria</h4>
                </div>

                <form>
                <div className="form-outline mb-4">
                    <input type="email" className="form-control" placeholder="Introduce your username"/>
                    <label className="form-label" htmlFor="username"></label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" className="form-control" placeholder="Introduce your password"/>
                    <label className="form-label" htmlFor="password"></label>
                </div>

                <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button"> Log in </button>
                    <a className="text-muted" href="#!"> Forgot password/user? </a>
                </div>

                <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button type="button" className="btn btn-outline-danger"> Register </button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default LoginPage;
