
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    userName: 'ahsish@gamil.com',
    age: 45
  }
  let newArr = [1, 3, 5]
  return (
    <>
      <h1 className='bg-gray-500 rounded px-4 mb-4'>tailwind</h1>
      <Card username="ashishkumar" someObj={newArr} />
      <Card username={"example"} />
    </>
  )
}

export default App
