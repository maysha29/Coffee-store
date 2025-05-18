import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './Components/Home.jsx'
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'



const router=createBrowserRouter([
  {
    path:'/',
    Component:MainLayout,
    children:[
      {
        index:true,
        loader: () => fetch("http://localhost:5000/coffees"),
        Component:Home,
        errorElement: <div>Failed to load coffee data.</div>
      },
      {
        path:"addCoffee",
        Component:AddCoffee,
      },
      {
        path:"updateCoffee",
        Component:UpdateCoffee,
      },
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
