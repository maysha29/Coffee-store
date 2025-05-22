import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './Components/Home.jsx'
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import CoffeeDetails from './Components/CoffeeDetails.jsx'
import SignIn from './Components/SignIn.jsx'
import SignUp from './Components/SignUp.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'



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
        path:"updateCoffee/:id",
        loader: ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`),
        Component:UpdateCoffee,
      },
       {
        path:"Coffee/:id",
        Component:CoffeeDetails,
      },
      {
        path:"signin",
        Component:SignIn,
      },
      {
        path:"signup",
        Component:SignUp,
      }
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
