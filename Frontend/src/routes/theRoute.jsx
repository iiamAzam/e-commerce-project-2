import React from 'react'
import App from '../App'
import {Route, Routes} from 'react-router-dom'
import Login from "../componenets/login"
import Register from '../componenets/register'

function TheRoute() {
  return (
   
        <Routes>
        <Route  path='/' element={<App/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Route>
        </Routes>
 
  )
}

export default TheRoute