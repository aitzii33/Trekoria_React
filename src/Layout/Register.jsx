import logo from '../assets/img/logo.png';
import { IfExistEmail, ProveUserName, samePass } from '../Funtions';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import { useNavigate } from 'react-router-dom';
import '../assets/CSS/Register.css';
import Button from '../Components/Button.jsx';
import { useForm } from 'react-hook-form';

function RegisterPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const { email, username, password, password2 } = data;
    // Check if email already exists
    if (IfExistEmail(email)) {
      alert('The email is already registered');
      return;
    }

    // Check if username already exists
    if (ProveUserName(username)) {
      alert('The username is already taken');
      return;
    }

    // Check if passwords match
    if (!samePass(password, password2)) {
      alert('Passwords do not match');
      return;
    }   

    // All validations passed
    navigate('/LogIn');
  };

  return (
    <>
      <Header />
      <div className="container py-5 d-flex justify-content-center align-items-center">
        <div className="card register-card shadow d-flex flex-row col-xl-8 col-lg-10 col-md-11 p-0 overflow-hidden">
          
          {/* Left Panel */}
          <div className="col-lg-6 left-panel p-4 d-flex flex-column justify-content-start align-items-center">
            <div className="logo mb-2">
              <img src={logo} alt="logo" className="logo-img" />
            </div>

            <h1 className="fw-bold mb-3 text-center">Welcome to Trekoria</h1>
            <p className="text-muted mb-3 text-center">
              Explore unforgettable trips, activities, and experiences worldwide.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="w-100">
              {/* Name */}
              <div className="form-outline mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Introduce your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <span className="text-danger">{errors.name.message}</span>}
              </div>

              {/* Surname */}
              <div className="form-outline mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Introduce your surname"
                  {...register('surname', { required: 'Surname is required' })}
                />
                {errors.surname && <span className="text-danger">{errors.surname.message}</span>}
              </div>

              {/* Birthday */}
              <div className="form-outline mb-2">
                <input
                  type="date"
                  className="form-control"
                  {...register('birthday', {
                    required: 'Birthday is required',
                    validate: (value) => {
                      const today = new Date();
                      const birthDate = new Date(value);

                      if (birthDate > today) {
                        return 'Birthday cannot be in the future';
                      }

                      // Calculate age
                      const ageDifMs = today - birthDate;
                      const ageDate = new Date(ageDifMs);
                      const age = Math.abs(ageDate.getUTCFullYear() - 1970);

                      if (age < 18) {
                        return 'You must be at least 18 years old';
                      }

                      return true; // Validation passed
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
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email format'
                    }
                  })}
                />
                {errors.email && <span className="text-danger">{errors.email.message}</span>}
              </div>

              {/* Username */}
              <div className="form-outline mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Introduce your username"
                  {...register('username', { required: 'Username is required' })}
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
          </div>

          {/* Right Panel */}
          <div className="col-lg-6 right-panel d-flex flex-column justify-content-center align-items-center text-center p-4 bg-primary text-white">
            <h2 className="mb-3">Already have an account?</h2>
            <p className="mb-4">Click below to login and start your adventure!</p>
            <Button text="Login" onClick={() => navigate('/LogIn')} className="btn btn-outline-light bg-black" />
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterPage;
