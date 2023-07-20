import React from "react";
import { GlobalContext } from "../../App";
import { useContext } from "react";
import "./Random.css"
import { Imgpreview } from "../Imgpreview/Imgpreview";

const Random = ()=> {
  const{mostrarRandomArray, handlePreview, preview}=useContext(GlobalContext)
    return(
      <div>
      <div className='container-fluid divContainer'>
        <div className='row justify-content-center grillaFotos'>
          {
            mostrarRandomArray.map((elemento, indice) => {
              return(
                <div  className='col-lg-2 col-md-3 col-sm-4 col-6 card customCard'>
                  <img className='card-img-top' key={indice} src={elemento.urls.regular} alt=''/>
                    <div className="card-body imgDesc">
                      <p className="text-left locationRs">Ubicación: <span className='span2'>{elemento.location.country?elemento.location.country:"Info no disponible"}</span></p>
                      <p className="text-left modelRs">Cámara: <span className='span2'>{elemento.exif.name?elemento.exif.name:"Info no disponible"}</span></p>
                      <button className='btn btn-info btnInfo' onClick={() => handlePreview(elemento.id)}>Más Info</button>
                    </div>
                </div>
                  )
                }
            )
          }   
        </div>
      </div>
      {preview && <Imgpreview/>}
      </div>
    );
}

export {Random}