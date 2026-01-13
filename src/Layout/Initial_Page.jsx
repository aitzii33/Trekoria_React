import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Carousel, Form, Button, InputGroup, Card, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/CSS/Home.css";

// Images
import LandingImg1 from "../assets/img/LandingImg1.png";
import LandingImg2 from "../assets/img/LandingImg2.jpg";
import LandingImg3 from "../assets/img/LandingImg3.jpg";
import lupa from "../assets/img/lupa.png";
import Baloon from "../assets/img/Baloon.jpg";
import TokyoImg from "../assets/img/Tokyo.webp";
import Baloon2 from "../assets/img/Baloon2.webp";

// Data
import countriesData from "../assets/DATA/contries.json";
import countryToContinent from "../assets/DATA/Continent.json";

// Popular cities with images
const popularCities = [
  { name: "Paris", img: Baloon },
  { name: "Tokyo", img: TokyoImg },
  { name: "New York", img: LandingImg3 },
  { name: "London", img: Baloon2 },
];

function InitialPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showContinents, setShowContinents] = useState(false);
  const [showContinents, setShowContinents] = useState(false);
  const [hoveredContinent, setHoveredContinent] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

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
    navigate('/Activities'); // Example navigation
  };

  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const toggleContinents = () => {
    const newShow = !showContinents;
    setShowContinents(newShow);
    if (!newShow) {
      // clear selections when closing the panel
      setSelectedContinent(null);
      setSelectedCountry(null);
      setHoveredContinent(null);
      setHoveredCountry(null);
    }
  };

  const activeContinent = hoveredContinent || selectedContinent;

  const [searchQuery, setSearchQuery] = useState("");

  // Build filtered suggestions (countries + their cities) only when user types something
  const suggestions = (() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    const setS = new Set();
    Object.keys(countriesData).forEach((country) => {
      if (country.toLowerCase().includes(q)) setS.add(country);
      countriesData[country].forEach((city) => {
        if (city.toLowerCase().includes(q)) setS.add(city);
      });
    });
    return Array.from(setS);
  })();

  // Use this submit so we prefer the controlled state but still work if needed
  const submitSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim() || (e.target.search && e.target.search.value) || "";
    console.log("Search:", query);
    navigate(`/Activities?search=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="hero-container position-relative">
        <Carousel fade interval={3000} controls={false} indicators={false}>
          {images.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img className="d-block w-100 hero-image" src={img} alt={t("Hero")} />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Search overlay */}
        <div className="search-overlay">
          <h1 className="hero-heading">{t("Find Your Perfect Place")}</h1>
          <p className="hero-subtitle">{t("Search from thousands of options")}</p>
          <Form onSubmit={submitSearch}>
            <InputGroup>
              <InputGroup.Text>
                <img src={lupa} alt={t("search")} style={{ width: "20px" }} />
              </InputGroup.Text>

              {/* Controlled input; suggestions appear only when user types */}
              <Form.Control
                type="text"
                name="search"
                placeholder={t("Search...")}
                list="search-suggestions"
                autoComplete="off"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="primary" type="submit">
                {t("Search")}
              </Button>
            </InputGroup>

            {/* Render datalist only when there's some input */}
            <datalist id="search-suggestions">
              {suggestions.map((s) => (
                <option key={s} value={s} />
              ))}
            </datalist>
          </Form>
        </div>
      </div>

      {/* Popular Cities */}
      <section className="popular-cities pt-5 pb-5">
        <div className="container">
          <h2 className="mb-4">{t("Popular Cities")}</h2>
          <Row className="g-3">
            {popularCities.map((city, idx) => (
              <Col key={idx} md={3} sm={6}>
                <Card className="city-card text-black text-center">
                  <Card.Img src={city.img} alt={t(city.name)} className="city-img" />
                  <Card.ImgOverlay className="d-flex align-items-end p-2"></Card.ImgOverlay>
                  <Card.Title>{t(city.name)}</Card.Title>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-3">
            <Button variant="primary" onClick={toggleContinents}>
              {t("See More")}
            </Button>
          </div>
        </div>
      </section>

      {/* Continents → Countries → Cities */}
      {showContinents && (
        <section className="continents-section py-5">
          <div className="container">
            <h2 className="mb-4">{t("Explore Countries & Cities")}</h2>
            <div className="d-flex flex-wrap">
              {/* Continents */}
              <div className="me-4 continent-list" style={{ minWidth: "150px" }}>
                {Object.keys(continents).map((cont, idx) => {
                  const contObj = continents[cont];
                  const isSelected = selectedContinent === contObj;
                  return (
                    <div
                      key={idx}
                      className={`continent-item p-2 mb-2 rounded text-center ${
                        isSelected ? "bg-primary text-white" : "bg-light"
                      }`}
                      onMouseEnter={() => setHoveredContinent(contObj)}
                      onMouseLeave={() => {
                        if (!isSelected) setHoveredContinent(null);
                      }}
                      onClick={() => {
                        setSelectedContinent(isSelected ? null : contObj);
                        setSelectedCountry(null);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {t(cont)}
                    </div>
                  );
                })}
              </div>

              {/* Countries & Cities */}
              <div className="flex-grow-1 country-city-panel">
                {activeContinent &&
                  activeContinent.map((country, idx) => {
                    const isCountrySelected = selectedCountry === country;
                    return (
                      <div
                        key={idx}
                        className={`country-item p-2 m-1 rounded ${
                          isCountrySelected ? "bg-dark text-white" : "bg-secondary text-white"
                        }`}
                        onMouseEnter={() => setHoveredCountry(country)}
                        onMouseLeave={() => {
                          if (!isCountrySelected) setHoveredCountry(null);
                        }}
                        onClick={() => {
                          setSelectedCountry(isCountrySelected ? null : country);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        {t(country.name)}
                        {(hoveredCountry === country || isCountrySelected) && (
                          <div className="cities mt-2">
                            <h5>
                              {t("Cities in")} {t(country.name)}:
                            </h5>
                            <div className="d-flex flex-wrap">
                              {country.cities.map((city, ci) => (
                                <div key={ci} className="city-card p-2 m-1 rounded bg-light text-dark shadow-sm">
                                  {t(city)}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
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
