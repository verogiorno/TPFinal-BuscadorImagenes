import React from "react";

function Imgpreview(){
    return(
        {preview &&

            <div className={preview ? 'previewImgCont fullscreen' : 'previewImgCont'}>
                  <div className="container-fluid customCardPv">
                    <img src={selectedImage.urls.regular} alt='' className="img-fluid imgPrev" />
                    <div className="descriptionPv">
                      <p className="text-left location">Descripción: <span className='span1'>{selectedImage.alt_description?selectedImage.alt_description:"Info no disponible"}</span></p>
                      <p className="text-left location">Ubicación: <span className='span1'>{selectedImage.location.country?selectedImage.location.country:"Info no disponible"}</span></p>
                      <p className="text-left model">Cámara: <span className='span1'>{selectedImage.exif.name?selectedImage.exif.name:"Info no disponible"}</span></p>
                      <div className='bgAs'>
                        <a className="text-left tags"> #{selectedImage.tags_preview[0].title}</a>
                        <a className="text-left tags"> #{selectedImage.tags_preview[1].title}</a>
                        <a className="text-left tags"> #{selectedImage.tags_preview[2].title}</a>
                      </div>
                      <div className='container-fluid divContFlex'>
                        <div className='iconCont1'>
                          <i className="bi bi-suit-heart-fill icono"></i>
                          <p className="text-left descP"><span className='span1'>{selectedImage.likes}</span></p>
                        </div>
                        <div className='iconCont2'>
                          <i className="bi bi-eye-fill icono"></i>
                          <p className="text-left descP"><span className='span1'>{selectedImage.views}</span></p>
                        </div>
                        <div className='iconCont3'>
                          <a href={selectedImage.links.html} target='blank'><i className="bi bi-cloud-arrow-down-fill iconoCloud"></i></a>
                          <p className="text-left descP"><span className='span1'>{selectedImage.downloads}</span></p>
                        </div>
                      </div>
                      <div className='container btnCloseCont'>
                      <button className='btn btn-info btnClosePv' onClick={()=>(setPreview(false), document.body.style.overflow='unset')}>Close</button>
                      </div>
                    </div>
                  </div>
              </div>
            }
    );
}

export default Imgpreview;