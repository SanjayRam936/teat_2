
import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Form from './components/Form'
import EmploeeList from './components/EmployeeList'
import Home from './components/Home'
import EmployeeDetail from './components/EmployeeDetail'

function App() {
  const router=createBrowserRouter([
    {
      path:'/employee_list',
      element:<EmploeeList/>
    },
    {
      path:'/form',
      element:<Form/>
    },
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/employee_detail/:id',
      element:<EmployeeDetail/>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App