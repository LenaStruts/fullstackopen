import React from 'react'
import Country from './Country'

const Countries = (props) => {
    const country = props.countries[0]
    if (props.countries.length === 1) {
        return (
            <Country country={country} />
        ) 
    } else if (props.countries.length <= 10) {
        return (
            <ul>
                {props.countries.map(country => 
                <li key={country.alpha3Code}>
                    {country.name}  
                    <button value={country.name} onClick={props.handleFiltering}>
                        show
                    </button>
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