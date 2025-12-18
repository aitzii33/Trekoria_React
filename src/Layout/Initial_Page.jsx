import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  Carousel,
  Form,
  Button,
  InputGroup,
  Card,
  Row,
  Col,
} from "react-bootstrap";

// Images
import LandingImg1 from "../assets/img/LandingImg1.png";
import LandingImg2 from "../assets/img/LandingImg2.jpg";
import LandingImg3 from "../assets/img/LandingImg3.jpg";
import lupa from "../assets/img/lupa.png";
import Baloon from "../assets/img/Baloon.jpg";
import TokyoImg from "../assets/img/Tokyo.webp";
import Baloon2 from "../assets/img/Baloon2.webp";

import "../assets/CSS/Home.css";

function InitialPage() {
  const [showContinents, setShowContinents] = useState(false);
  const [hoveredContinent, setHoveredContinent] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const images = [LandingImg1, LandingImg2, LandingImg3];

  const popularCities = [
    { name: "Paris", img: Baloon },
    { name: "Tokyo", img: TokyoImg },
    { name: "New York", img: LandingImg3 },
    { name: "London", img: Baloon2 },
  ];

  const worldData = [
  {
    name: "Asia",
    countries: [
      { name: "Japan", cities: ["Tokyo", "Kyoto", "Osaka"] },
      { name: "China", cities: ["Beijing", "Shanghai", "Shenzhen"] },
      { name: "India", cities: ["Delhi", "Mumbai", "Bangalore"] },
    ],
  },
  {
    name: "Europe",
    countries: [
      { name: "France", cities: ["Paris", "Lyon", "Nice"] },
      { name: "Germany", cities: ["Berlin", "Munich", "Hamburg"] },
      { name: "United Kingdom", cities: ["London", "Manchester", "Edinburgh"] },
    ],
  },
  {
    name: "Africa",
    countries: [
      { name: "Egypt", cities: ["Cairo", "Alexandria", "Giza"] },
      { name: "South Africa", cities: ["Johannesburg", "Cape Town", "Durban"] },
      { name: "Nigeria", cities: ["Lagos", "Abuja", "Ibadan"] },
    ],
  },
  {
    name: "North America",
    countries: [
      { name: "USA", cities: ["New York", "Los Angeles", "Chicago"] },
      { name: "Canada", cities: ["Toronto", "Vancouver", "Montreal"] },
      { name: "Mexico", cities: ["Mexico City", "Guadalajara", "Monterrey"] },
    ],
  },
  {
    name: "South America",
    countries: [
      { name: "Brazil", cities: ["Sao Paulo", "Rio de Janeiro", "Brasilia"] },
      { name: "Argentina", cities: ["Buenos Aires", "Cordoba", "Rosario"] },
      { name: "Chile", cities: ["Santiago", "Valparaiso", "Concepcion"] },
    ],
  },
  {
    name: "Oceania",
    countries: [
      { name: "Australia", cities: ["Sydney", "Melbourne", "Brisbane"] },
      { name: "New Zealand", cities: ["Auckland", "Wellington", "Christchurch"] },
      { name: "Fiji", cities: ["Suva", "Nadi", "Lautoka"] },
    ],
  },
  {
    name: "Antarctica",
    countries: [
      { name: "No Countries", cities: ["No Cities"] },
    ],
  },
];



  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    console.log("Search:", query);
    // redirect to search results page if needed
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="hero-container">
        <Carousel fade interval={2000} controls={false} indicators={false}>
          {images.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img className="d-block w-100 hero-image" src={img} alt="Hero" />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Overlay Heading + Search */}
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

      {/* Popular Cities Section */}
      <section className="popular-cities pt-4 pb-4">
        <div className="container">
          <h2 className="mb-4">Popular Cities</h2>
          <Row className="g-3">
            {popularCities.map((city, idx) => (
              <Col key={idx} md={3} sm={6}>
                <Card className="city-card text-white">
                  <Card.Img src={city.img} alt={city.name} />
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

      {/* Continents / Countries / Cities Section */}
   {showContinents && (
  <section className="continents-section py-5">
    <div className="container">
      <h2 className="mb-4">Explore the World</h2>
      <div className="d-flex flex-wrap">
        {/* Left: Continents */}
        <div className="me-4 continent-list" style={{ minWidth: "150px" }}>
          {worldData.map((continent, idx) => (
            <div
              key={idx}
              className="continent-item p-2 mb-2 rounded bg-light text-center"
              onMouseEnter={() => {
                setHoveredContinent(continent);
                setHoveredCountry(null);
              }}
              onMouseLeave={() => setHoveredContinent(null)}
              style={{ cursor: "pointer" }}
            >
              {continent.name}
            </div>
          ))}
        </div>

        {/* Right: Countries and Cities */}
        <div className="flex-grow-1 country-city-panel">
          {hoveredContinent && (
            <div>
              <h4>{hoveredContinent.name}</h4>
              <div className="d-flex flex-wrap">
                {hoveredContinent.countries.map((country, idx) => (
                  <div
                    key={idx}
                    className="country-item p-2 m-1 rounded bg-secondary text-white"
                    onMouseEnter={() => setHoveredCountry(country)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    style={{ cursor: "pointer" }}
                  >
                    {country.name}
                  </div>
                ))}
              </div>

              {hoveredCountry && (
                <div className="cities mt-3">
                  <h5>Cities in {hoveredCountry.name}:</h5>
                  <div className="d-flex flex-wrap">
                    {hoveredCountry.cities.map((city, idx) => (
                      <div
                        key={idx}
                        className="city-card p-2 m-1 rounded bg-light text-dark shadow-sm"
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
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
