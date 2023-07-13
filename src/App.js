import './App.css';
import MostrarPaises from "./components/MostrarPais";             
import axios from 'axios';
import {useState , useEffect} from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [paises, setPaises] = useState([]);
  const [paisElegido, setPaisElegido] = useState(0);
  const [contador, setContador] = useState(0)

  const elegirNuevoPais = (longitud) => {
    const random = Math.floor(Math.random() * longitud);
    setPaisElegido(random);
  }

  useEffect(() => {
    setLoading(true);
    axios.get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((response) => {
        setLoading(false);
        const paises = response.data.data;
        console.log(paises)
        setPaises(paises);
        elegirNuevoPais(paises.length);
      });
  }, []);
  
  let ValidarNombre = (e) => {
    e.preventDefault();
    if (e.target.inputPais.value === paises[paisElegido].name){
      setContador(contador + 10);

    } else {
      if (contador > 0 ) setContador(contador -1);
    }
    e.target.inputPais.value = "";
    elegirNuevoPais(paises.length);
  }

  if(paises.length === 0) return (<div></div>);

  return (
    <div className="App">
      <header className="App-header">
        <img src={paises[paisElegido].flag} className="App-logo" alt="logo" />
        
        <form onSubmit={ValidarNombre}>
          <input type='text' placeholder='pais' className='form' name="inputPais"/>
          <button type='submit' >send </button>        
        </form>
        <p className='contador'>{contador}</p>
      </header>
      <body></body>
    </div>
  );
  /*function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;*/ 
    
  
}

export default App;
