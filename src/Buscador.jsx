import React from "react";

function Buscador(){
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

export default Buscador;