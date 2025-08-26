import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // hooks 
let [counter, setCounter] = useState(15)
//let counter=15;
const addValue=()=>{
  // if(counter> 20)
  // {
  //   console.log("counter not exceed 20");
  //   return;
    
  // }
  console.log("clicked", counter);
  setCounter( prevCounter =>prevCounter+1)
  setCounter( prevCounter =>prevCounter+1)
  setCounter( prevCounter =>prevCounter+1)
  setCounter( prevCounter =>prevCounter+1)
  setCounter( prevCounter =>prevCounter+1)
}
const removeValue = () => {
  if (counter <= 0) {
    console.log("Counter cannot go below 0");
    return; 
  }
  
  console.log("unclicked", counter);
  setCounter(counter - 1);
};

  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter vale: {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
