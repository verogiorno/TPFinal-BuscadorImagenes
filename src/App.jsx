import { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component" ;
import Buscador from './Buscador';
import Random from './Random';
import Infinitescroll from './Infinitescroll';
import Imgpreview from './Imgpreview';
import Noresults from './Noresults';

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
  
    const apiKey = 'YouQqOd8I-uJprnEiQvJaiM6OxHa9EP6tCJcXdJYoyo';
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
      console.log(probando)
      setRandom(2) 
      setSearchError(true)
    }else{
      setRandom(1)
      setSearchError(false)
    }
    console.log(data.results)
  };

  //Get Random Images on Main

useEffect(()=>{

  const randomImg = async () => {
      
    const apiKey = 'YouQqOd8I-uJprnEiQvJaiM6OxHa9EP6tCJcXdJYoyo'
    const URL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=15`
    const respuesta = await fetch(URL);
    const data = await respuesta.json();
    setMostrarRandomArray(data)
     console.log('aca se esta mostrando el random:' ,data)
    setValorRender(valorRender + 1)
      
    }

    randomImg()

},[]) //Al no pasar ningún parámetro, sólo se ejecuta el Random una vez (al iniciar la App)

//Scroll Infinito
useEffect( () =>{ 
  const buscarResultadosInfinito = async () =>{
    const apiKey = 'YouQqOd8I-uJprnEiQvJaiM6OxHa9EP6tCJcXdJYoyo'
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
  const URL = `https://api.unsplash.com/photos/${image}/?client_id=YouQqOd8I-uJprnEiQvJaiM6OxHa9EP6tCJcXdJYoyo`
  const respuesta = await fetch(URL);
  const data = await respuesta.json();
  console.log(data)
  setSelectedImage(data);
  setPreview (true)
  document.body.style.overflow='hidden'
};




  return (
    <div>
    <Buscador />
    <Random />
    <Infinitescroll />
    <Imgpreview />
    <Noresults />
    </div>

  );
}

export default App;
