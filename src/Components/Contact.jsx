import '../assets/CSS/Contact.css'
import { ProveEmail,  ProveMessage  } from '../Funtions'
import Header from '../Components/Header'

function ContactUs()
{
    const Verify = (e) => 
    {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const dataEmail = ProveEmail(email);
        
        if(dataEmail === false)
        {
            alert("The email have to have a @ and .");
        }

        const dataMessage = ProveMessage(message);

        if(dataMessage === false)
        {
            alert("The message have to be between 20 and 120");
        }
    };


    return(
        <>
           

             <section className="py-5 about-gradient w-100">
                 <Header/>
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <div className="text-center text-white">
                        <h1 className="display-5 fw-bold">Contact Us</h1>
                        <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            
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