import React from 'react'
import { PaisShape } from '..';

function Pais({pais}) {
  const {imagen} = pais;

  return (
    <div>
        <h1>{imagen}</h1>
        
    </div>
  )
}

Pais.propTypes = {
    persona:PaisShape
}

export default Pais
