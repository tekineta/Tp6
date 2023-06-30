/*import logo from './logo.svg';
import axios from 'axios';
import {useState , useEffect} from 'react';

const [paises, setPaises] = useState([]);
const [paisElegido, setPaisElegido] = useState(0);
const [contador, setContador] = useState(0)

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

  if(paises.length === 0)return (<div></div>);

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

  export default validar;
*/