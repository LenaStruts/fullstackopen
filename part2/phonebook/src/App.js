import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filteredResults, setFilteredResults ] = useState('')
  const [ error, setError ] = useState()

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    let index = persons.findIndex(person => person.name === newName)
    if (index !== -1) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        changeNumber(persons[index].id)
      }
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      personService
      .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const removePerson = id => {
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(error => {
        setError(error)
      })
    }
  }

  const changeNumber = id => {
    const person = persons.find(person => person.id === id)
    const changedPerson = { ...person, number: newNumber }
    
    personService
    .update(id, changedPerson).then(returnedPerson => {
      setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
    })
    .catch(error => {
      setError(error)
    })
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
      <Persons persons={personsToShow} removePerson={removePerson} err={error} />
    </div>
  )
}

export default App