import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "contact",
          element: <Contact/>
        },
        {
          path: "user/:userid",
          element: <User/>
        },
        {
         
          path: "/Github",
          element: <Github/>,
          loader: githubInfoLoader
        },
      
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
=======
>>>>>>> 20bca3c3037090cbf4f26462422c76dbbc58a1e3

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
<<<<<<< HEAD
=======
>>>>>>> df5dac2 (my 8th project)
>>>>>>> 20bca3c3037090cbf4f26462422c76dbbc58a1e3
  </StrictMode>,
)
