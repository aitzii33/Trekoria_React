import '../assets/CSS/Contact.css'

function ContactUs()
{
    return(
        <form id="contact-form" action="mail.php" method="POST" className="p-4 border rounded shadow-sm bg-white">
            <h2 className="text-center mb-4">Contact us</h2>

            <div className="mb-3">
                <label for="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" className="form-control" />
            </div>

            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" id="email" name="email" className="form-control" />
            </div>

            <div className="mb-3">
                <label for="subject" className="form-label">Subject</label>
                <input type="text" id="subject" name="subject" className="form-control" />
            </div>

            <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows="4"></textarea>
            </div>

            <button id="submit-form" type="submit" className="btn btn-primary w-100">
                Send
            </button>
        </form>
    );
}

export default ContactUs;