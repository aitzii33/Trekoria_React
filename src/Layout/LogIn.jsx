import logo from '../assets/img/logo.png';
import "../assets/CSS/LogIn.css";
import { useNavigate } from 'react-router-dom';
import { ProveUserPassword } from '../Funtions.jsx';
import Header from '../Components/Header.jsx';
import Footer from '../Components/Footer.jsx';
import { Container } from 'reactstrap';
import Button from '../Components/Button.jsx';
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    // data = { username, password }
    const { username, password } = data;

    const valid = ProveUserPassword(password, username);

    if (!valid) {
      // Show inline error
      alert('The username or password is incorrect');
      return;
    }

    // Navigate to home on success
    navigate('/Home');
  };

  const navigateForgot = () => navigate('/ForgotPass');
  const navigateRegister = () => navigate('/Register');

  return (
    <>
      <Header />
      <Container>
        <div className="container py-5 h-100 d-flex justify-content-center align-items-center">
          <div className="card rounded-3 text-black col-xl-10 col-lg-6 p-md-5 mx-md-4">
            <div className="text-center">
              <img src={logo} alt="logo" style={{ width: "185px" }} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Username */}
              <div className="form-outline mb-4">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Introduce your username" {...register('username', { required: 'Username is required' })}/>
                {errors.username && (
                  <span className="text-danger">{errors.username.message}</span>
                )}
              </div>

              {/* Password */}
              <div className="form-outline mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Introduce your password" {...register('password', { required: 'Password is required' })} />
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </div>

              <div className="text-center pt-1 mb-5 pb-1">
                <Button text="Log in" type="submit" />
                <br /><br />
                <a className="text-muted" onClick={navigateForgot} style={{ cursor: 'pointer' }}>
                  Forgot password/user?
                </a>
              </div>

        
              
            </form>
            <div className="d-flex align-items-center justify-content-center mt-3">
            <p className="mb-0 me-2 small text-muted">Don't have an account?</p>
            <span
              className="small"
              style={{ 
                cursor: 'pointer', 
                textDecoration: 'underline', 
                color: '#329ac6',  // Azure theme color
                fontWeight: '500'  // professional look
              }}
              onClick={() => navigate('/Register')}
            >
              Register
            </span>
          </div>

          </div>
          
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
