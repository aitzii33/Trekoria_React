import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Activity } from 'react'
import "../assets/CSS/DatePicker"

function ActivitiesInfo()
{
    return(
        <Container fluid className="px-1 px-sm-5 mx-auto mt-4">
            <Header/>
                <Row>
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            {/*for con todas las imagenes que tenga la actividad*/}
                            <div class="carousel-item active">
                                <img src={Activity.image} class="d-block w-100" alt="activity image"/>
                            </div>

                            <div class="carousel-item">
                                <img src={Activity.image} class="d-block w-100" alt="activity image"/>
                            </div>
                            
                            <div class="carousel-item">
                                <img src={Activity.image} class="d-block w-100" alt="activity image"/>
                            </div>
                        </div>

                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>

                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </Row>

                <Row>
                    <div className="col-auto">
                        <a aria-valuetext={Activity.name}></a>
                        <p aria-valuetext={Activity.description}></p>
                        <a aria-valuetext={Activity.price}></a>
                    </div>

                    <div className="col-auto">
                        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat="dd-MM-yyyy"
                        highlightDates={[new Date()]} placeholderText="Selecciona una fecha" className="form-control" name="date" />
                    </div>

                    <div className="col-auto dropdown">           
                        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">
                            HOURS
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Link 1</a></li>
                            <li><a class="dropdown-item" href="#">Link 2</a></li>
                            <li><a class="dropdown-item" href="#">Link 3</a></li>
                        </ul>
                    </div>

                    <div className="col-auto dropdown">           
                        <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">
                            People
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Link 1</a></li>
                            <li><a class="dropdown-item" href="#">Link 2</a></li>
                            <li><a class="dropdown-item" href="#">Link 3</a></li>
                        </ul>
                    </div>
                </Row>
            <Footer/>
        </Container>
    );
}

export default ActivitiesInfo;