import '../assets/CSS/Contact.css'
import { ProveEmail,  ProveMessage  } from '../Funtions'
import Header from '../Components/Header'
import { useNavigate } from 'react-router-dom'

function ContactUs()
{
    const navigate = useNavigate();

    const Verify = (e) => 
    {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const dataEmail = ProveEmail(email);
        const dataMessage = ProveMessage(message);
        
        if(dataEmail === false)
        {
            alert("The email isn't correct");
        }
        else if(dataMessage === false)
        {
            alert("The message have to be between 20 and 120");
        }
        else
        {
            alert('The message have been send succesfully');

            navigate(-1); //To navigate to the previous page
        }
    };


    return(
        <>
            <Header/>
            
            <form id="contact-form" action="mail.php" method="POST" onSubmit={Verify} className="p-4 border rounded shadow-sm bg-white">
                <h2 className="text-center mb-4">Contact us</h2>

                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" id="name" name="name" className="form-control" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="text" id="email" name="email" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" type="text" id="message" name="message" rows="4"></textarea>
                </div>

                <button id="submit-form" type="submit" className="btn btn-primary w-100"> Send </button>
            </form>
        </>
    );
}

export default ContactUs;