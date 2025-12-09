import '../assets/css/LogIn.css';

import TripifyLogo from '../assets/logo.png'
import IntagramLogo from '../assets/instagramLogo.jpeg'
import TiktokLogo from '../assets/TiktokLogo.png'
import TwitterLogo from '../assets/twitterLogo.png'
import YoutubeLogo from '../assets/youtubeLogo.png'
import Image from '../assets/LogIn.jpeg'
import '../CSS/LogIn.css'


export default function LogIn()
{
    return (
        <div>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">

                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">

                                        <div className="text-center">
                                            <img style={{ width: "185px" }} alt="logo" />
                                            <h4 className="mt-1 mb-5 pb-1">We are TripiFy</h4>
                                        </div>

                                        <form>
                                            <p>Please login to your account</p>

                                            <div className="form-outline mb-4">
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    placeholder="Introduce your email address or your username" 
                                                />
                                                <label className="form-label" htmlFor="username">Username</label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input 
                                                    type="password" 
                                                    className="form-control" 
                                                    placeholder="Introduce your password" 
                                                />
                                                <label className="form-label" htmlFor="password">Password</label>
                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">
                                                    Log in
                                                </button>
                                                <a className="text-muted" href="#!">Forgot password/user?</a>
                                            </div>

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Don't have an account?</p>
                                                <button type="button" className="btn btn-outline-danger">
                                                    Create new
                                                </button>
                                            </div>

                                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>

                                                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                                                    <i className="fab fa-twitter"></i>
                                                </a>

                                                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                                                    <i className="fab fa-google"></i>
                                                </a>

                                                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-sm-6 px-0 d-none d-sm-block">
                                    <img src={Image} alt="Login image" className="w-100 vh-100" style={{ objectFit: "cover", objectPosition: "left" }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

