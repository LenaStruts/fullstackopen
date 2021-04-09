import React from 'react'
import Country from './Country'

const Countries = ({ countries }) => {
    const country = countries[0]
    if (countries.length === 1) {
        return (
            <Country country={country} />
        ) 
    } else if (countries.length <= 10) {
        return (
            <ul>
                {countries.map(country => 
                <li key={country.alpha3Code}>
                    {country.name}
                </li>
                )}
            </ul>
        )
    } else {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }
  }

export default Countries