import '../assets/CSS/Contact.css'

function ContactUs()
{
    return(
        <form id="contact-form" action="mail.php" method="POST" class="p-4 border rounded shadow-sm bg-white">
            <h2 class="text-center mb-4">Contact us</h2>

            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" name="name" class="form-control" />
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" id="email" name="email" class="form-control" />
            </div>

            <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" id="subject" name="subject" class="form-control" />
            </div>

            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" name="message" rows="4"></textarea>
            </div>

            <button id="submit-form" type="submit" class="btn btn-primary w-100">
                Send
            </button>
        </form>
    );
}

export default ContactUs;