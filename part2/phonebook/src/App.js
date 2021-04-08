import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filteredResults, setFilteredResults ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    let index = persons.findIndex(person => person.name === newName)
    if (index !== -1) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFiltering = (event) => {
    setFilteredResults(event.target.value)
  }

  const personsToShow = filteredResults
  ? persons.filter(person => person.name.toLowerCase().includes(filteredResults.toLowerCase()) === true) 
  : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter inputText={filteredResults} filterUpdate={handleFiltering} />
      <h3>add a new</h3>
      <PersonForm add={addPerson} 
      inputName={newName} nameUpdate={handleNameChange} 
      inputNum={newNumber} numUpdate={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App