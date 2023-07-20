import React from "react";
import { GlobalContext } from "../../App";
import { useContext } from "react";
import "./Buscador.css"

const Buscador=()=> {
  const{setInputValue, buscarResultados, inputValue}=useContext(GlobalContext)
    return(
        <div className='input-group mb-3 searchBox'>
        <input
    className="form-control shadow-none inptBuscar" placeholder="Buscar imágenes" onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => {
      if (e.key === 'Enter') {
        if (inputValue.trim() === '') {
          return;
        }
        buscarResultados();
      }
    }}
  />
      <button onClick={()=>buscarResultados()} type="button" className="btn btn-info btnBuscar">Buscar</button>
        </div>
    );
}

export {Buscador}