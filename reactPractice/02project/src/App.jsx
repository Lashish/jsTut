
import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter === 20) {
      return counter;
    }
    return setCounter(counter + 1);
  }
  const removeValue = () => {
    if (counter === 0) {
      return counter;
    }
    return setCounter(counter - 1);
  }

  return (
    <>
      <button onClick={addValue} style={{ fontSize: '24px' }}>&uarr;</button>
      <h1>{counter}</h1>
      <button onClick={removeValue} style={{ fontSize: '24px' }} >&darr;</button >

    </>
  )
}

export default App
