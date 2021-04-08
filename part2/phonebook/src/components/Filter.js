import React from 'react'

const Filter = (props) => {
  return (
    <>
    filter shown with <input value={props.inputText} onChange={props.filterUpdate} />
    </>
  )
}

export default Filter