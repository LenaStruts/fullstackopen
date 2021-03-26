import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Anecdote = ({ header, anecdote }) => (
  <>
    <h1>{header}</h1>
    <p>{anecdote}</p>
  </>
)
  
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const i = votes.findIndex(vote => vote === Math.max.apply(null, votes))

  const vote = () => {
    const newVotes = [ ...votes ]
    newVotes[selected] += 1
    console.log(newVotes)
    setVotes(newVotes)
  }
  
  const getRandomAnecdote = () => {
    let randomN = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomN)
  }

  return (
    <div>
      <Anecdote header='Anecdote of the day' anecdote={anecdotes[selected]} />
      <Button handleClick={getRandomAnecdote} text='next anecdote' />
      <Button handleClick={vote} text='vote' />
      <Anecdote header='Anecdotes with most votes' anecdote={anecdotes[i]} />
    </div>
  )
}

export default App