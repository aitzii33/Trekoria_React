//imagenes
import img_insta from '../assets/img/instagramLogo.jpeg'
import img_tiktok from '../assets/img/TiktokLogo.png'
import img_twitter from '../assets/img/twitterLogo.png'
import img_youtube from '../assets/img/youtubeLogo.png'

import '../assets/CSS/Footer.css'
import { useNavigate } from "react-router-dom"


function Footer() 
{
    const navigate = useNavigate();
  
    const routeContactUs = () => 
    {
        const path = '/ContactUs';
        navigate(path);
    };

    const routeLanding = () => 
    {
        const path = '/InitialPage';
        navigate(path);
    };


    return (
        <div className="container my-5">
            <footer className="text-center text-lg-start text-white">
                <div className="container p-4 pb-0">
                    <section>
                        <div className="row">
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                <p><a className="text-white" href="#!">Activities</a></p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                                <p><a className="text-white" onClick={routeLanding}>About us</a></p>
                                <p><a className="text-white" onClick={routeContactUs}>Contact form</a></p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p><i className="fas fa-home mr-3"></i> Donostia, calle urbieta 20010, SP</p>
                                <p><i className="fas fa-envelope mr-3"></i> infoTrekoria@gmail.com</p>
                                <p><i className="fas fa-phone mr-3"></i> +34 200 74 95 18</p>
                            </div>
                        </div>
                    </section>

                <hr className="my-3" />

                <section className="p-3 pt-0">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7 col-lg-8 text-center text-md-start">
                            <div className="p-3">
                                © 2020 Copyright:
                                <a className="text-white" href="https://Trekoria.com/" target="_blank" rel="noopener noreferrer">
                                    Trekoria.com
                                </a>
                            </div>
                        </div>

                        <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                            <img className="img rounded-circle icono" src={img_insta} alt="instagram"/>
                            <img className="img rounded-circle icono" src={img_tiktok} alt="tiktok"/>
                            <img className="img rounded-circle icono" src={img_twitter} alt="twitter"/>
                            <img className="img rounded-circle icono" src={img_youtube} alt="youtube"/>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    </div>
    );
}
export default Footer;
