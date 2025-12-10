import 'bootstrap/disk/css/bootstrap.min.css';
import React from 'react';

export default function Landing(){
    return(
        <section className="py-5 bg-light">
            <div className="conatiner">
                <div className="row align-items-center">
                    {/*imgs*/}
                    <div className="col-md-6 d-flex gap-3 mb-4 mb-md-0">
                         <img 
                            src="https://via.placeholder.com/300x200" 
                            alt="Design 1" 
                            className="img-fluid rounded shadow"
                        />
                        <img 
                            src="https://via.placeholder.com/300x200" 
                            alt="Design 2" 
                            className="img-fluid rounded shadow"
                        />
                    </div>
                    {/* Text + Button */}
                    <div className="col-md-6">
                        <h1 className="mb-3">Beautiful Interior Designs</h1>
                        <p className="mb-4">
                        Transform your space with modern, elegant, and functional interior designs.
                        Explore ideas that bring comfort and style to your home.
                        </p>
                        <a href="#contact" className="btn btn-primary btn-lg">Get Started</a>
                    </div>
                </div>

            </div>

        </section>

    );
}