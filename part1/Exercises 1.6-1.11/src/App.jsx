import { useState } from 'react'
import Stats from './components/stats'
import Butto from './components/button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const butGood = () => {
    const handlegood = good + 1
    setGood(handlegood)
  }

  const butNeutral = () => {
    const handleneutral = neutral + 1
    setNeutral(handleneutral)
  }

  const butBad = () => {
    const handlebad = bad + 1
    setBad(handlebad)
  }

  const total = good+bad+neutral
  const avg = total / 3
  const percen = total > 0 ? (good/ total)* 100 : 0
   const per = total > 0 ? (good/ total)* 100 : 0

  return (
    <div>
        <h2>give feedback</h2>
        <Butto onTick={butGood} buttext='good'/>
        <Butto onTick={butNeutral} buttext='neutral'/>
        <Butto onTick={butBad} buttext='bad'/>

        <h2>statistics</h2>
       
       
        {total > 0  ? <div><Stats text = 'good' feed = {good}/>
        <Stats text = 'neutral' feed = {neutral}/>
        <Stats text = 'bad' feed = {bad}/>
        <Stats text = 'total' feed = {total}/>
        <Stats text = 'avg' feed = {avg}/>
        <Stats text = 'percentage' feed = {percen} pext = '%'  /></div>:'No feedback given'}
        

        
        

 

        

    </div>
  )
}

export default App