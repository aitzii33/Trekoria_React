import TripifyLogo from '../src/assets/logo.png'
import IntagramLogo from '../src/assets/instagramLogo.jpeg'
import TiktokLogo from '../src/assets/Tiktok.png'
import TwitterLogo from '../src/assets/twitterLogo.png'
import YoutubeLogo from '../src/assets/youtubeLogo.png'
import Image from '../src/assets/LogIn.jpeg'
import '../src/CSS/LogIn.css'


function LogIn()
{
    return(
        <div>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-10">
                        <div class="card rounded-3 text-black">
                            <div class="row g-0">
                                <div class="col-lg-6">
                                    <div class="card-body p-md-5 mx-md-4">
                                        <div class="text-center">
                                            <img src={TripifyLogo} style="width: 185px;" alt="logo"/>
                                            <h4 class="mt-1 mb-5 pb-1">We are TripiFy</h4>
                                        </div>

                                        <form>
                                            <p>Please login to your account</p>

                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <input type="email" class="form-control" placeholder="Introduce your email address or your username" />
                                                <label class="form-label" for="username">Username</label>
                                            </div>

                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <input type="password" class="form-control" placeholder="Introduce your password"/>
                                                <label class="form-label" for="password">Password</label>
                                            </div>

                                            <div class="text-center pt-1 mb-5 pb-1">
                                                <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log in</button>
                                                <a class="text-muted" href="#!">Forgot password/user?</a>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-center pb-4">
                                                <p class="mb-0 me-2">Don't have an account?</p>
                                                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-danger">Create new</button>
                                            </div>
                                            <div>
                                                <img src={IntagramLogo} alt="Instagram"></img>
                                                <img src={YoutubeLogo} alt="Youtube"></img>
                                                <img src={TiktokLogo} alt="Tiktok"></img>
                                                <img src={TwitterLogo} alt="Twitter"></img>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="col-sm-6 px-0 d-none d-sm-block">
                                    <img src={Image} alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}