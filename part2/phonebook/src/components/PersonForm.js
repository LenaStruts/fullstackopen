import React from 'react'

const PersonForm = (props) => {
  return (
    <form onSubmit={props.add}>
    <div>
      name: <input value={props.inputName} onChange={props.nameUpdate} />
    </div>
    <div>
      number: <input value={props.inputNum} onChange={props.numUpdate} />
      </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

export default PersonForm