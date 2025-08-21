<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    </>
=======
import './App.css'
import Login from './Components/Login'
import Profile from './Components/profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
>>>>>>> df5dac2 (my 8th project)
  )
}

export default App
