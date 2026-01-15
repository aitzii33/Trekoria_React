import logo from '../assets/img/logo.png';
import { IfExistEmail, ProveUserName, samePass } from '../Funtions.jsx';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import { useNavigate } from 'react-router-dom';
import '../assets/CSS/Register.css';
import Button from '../Components/Button.jsx';
import { useForm } from 'react-hook-form';
import otherImage from '../assets/img/registerImg.webp';

export default function RegisterPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    navigate('/LogIn');
  };

  return (
    <>
      <Header />
      <div className="container py-5 d-flex justify-content-center align-items-center">
        <div className="card register-card shadow d-flex flex-row col-xl-8 col-lg-10 col-md-11 p-0 overflow-hidden">

          {/* Left Panel: ONLY Form */}
          <div className="col-lg-6 left-panel p-4 d-flex flex-column justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-100">
              {/* Name */}
              <div className="form-outline mb-2">
                <input type="text" className="form-control" placeholder="Introduce your name" {...register('name', { required: 'Name is required' })}/>
                {errors.name && <span className="text-danger">{errors.name.message}</span>}
              </div>

              {/* Surname */}
              <div className="form-outline mb-2">
                <input type="text" className="form-control" placeholder="Introduce your surname" {...register('surname', { required: 'Surname is required' })} />
                {errors.surname && <span className="text-danger">{errors.surname.message}</span>}
              </div>

              {/* Birthday */}
              <div className="form-outline mb-2">
                <input type="date" className="form-control"
                  {...register('birthday', {
                    required: 'Birthday is required',
                    validate: (value) => {
                      const today = new Date();
                      const birthDate = new Date(value);
                      if (birthDate > today) return 'Birthday cannot be in the future';
                      const ageDifMs = today - birthDate;
                      const ageDate = new Date(ageDifMs);
                      const age = Math.abs(ageDate.getUTCFullYear() - 1970);
                      if (age < 18) return 'You must be at least 18 years old';
                      return true;
                    }
                  })}
                />
                {errors.birthday && <span className="text-danger">{errors.birthday.message}</span>}
              </div>

              {/* Email */}
              <div className="form-outline mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Introduce your email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' },
                    validate: (value) => !IfExistEmail(value) || 'The email is already registered'
                  })}
                />
                {errors.email && <span className="text-danger">{errors.email.message}</span>}
              </div>

              {/* Username */}
              <div className="form-outline mb-2">
                <input type="text" className="form-control" placeholder="Introduce your username"
                  {...register('username', {
                    required: 'Username is required',
                    validate: (value) => !ProveUserName(value) || 'The username is already taken'
                  })}
                />
                {errors.username && <span className="text-danger">{errors.username.message}</span>}
              </div>

              {/* Password */}
              <div className="form-outline mb-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Introduce your password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 6, message: 'Password must be at least 6 characters' }
                  })}
                />
                {errors.password && <span className="text-danger">{errors.password.message}</span>}
              </div>

              {/* Repeat Password */}
              <div className="form-outline mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repeat your password"
                  {...register('password2', {
                    required: 'Please confirm your password',
                    validate: (value) =>
                      value === watch('password') || 'Passwords do not match'
                  })}
                />
                {errors.password2 && <span className="text-danger">{errors.password2.message}</span>}
              </div>

              <Button text="Register" type="submit" className="w-100 mb-3" />

              <small className="text-muted d-block text-center">
                By registering, you agree to our Terms & Privacy Policy.
              </small>
            </form>
            <br />
            {/* Inline Login Text (same style as Register question) */}
          <div className="d-flex align-items-center justify-content-center">
            <p className="mb-0 me-2 small text-muted">Already have an account?</p>
              <span
              className="small"
              style={{ 
                cursor: 'pointer', 
                textDecoration: 'underline', 
                color: '#329ac6',  // Azure theme color
                fontWeight: '500'  // optional, makes it look more professional
              }}
              onClick={() => navigate('/LogIn')}
            >
              Log in
            </span>

          </div>
          </div>

          {/* Right Panel */}
          <div className="col-lg-6 right-panel d-flex flex-column align-items-center justify-content-center p-5 bg-white text-center">

            {/* Welcome Text */}
            <h1 
              className="fw-bold mb-3" 
              style={{ color: '#329ac6', fontSize: '2.5rem', lineHeight: '1.2' }}
            >
              Welcome to Trekoria
            </h1>
            
            <p 
              className="mb-4 text-muted" 
              style={{ fontSize: '1.1rem', maxWidth: '350px' }}
            >
              Plan your next adventure with us!
            </p>

            {/* Illustration / Theme Image */}
            <div className="illustration" style={{ width: '100%', maxWidth: '400px' }}>
              <img 
                src={otherImage} 
                alt="Welcome Illustration" 
                className="img-fluid"
                style={{ borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}
              />
            </div>

          </div>






        </div>
      </div>
      <Footer />
    </>
  );
}
