import React from 'react'
import {arrayOf} from 'prop-types'
import { PaisShape } from '../shapes/PaisShape'
import Pais1 from './Pais1'

function mostrarPais({Pais}) {
  return (
    <>
        
        {Pais.map((name, flag)=>(
            <Pais1
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
