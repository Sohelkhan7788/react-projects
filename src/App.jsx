import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15
  let [counter, setcounter] = useState(15)

  const addvalue = () => {
   
    counter = counter + 1
    setcounter(counter)
  }
  const removevalue = () => {
    setcounter(counter - 1)
  }
  return (
    <>
      <h1>My name is sohel khan</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addvalue}>Add Value {counter}</button>
      <br />
      <button onClick={removevalue} >Remove Value {counter}</button>
      <p>footer: {counter}</p>

    </>
  )
}

export default App
