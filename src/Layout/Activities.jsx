import React, { Activity, useState } from "react"
import DatePicker from "react-datepicker"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-datepicker/dist/react-datepicker.css"
import "../assets/CSS/DatePicker"
import Header from '../Components/Header'
import Footer from '../Components/Footer'


function Activities()
{
    const [selectedDate, setSelectedDate] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Fecha seleccionada:", selectedDate);
    };

    return(
        <Container fluid className="px-1 px-sm-5 mx-auto mt-4">
            <Header/>

            <Row className="d-flex justify-content-sm-center px-2">
                <Form onSubmit={handleSubmit} autoComplete="off" className="form-group row">
                    <div className="col-auto">
                        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat="dd-MM-yyyy"
                        highlightDates={[new Date()]} placeholderText="Selecciona una fecha" className="form-control" name="date" />
                    </div>

                    <div className="col-auto">
                        <Button type="submit" variant="success" class="btn">
                            Send
                        </Button>
                    </div>
                </Form>
            </Row>

            <Row>
                <div class="card w-75">
                    <div class="card-body">
                        <img class="card-img-top" src={Activity.image} alt="activity image"></img>
                        <h5 class="card-title" aria-valuetext={Activity.name}></h5>
                        <p class="card-text" aria-valuetext={Activity.description}></p>
                        <p class="card-price" aria-valuetext={Activity.price}></p>
                        <a href="#" class="btn btn-primary">See more</a>
                    </div>
                </div>
            </Row>

            <Footer/>
        </Container>
    );
}

export default Activities;