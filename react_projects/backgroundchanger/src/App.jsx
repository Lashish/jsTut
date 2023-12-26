import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (

    <div className='w-screen h-screen duration-200' style={{ backgroundColor: color }}>
      <button className='bg-red-700' onClick={() => setColor('red')}>red</button>
      <button className='bg-green-700' onClick={() => setColor('green')}>green</button>
      <button className='bg-gray-700' onClick={() => setColor('gray')}>gray</button>
      <button className='bg-white text-black' onClick={() => setColor('white')}>white</button>
      <button className='bg-black' onClick={() => setColor('black')}>black</button>
      <button className='bg-purple-700' onClick={() => setColor('purple')}>purple</button>
      <button className='bg-olive-700' onClick={() => setColor('olive')}>olive</button>
    </div>

  )
}

export default App
