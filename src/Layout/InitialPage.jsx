//Proxmoss: https:\\10.14.4.161:8006
//User: Group3
//Password: Muffin
//Password machines: zubiri zubiri
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import img1 from '../assets/img/LandingImg1.png';
import img2 from '../assets/img/LandingImg2.jpg';
import img3 from '../assets/img/LandingImg3.jpg';
import '../assets/CSS/InitialPage.css';
import Button from '../Components/Button';

export default function Landing() {
  return (
    <section className="landing-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          {/* Left: Text + CTA */}
          <div className="col-md-6 text-section mb-4 mb-md-0">
            <h1 className="app-name">TREKORIA</h1>
            <h2 className="main-title">Explore & Book Exciting Activities</h2>
            <p className="lead mb-4">
              Discover adventures, tours, and experiences in cities around the world.
              Find what you love and book instantly.
            </p>
            <Button text="Start Exploring" onClick={() => alert("Clicked!")} />
          </div>

          {/* Right: Collage of 3 Images */}
          <div className="col-md-6 image-section d-flex justify-content-end position-relative">
            <div className="collage-wrapper">
              <img 
                src={img1} 
                alt="Activity 1" 
                className="collage-img img1"
              />
              <img 
                src={img2} 
                alt="Activity 2" 
                className="collage-img img2"
              />
              <img 
                src={img3} 
                alt="Activity 3" 
                className="collage-img img3"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
