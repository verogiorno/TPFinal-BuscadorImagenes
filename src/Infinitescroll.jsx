import React from "react";

function Infinitescroll(){
    return(
        {
            random==1 &&
              <InfiniteScroll 
              dataLength={resultados.length} 
              hasMore={true} 
              next={()=> setPage((prevPage) => prevPage + 1)}>
          
              <div className='container-fluid divContainer'>
                  <div className='row justify-content-center grillaFotos'>
                    {
                      resultados.map((elemento, indice) => {
                      return(
                        <div className='col-lg-2 col-md-3 col-sm-4 col-6 card customCard'>
                          <img className='card-img-top' key={indice} src={elemento.urls.regular} alt=''/>
                          <div className="card-body imgDesc">
                          <p className="text-left locationRs">Descripción: <span className='span2'>{elemento.alt_description?elemento.alt_description:"Info no disponible"}</span></p>
                          <div className='bgAsRs'>
                            <a onClick={()=>buscarResultados(elemento.tags[0].title)} className="text-left tagsRs"> #{elemento.tags[0].title}</a>
                            <a onClick={()=>buscarResultados(elemento.tags[1].title)} className="text-left tagsRs"> #{elemento.tags[1].title}</a>
                            <a onClick={()=>buscarResultados(elemento.tags[2].title)} className="text-left tagsRs"> #{elemento.tags[2].title}</a> 
                    </div>
                          <button className='btn btn-info btnInfo' onClick={() => handlePreview(elemento.id)}>Más Info</button>
          
                          </div>
                        </div>
                        )
                      })
                    }
          
                  </div>
                </div>
              </InfiniteScroll> 
          }
    );
}

export default Infinitescroll;