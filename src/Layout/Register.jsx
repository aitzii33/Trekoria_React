import logo from '../assets/img/logo.png'
import { IfExistEmail, ProveUserName  } from '../Funtions'

function RegisterPage() 
{
    const Verify = (e) => 
    {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;

        const dataEmail = IfExistEmail(email);
        const dataUser = ProveUserName(username);
        
        if(dataEmail === false)
        {
            alert("The email have to have a @ and .");
        }
        else if(dataUser === false)
        {
            alert('That user already exist');
        }
        else (dataEmail === true && dataUser === true)
        {
            alert('The register has been successfully completed');
            //redirect to log in
            const path = '/LogIn';
            navigate(path);
        }
    };


    return (
        <div className="container py-5 h-100 d-flex justify-content-center align-items-center">
            <div className="card rounded-3 text-black col-xl-10 col-lg-6 p-md-5 mx-md-4">
                <div className="text-center">
                    <img src={logo} alt="logo" style={{ width: "185px" }}/>
                    <h4 className="mt-1 mb-5 pb-1">We are Trekoria</h4>
                </div>

                <form onSubmit={Verify}>
                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" placeholder="Introduce your name"/>
                        <label className="form-label" htmlFor="name" id="name"></label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" placeholder="Introduce your surname"/>
                        <label className="form-label" htmlFor="surname" id="surname"></label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="date" className="form-control" placeholder="Introduce your birthday"/>
                        <label className="form-label" htmlFor="birthday" id="birthday"></label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" placeholder="Introduce your email"/>
                        <label className="form-label" htmlFor="email" id="email"></label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="text" className="form-control" placeholder="Introduce your username"/>
                        <label className="form-label" htmlFor="username" id='username'></label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" className="form-control" placeholder="Introduce your password"/>
                        <label className="form-label" htmlFor="password" id="password"></label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" className="form-control" placeholder="Introduce your password another time"/>
                        <label className="form-label" htmlFor="password2" id="password2"></label>
                    </div>

                    <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
