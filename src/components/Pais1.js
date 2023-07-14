import React from 'react'
import { PaisShape } from '../shapes/PaisShape';

function Pais({Pais}) {
  const {flag} = Pais;

  return (
    <div>
      <img src={flag}></img>        
    </div>
  )
}

Pais.propTypes = {
    pais:PaisShape
}

export default Pais
