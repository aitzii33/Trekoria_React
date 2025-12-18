import '../assets/CSS/Contact.css'
import { ProveEmail,  ProveMessage  } from '../Funtions'
import Header from '../Components/Header'
import { Container } from 'reactstrap'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../Components/Footer';

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
        <>
            <Header/>

            <section className="about-gradient py-5 w-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="text-center text-white">
                                <h1 className="display-5 fw-bold">Contact Us</h1>
                                <p className="lead">
                                    Get more closure to Trekoria, we are here to help you!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container my-5">
                <div className="row gx-4 gy-4">
                    {/* Left: form */}
                    <div className="col-md-7">
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
                            {status && <p className="mt-3">{status}</p>}
                        </form>
                    </div>

                    {/* Right: three cards with contact info */}
                    
                    <div className="col-md-5">
                        
                        <br />
                        <br />
                        <br />
                
                        <div className="d-flex flex-column">
                            <div className="card mb-3 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Address</h5>
                                    <p className="card-text mb-0">
                                        <a className="text-black">Donostia, calle urbieta 20010, SP</a>
                                    </p>
                                </div>
                            </div>

                            <div className="card mb-3 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Email</h5>
                                    <p className="card-text mb-0">
                                        <a href="mailto:infoTrekoria@gmail.com" className="text-black">infoTrekoria@gmail.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="card mb-3 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Phone</h5>
                                    <p className="card-text mb-0">
                                        <a href="tel:+34200749518" className="text-black">+34 200 74 95 18</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default ContactUs;