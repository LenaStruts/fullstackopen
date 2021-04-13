import React from 'react'

const Person = (props) => {
    return (
      <p>{props.name} {props.number} <button onClick={props.removePerson}>delete</button></p>
    )
  }

const Persons = (props) => {
    return (
        <>
            {props.persons.map(person => 
                <Person 
                    key={person.id} 
                    name={person.name}
                    number={person.number} 
                    removePerson={() => props.removePerson(person.id)} />
            )}
        </>
    )
}

export default Persons