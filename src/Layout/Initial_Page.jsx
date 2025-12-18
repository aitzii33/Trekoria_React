<<<<<<< HEAD
import React, { useState } from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import {  Carousel,  Form,  Button,  InputGroup,  Card,  Row,  Col,} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom'


// Images
import LandingImg1 from "../assets/img/LandingImg1.png"
import LandingImg2 from "../assets/img/LandingImg2.jpg"
import LandingImg3 from "../assets/img/LandingImg3.jpg"
import lupa from "../assets/img/lupa.png"
import Baloon from "../assets/img/Baloon.jpg"
import TokyoImg from "../assets/img/Tokyo.webp"
import Baloon2 from "../assets/img/Baloon2.webp"

import "../assets/CSS/Home.css"

function InitialPage() {
  const navigate = useNavigate();
  const [showContinents, setShowContinents] = useState(false);
  const [hoveredContinent, setHoveredContinent] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
=======
import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Carousel, Form, Button, InputGroup, Card, Row, Col } from "react-bootstrap";

import LandingImg1 from "../assets/img/LandingImg1.png";
import LandingImg2 from "../assets/img/LandingImg2.jpg";
import LandingImg3 from "../assets/img/LandingImg3.jpg";
import lupa from "../assets/img/lupa.png";

import Baloon from "../assets/img/Baloon.jpg";
import TokyoImg from "../assets/img/Tokyo.webp";
import Landing3 from "../assets/img/LandingImg3.jpg";
import Baloon2 from "../assets/img/Baloon2.webp";



import "../assets/CSS/Home.css";

import countriesData from "../assets/DATA/contries.json";
import countryToContinent from "../assets/DATA/Continent.json";
>>>>>>> fc50ec7ffc9a91e7ed74feafa5480e9a866fcf61

// Popular cities with images
const popularCities = [
  { name: "Paris", img: Baloon },
  { name: "Tokyo", img: TokyoImg },
  { name: "New York", img: Landing3 },
  { name: "London", img: Baloon2 },
];


function InitialPage() {
  const [hoveredContinent, setHoveredContinent] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [showContinents, setShowContinents] = useState(false);

  const images = [LandingImg1, LandingImg2, LandingImg3];

  // Build continents structure
  const continents = {};
  Object.keys(countriesData).forEach((country) => {
    const continent = countryToContinent[country] || "Unknown";
    if (!continents[continent]) continents[continent] = [];
    continents[continent].push({
      name: country,
      cities: countriesData[country],
    });
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    console.log("Search:", query);
<<<<<<< HEAD
    // redirect to search results page if needed
    navigate('/Activities');
  };

  const NavegateActivity = () => 
  {
      navigate('/Activities');
=======
>>>>>>> fc50ec7ffc9a91e7ed74feafa5480e9a866fcf61
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
<div className="hero-container position-relative">
  {/* Carousel */}
  <Carousel fade interval={3000} controls={false} indicators={false}>
    {images.map((img, idx) => (
      <Carousel.Item key={idx}>
        <img className="d-block w-100 hero-image" src={img} alt="Hero" />
      </Carousel.Item>
    ))}
  </Carousel>

  {/* Search overlay: MUST BE OUTSIDE Carousel */}
  <div className="search-overlay">
    <h1 className="hero-heading">Find Your Perfect Place</h1>
    <p className="hero-subtitle">Search from thousands of options</p>
    <Form onSubmit={handleSearch}>
      <InputGroup>
        <InputGroup.Text>
          <img src={lupa} alt="search" style={{ width: "20px" }} />
        </InputGroup.Text>
        <Form.Control type="text" name="search" placeholder="Search..." />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </InputGroup>
    </Form>
  </div>
</div>



      {/* Popular Cities */}
      <section className="popular-cities pt-5 pb-5">
        <div className="container">
          <h2 className="mb-4">Popular Cities</h2>
          <Row className="g-3">
            {popularCities.map((city, idx) => (
              <Col key={idx} md={3} sm={6}>
<<<<<<< HEAD
                <Card className="city-card text-white" onClick={NavegateActivity}>
                  <Card.Img src={city.img} alt={city.name} />
=======
                <Card className="city-card text-white text-center">
                 <Card.Img src={city.img} alt={city.name} className="city-img" />

>>>>>>> fc50ec7ffc9a91e7ed74feafa5480e9a866fcf61
                  <Card.ImgOverlay className="d-flex align-items-end p-2">
                    <Card.Title>{city.name}</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-3">
            <Button
              variant="primary"
              onClick={() => setShowContinents(!showContinents)}
            >
              See More
            </Button>
          </div>
        </div>
      </section>

      {/* Continents → Countries → Cities */}
      {showContinents && (
        <section className="continents-section py-5">
          <div className="container">
            <h2 className="mb-4">Explore Countries & Cities</h2>
            <div className="d-flex flex-wrap">
              {/* Continents */}
              <div className="me-4 continent-list" style={{ minWidth: "150px" }}>
                {Object.keys(continents).map((cont, idx) => (
                  <div
                    key={idx}
                    className="continent-item p-2 mb-2 rounded bg-light text-center"
                    onMouseEnter={() => {
                      setHoveredContinent(continents[cont]);
                      setHoveredCountry(null);
                    }}
                    onMouseLeave={() => setHoveredContinent(null)}
                    style={{ cursor: "pointer" }}
                  >
                    {cont}
                  </div>
                ))}
              </div>

              {/* Countries & Cities */}
              <div className="flex-grow-1 country-city-panel">
                {hoveredContinent &&
                  hoveredContinent.map((country, idx) => (
                    <div
                      key={idx}
                      className="country-item p-2 m-1 rounded bg-secondary text-white"
                      onMouseEnter={() => setHoveredCountry(country)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      style={{ cursor: "pointer" }}
                    >
                      {country.name}
                      {hoveredCountry === country && (
                        <div className="cities mt-2">
                          <h5>Cities in {country.name}:</h5>
                          <div className="d-flex flex-wrap">
                            {country.cities.map((city, ci) => (
                              <div
                                key={ci}
                                className="city-card p-2 m-1 rounded bg-light text-dark shadow-sm"
                              >
                                {city}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

export default InitialPage;
