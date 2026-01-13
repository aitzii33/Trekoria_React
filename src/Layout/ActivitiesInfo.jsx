import { Row, Col } from "reactstrap"
import { useState } from "react"
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "../assets/CSS/DatePicker.css"
import BoatImg from "../assets/img/Boat.avif"
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/CSS/Activity_details.css";

function ActivitiesInfo()
{
    const [selectedDate, setSelectedDate] = useState(null);

    return(
        <>
            <Header/>
                <Row>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={BoatImg} className="d-block w-100" alt="activity image"/>
                            </div>

                            <div className="carousel-item">
                                <img src={BoatImg} className="d-block w-100" alt="activity image"/>
                            </div>
                            
                            <div className="carousel-item">
                                <img src={BoatImg} className="d-block w-100" alt="activity image"/>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </Row>

                <Row className="justify-content-center mt-4">
                    <Col md={8} className="activity-info">
                        <h2>Kayak in the river</h2>
                        <p className="description">Activity giuded for all the ages and levels</p>

                        <div className="activity-form">
                        <div className="col-auto">
                            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)}
                            dateFormat="dd-MM-yyyy"
                            highlightDates={[new Date()]}
                            placeholderText="Selecciona una fecha"
                            className="form-control"
                            name="date"
                            />
                        </div>

                        <div className="col-auto dropdown">
                            <button
                            type="button"
                            className="btn dropdown-toggle"
                            data-bs-toggle="dropdown"
                            >
                            HOURS
                            </button>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Link 1</a></li>
                            <li><a className="dropdown-item" href="#">Link 2</a></li>
                            <li><a className="dropdown-item" href="#">Link 3</a></li>
                            </ul>
                        </div>

                        <div className="col-auto dropdown">
                            <button
                            type="button"
                            className="btn dropdown-toggle"
                            data-bs-toggle="dropdown"
                            >
                            People
                            </button>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Link 1</a></li>
                            <li><a className="dropdown-item" href="#">Link 2</a></li>
                            <li><a className="dropdown-item" href="#">Link 3</a></li>
                            </ul>
                        </div>
                        </div>

                        <div className="activity-actions">
                        <span className="price">25€</span>
                        <button className="btn-reserve">Reserve</button>
                        </div>
                    </Col>
                </Row>
            <Footer/>
        </>
    );
}

export default ActivitiesInfo;