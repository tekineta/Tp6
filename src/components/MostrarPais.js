import React from 'react'
import {arrayOf} from 'prop-types'
import { PaisShape } from '..'
import Pais from './pais'

function mostrarPais({Pais}) {
  return (
    <>
        
        {Pais.map((nombre, bandera)=>(
            <Pais
                key={bandera}
                pais={nombre}
            />
        ))}
    </>
  )
}

mostrarPais.propTypes = {
    Pais:arrayOf(mostrarPais)
}

export default mostrarPais
