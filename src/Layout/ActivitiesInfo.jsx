import "react-datepicker/dist/react-datepicker.css"
import "../assets/CSS/DatePicker.css"
import "../assets/CSS/Activity_details.css"

import Header from '../Components/Header'
import Footer from '../Components/Footer'

import BoatImg from "../assets/img/Boat.avif"

import { Container, Row, Col } from "reactstrap"
import { useState } from "react"
import DatePicker from "react-datepicker"
import Dropdown from 'react-bootstrap/Dropdown'
import { useNavigate } from "react-router-dom"

function ActivitiesInfo()
{
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate();

    const routeCart = () => 
    {
        navigate('/Cart');
    };


    return(
        <Container>
            <Header/>
                <Row>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Activity.image} className="d-block w-100" alt="activity image"/>
                            </div>

                            <div className="carousel-item">
                                <img src={Activity.image} className="d-block w-100" alt="activity image"/>
                            </div>
                            
                            <div className="carousel-item">
                                <img src={Activity.image} className="d-block w-100" alt="activity image"/>
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
                    <Col md={11} className="activity-info">
                        <h2>Kayak in the river</h2>
                        <p className="description">Activity giuded for all the ages and levels</p>

                        <div className="activity-form">
                            <div className="col-auto">
                                <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat="dd-MM-yyyy" highlightDates={[new Date()]} placeholderText="Select date" className="form-control" name="date"/>
                            </div>

                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Hours
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">8:00 a.m.</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">9:00 a.m.</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">10:00 a.m.</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    People
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="activity-actions">
                            <span className="price">25€</span>
                            <button className="btn-reserve" onClick={routeCart}>Reserve</button>
                        </div>
                    </Col>
                </Row>
            <Footer/>
        </Container>
        </Container>
    );
}

export default ActivitiesInfo;