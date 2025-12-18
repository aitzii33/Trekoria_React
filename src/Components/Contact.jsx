import '../assets/CSS/Contact.css'
import { ProveEmail,  ProveMessage  } from '../Funtions'
import Header from '../Components/Header'
import { Container } from 'reactstrap'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs()
{
    const validateMessage = (e) => 
    {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const dataEmail = ProveEmail(email);
        
        if(dataEmail === false)
        {
            alert("The email have to have a @ and .");
        }
    };


    const validateEmail = (e) =>
    {
        e.preventDefault();

        const message = document.getElementById('message').value;
        const dataMessage = ProveMessage(message);

        if(dataMessage === false)
        {
            alert("The message have to be between 20 and 120");
        }
    }


    const [status, setStatus] = useState('');

    const enviarEmail = (e) => 
    {
        e.preventDefault();
        emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'PUBLIC_KEY').then(() => setStatus('Enviado!'), () => setStatus('Error'));
        //'SERVICE_ID': Dashboard → Email Services → column Service ID 
        //'TEMPLATE_ID': Dashboard → Email Templates → column Template ID 
        //'PUBLIC_KEY': Dashboard → Account → API Keys → Public Key
    };


    return(
        <Container>
            <Header/>
            
            <form id="contact-form" action="mail.php" method="POST" onSubmit={enviarEmail} className="p-4 border rounded shadow-sm bg-white">
                <h2 className="text-center mb-4">Contact us</h2>

                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" id="name" name="name" className="form-control" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="text" id="email" name="email" className="form-control" onBlur={(e) => validateEmail(e.target.value)} required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" type="text" id="message" name="message" rows="4" onBlur={(e) => validateMessage(e.target.value)} required></textarea>
                </div>

                <button id="submit-form" type="submit" className="btn btn-primary w-100"> Send </button>
                {status && <p>{status}</p>}
            </form>
        </Container>
    );
}

export default ContactUs;