// src/Components/Contact.jsx
import '../assets/CSS/Contact.css'
import Header from './Header'
import Footer from './Footer'
import { ProveEmail, ProveMessage } from '../Funtions'

function ContactUs() {
  const Verify = (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    if (!ProveEmail(email)) alert("The email must contain @ and .")
    if (!ProveMessage(message)) alert("The message must be between 20 and 120 characters")
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="py-5 about-gradient w-100">
        <div className="container text-center text-white">
          <h1 className="display-5 fw-bold">Contact Us</h1>
          <p className="lead">Start your unforgettable adventure with us today!</p>
        </div>
      </section>

      {/* Form and Cards Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Left: Contact Form */}
            <div className="col-md-8 mb-4">
              <form id="contact-form" onSubmit={Verify} className="p-4 border rounded shadow-sm bg-white">
                <h2 className="text-center mb-4">Contact us</h2>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" id="name" name="name" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="text" id="email" name="email" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="4"></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">Send</button>
              </form>
            </div>

            {/* Right: Contact Cards */}
            
            <div className="col-md-4">
              {/* Address */}
              <br />
            <br />
              <div className="card mb-3 shadow-sm text-center p-4" style={{ borderRadius: '15px', background: 'linear-gradient(135deg, #2796D1, #33a1de)', color: 'white' }}>
                <h5><i className="fas fa-map-marker-alt me-2"></i> Address</h5>
                <p>Donostia, calle urbieta 20010, SP</p>
              </div>
              <br />

              {/* Email */}
              <div className="card mb-3 shadow-sm text-center p-4" style={{ borderRadius: '15px', background: 'linear-gradient(135deg, #033B63, #05527c)', color: 'white' }}>
                <h5><i className="fas fa-envelope me-2"></i> Email</h5>
                <p>infoTrekoria@gmail.com</p>
              </div>
              <br />

              {/* Phone */}
              <div className="card mb-3 shadow-sm text-center p-4" style={{ borderRadius: '15px', background: 'linear-gradient(135deg, #2796D1, #33a1de)', color: 'white' }}>
                <h5><i className="fas fa-phone me-2"></i> Phone</h5>
                <p>+34 200 74 95 18</p>
                <small style={{ fontStyle: 'italic' }}>24h Available</small>
              </div>
            </div>
          </div>
        </div>
      </section>


            {/* Map Section */}
        <section className="py-3 text-center">
        <div className="container mb-3">
            <h3>Visit Us</h3>
            <p>Come and find us at <strong>Zubiri Manteo</strong> – we’re here to help you plan unforgettable adventures!</p>
        </div>

        <div
            className="map-container mx-auto"
            style={{
            width: '70%',   // 70% width
            height: '350px', // fixed height
            overflow: 'hidden',
            borderRadius: '15px'
            }}
        >
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.123456!2d-1.983!3d43.320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51f1234567890%3A0xabcdef123456!2sZubiri%20Manteo!5e0!3m2!1sen!2ses!4v1691234567890!5m2!1sen!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Zubiri Manteo Location"
            ></iframe>
        </div>
        </section>




      <Footer />
    </>
  )
}

export default ContactUs
