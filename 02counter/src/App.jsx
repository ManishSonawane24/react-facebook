import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 5;

  const addValue = () => {
    if (counter >= 10) {
      <h2>Counter value is greater than 10"</h2>
      return;
    }
    console.log("Value added",Math.random(),counter);
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    if (counter <=  0) {
      <h2>Counter value is less than 0"</h2>
      return;
    }
    console.log("Value removed",Math.random(),counter);
    counter = counter - 1
    setCounter(counter)
  }
  return (
    <>

      <h1 className='Manish'>Hello Manish</h1>

      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      > Add value to : {counter}</button>
      <br />
      <br />
      <button
      onClick = {removeValue}
      > Remove value {counter}</button>
      <p> Footer : {counter}</p>

    </>
  )
}

export default App
