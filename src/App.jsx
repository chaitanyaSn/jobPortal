import React from 'react'
import { Button } from "@/components/ui/button"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Applayout from './layout/app-layout'
import Landing from './pages/landing'
import "./App.css";
import Onboarding from './pages/onboarding'
import MyJobs from './pages/MyJobs'
import Protected from './components/protected-route'
import ProtectedRoute from './components/protected-route'

const router=createBrowserRouter([
  {
    element:<Applayout/>,
    children:[
      {
        path:'/',
        element:<Landing/>
      },
      {
        path:'/onboarding',
        
        element:(
          <ProtectedRoute> <Onboarding/></ProtectedRoute>
       
        )
      },
      {
        path:'/my-jobs',
        element:(
          <ProtectedRoute> <MyJobs/></ProtectedRoute>
       
        )
      },
    ]
  }
])


const App = () => {
  return (
   <RouterProvider router={router}/>
  )
}

export default App
