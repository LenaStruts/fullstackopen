import React, { useState } from 'react';

const Statistics = ({ data, value }) => (
  <div>
    <p>{data} {value}</p>
  </div>
)

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([])
  
  const handleGoodClick = () => {
    setAll(allClicks.concat(1));
    setGood(good + 1);
  }
  const handleNeutralClick = () => {
    setAll(allClicks.concat(0));
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setAll(allClicks.concat(-1));
    setBad(bad + 1);
  }

  const average = arr => (arr.length === 0) ? 0 : arr.reduce((acc, CV) => (acc + CV)) / arr.length;

  const percentage = (positive, all) => (all.length === 0) ? 0 : (positive * 100) / all.length;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Statistics data='good' value={good} />
      <Statistics data='neutral' value={neutral} />
      <Statistics data='bad' value={bad} />
      <Statistics data='all' value={allClicks.length} />
      <Statistics data='average' value={average(allClicks)} />
      <Statistics data='positive' value={`${percentage(good, allClicks)} %`} />
    </div>
  )
}

export default App;
