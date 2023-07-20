import React, { useState, useEffect } from 'react';
import {Buscador} from './Components/Buscador/Buscador';
import {Random} from './Components/Random/Random';
import {Scrolleoinf} from './Components/Scrolleoinf/Scrolleoinf';
import {Noresults} from './Components/Noresults/Noresults';
import InfiniteScroll from "react-infinite-scroll-component";
export const GlobalContext = React.createContext()

function App() {
  const [resultados, setResultados] = useState([]);
  const [page, setPage] = useState(1)
  const [mostrarRandomArray, setMostrarRandomArray] = useState([])
  const [valorRender, setValorRender] = useState(1)
  const [random, setRandom] = useState(0) 
  const [selectedImage, setSelectedImage] = useState({});
  const [preview, setPreview] = useState (false)
  const [showNoResults, setShowNoResults] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchError, setSearchError] = useState(false);
  
//Buscador Funcional
  const buscarResultados = async (valor) => {
    if (inputValue.trim() === '') {
      return;
    }
    let palabra=inputValue
    if (valor!=null){
      palabra=valor
      setInputValue(palabra)
    }
   
    let prueba=3
  
    const apiKey = '6kuNwNKg2DBE06ziucijyHQdnHJe4_8yvDnurYw_nO8';
    const URL = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${palabra}&per_page=20`;
  
    const response = await fetch(URL);
    const data = await response.json();
    if (data.results.length === 0) {
      setShowNoResults(true);
    } else {
      setShowNoResults(false);
      setResultados(data.results);
    }
  
    setValorRender(1);
    setPage(2);
    if(data.results.length==0){
      let probando=prueba
      setRandom(2) 
      setSearchError(true)
    }else{
      setRandom(1)
      setSearchError(false)
    }
  };

  //Get Random Images on Main

useEffect(()=>{

  const randomImg = async () => {
      
    const apiKey = '6kuNwNKg2DBE06ziucijyHQdnHJe4_8yvDnurYw_nO8'
    const URL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=30`
    const respuesta = await fetch(URL);
    const data = await respuesta.json();
    setMostrarRandomArray(data)
    setValorRender(valorRender + 1)
      
    }

    randomImg()

},[]) //Al no pasar ningún parámetro, sólo se ejecuta el Random una vez (al iniciar la App)

//Scroll Infinito
useEffect( () =>{ 
  const buscarResultadosInfinito = async () =>{
    const apiKey = '6kuNwNKg2DBE06ziucijyHQdnHJe4_8yvDnurYw_nO8'
    const URL = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${inputValue}&per_page=30&page=${page}`

    const response = await fetch(URL);
    const data = await response.json();
    setResultados((prevResultados)=> prevResultados.concat(data.results))
}

buscarResultadosInfinito()
    
},[page])

//Tocar la tecla ENTER para activar el botón Buscar
const handleKeyPress = (event) => {
  if (event.key === 'Enter') {
    buscarResultados();
  }
};

//Image Preview/Close
const handlePreview = async (image) => {
  const URL = `https://api.unsplash.com/photos/${image}/?client_id=6kuNwNKg2DBE06ziucijyHQdnHJe4_8yvDnurYw_nO8`
  const respuesta = await fetch(URL);
  const data = await respuesta.json();
  setSelectedImage(data);
  setPreview (true)
  document.body.style.overflow='hidden'
};


const global = {resultados, setResultados, page, setPage, mostrarRandomArray, setMostrarRandomArray, valorRender, setValorRender, random, setRandom, selectedImage, setSelectedImage, preview, setPreview, showNoResults, setShowNoResults, inputValue, setInputValue, searchError, setSearchError, buscarResultados, handleKeyPress, handlePreview}


  return (
    <GlobalContext.Provider value={global}>
      <Buscador />
      
      {
        random==0 &&
         <Random />
      }
      
      <InfiniteScroll dataLength={resultados.length}hasMore={true}next={()=> setPage((prevPage) => prevPage + 1)}>
      {
        random==1 &&
          <Scrolleoinf/>
      }

      {  
        random==2 &&
          <Noresults />   
      }
      
      </InfiniteScroll>
      
    </GlobalContext.Provider>
  );
}

export default App;