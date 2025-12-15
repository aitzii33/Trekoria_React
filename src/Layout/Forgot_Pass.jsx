import '../assets/CSS/Contact.css'
import { IfExistEmail  } from '../Funtions'
import Header from '../Components/Header'
import { useNavigate } from 'react-router-dom'

function ForgotPass()
{
    const navigate = useNavigate();

    const Verify = (e) => 
    {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const dataEmail = IfExistEmail(email);
        
        if(dataEmail === false)
        {
            alert("This email isn't exist yet");
        }
        else
        {
            alert('The email have sended');

            //redirect to log in
            const path = '/LogIn';
            navigate(path);
        }
    };


    return(
        <>
            <Header/>
            
            <form id="contact-form" action="mail.php" method="POST" onSubmit={Verify} className="p-4 border rounded shadow-sm bg-white">
                <h2 className="text-center mb-4">Contact us</h2>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="text" id="email" name="email" className="form-control"/>
                </div>

                <button id="submit-form" type="submit" className="btn btn-primary w-100"> Send </button>
            </form>
        </>
    );
}

export default ForgotPass;