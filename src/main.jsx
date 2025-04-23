import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router"
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Process from './components/Process.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
const router=createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { index:true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'process', element: <Process /> },
        { path: 'project', element: <Project /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
