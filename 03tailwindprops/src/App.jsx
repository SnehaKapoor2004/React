import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"hitesh",
    age:21
  }
  let newArr=[1,2,34]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
  Hello world!
</h1>
<Card channel="chai aur code" />
<Card/>
   
    </>
  )
}

export default App
