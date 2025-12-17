import lupa from '../assets/img/lupa.png'
import Header from '../Components/Header'
import Footer from '../Components/Footer'



function InitialPage()
{
    return(
        <>
            <Header/>
            
            <div>
                {/* When they click on the 'Where are you going?' 
                    appear all the list of the places, and when 
                    they are writing they are going to appear only 
                    cities which start with - */}

                <p className="search" aria-placeholder="Where are you going to?" id="id_place">
                    <img className="img" scr={lupa}></img>
                </p>       
            </div>

            <div>
                {/* Will be the 9 most important citiest flash card (only are 
                    going to appear the cities which people take more museums)
                    (we need a function to found the most popular cities) */}

                {cities.slice(0, 9).map((city, index) => 
                (
                    <div key={index} className="card" style={{ width: "18rem", left: "120px" }}>
                        <img src={city.image} className="card-img-top" alt={city.name} />
                        <div className="card-body">
                            <h5 className="card-title">{city.name}</h5>
                            <p className="card-text">{city.description}</p>
                            <a href="#" className="btn btn-success" data-bs-toggle="modal">View activities</a>
                        </div>
                    </div>
                ))}
            </div>

            <Footer/>
        </>
    );
}

export default InitialPage;