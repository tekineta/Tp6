import React from 'react'
import {arrayOf} from 'prop-types'
import { PaisShape } from '../shapes/PaisShape'
import Pais from './Pais'

function mostrarPais({Pais}) {
  return (
    <>
        
        {Pais.map((name, flag)=>(
            <Pais
                key={flag}
                pais={name}
            />
        ))}
    </>
  )
}

mostrarPais.propTypes = {
    Pais:arrayOf(PaisShape)
}

export default mostrarPais
