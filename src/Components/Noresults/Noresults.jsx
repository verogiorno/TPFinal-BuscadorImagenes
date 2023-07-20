import React from "react";
import "./Noresults.css"

const Noresults = ()=> {
    return(
            <div className="container-fluid noResultsCont">
              <div className="row justify-content-center">
                <div className="col-md-4 card noResultsCard">
                  <img src="./notFound.jpg" alt="" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">No se encontraron resultados</h5>
                    <p className="card-text">Lo sentimos, no encontramos lo que estás buscando.</p>
                  </div>
                </div>
              </div>
            </div>
    );
}

export {Noresults};