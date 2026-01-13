import '../assets/CSS/Contact.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const enviarEmail = async (data) => {
    setLoading(true);
    setStatus('');

    try {
      await emailjs.send(
        'SERVICE_ID',     // Your EmailJS Service ID
        'TEMPLATE_ID',    // Your EmailJS Template ID
        {
          user_name: data.name,
          user_email: data.email,
          message: data.message
        },
        'PUBLIC_KEY'      // Your EmailJS Public Key
      );

      setStatus('Message sent successfully!');
      reset(); // Clear the form
    } catch (error) {
      console.error(error);
      setStatus('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="about-gradient py-5 w-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="text-center text-white">
                <h1 className="display-5 fw-bold">Contact Us</h1>
                <p className="lead">
                  Get closer to Trekoria, we are here to help you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <form
        id="contact-form"
        className="p-4 border rounded shadow-sm bg-white"
        onSubmit={handleSubmit(enviarEmail)}
      >
        <h2 className="text-center mb-4">Contact us</h2>

        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span className="text-danger">{errors.name.message}</span>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <span className="text-danger">{errors.email.message}</span>}
        </div>

        {/* Message */}
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            rows="4"
            className="form-control"
            {...register('message', {
              required: 'Message is required',
              minLength: { value: 20, message: 'Message must be at least 20 characters' },
              maxLength: { value: 120, message: 'Message must be less than 120 characters' }
            })}
          />
          {errors.message && <span className="text-danger">{errors.message.message}</span>}
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>

        {status && <p className="mt-2 text-center">{status}</p>}
      </form>

      <Footer />
    </>
  );
}

export default ContactUs;
