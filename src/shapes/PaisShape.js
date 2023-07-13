import {string, shape} from 'prop-types'

export const PaisShape = shape({
    name:string.isRequired,
    flag:string.isRequired,
    iso2:string,
    iso3:string
})