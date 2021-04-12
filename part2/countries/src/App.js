import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filteredResults, setFilteredResults ] = useState('')
  const [ loading, setLoading ] = useState(true)
  const [ error, setError ] = useState()

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleFiltering = (event) => {
    setFilteredResults(event.target.value)
  }

  const countriesToShow = filteredResults
  ? countries.filter(country => country.name.toLowerCase().includes(filteredResults.toLowerCase()) === true) 
  : countries

  if (!loading) {
    return !error ? (
      <div>
        find countries <input value={filteredResults} onChange={handleFiltering} />
        <Countries countries={countriesToShow} handleFiltering={handleFiltering} />
      </div>
    )
    : (
        <p>Some error occurred, while fetching api</p>
    )
  } 
  return (
      <p>Loading...</p>
  )
}

export default App