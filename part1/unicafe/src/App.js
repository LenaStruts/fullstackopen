import React, { useState } from 'react';

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ text, value }) => {
  if (value[3] === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <Statistic text={text[0]} value={value[0]} />
        <Statistic text={text[1]} value={value[1]} />
        <Statistic text={text[2]} value={value[2]} />
        <Statistic text={text[3]} value={value[3]} />
        <Statistic text={text[4]} value={value[4]} />
        <Statistic text={text[5]} value={`${value[5]} %`} />
      </tbody>
    </table>
  )
}

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

  const average = arr => arr.length ? arr.reduce((acc, CV) => (acc + CV)) / arr.length : 0;

  const percentage = (positive, all) => all.length ? (positive * 100) / all.length : 0;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Statistics text={['good', 'neutral', 'bad', 'all', 'average', 'positive']} value={[good, neutral, bad, allClicks.length, average(allClicks), percentage(good, allClicks)]} />
    </div>
  )
}

export default App;
