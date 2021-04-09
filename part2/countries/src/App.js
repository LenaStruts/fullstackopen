import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filteredResults, setFilteredResults ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFiltering = (event) => {
    setFilteredResults(event.target.value)
  }

  const countriesToShow = filteredResults
  ? countries.filter(country => country.name.toLowerCase().includes(filteredResults.toLowerCase()) === true) 
  : countries

  return (
    <div>
      find countries <input value={filteredResults} onChange={handleFiltering} />
      <Countries countries={countriesToShow} />
    </div>
  )
}

export default App