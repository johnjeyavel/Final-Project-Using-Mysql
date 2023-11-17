import React from 'react'
import Login from './Login'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './Register'
import Home from './Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
   
      </BrowserRouter>
  )
}

export default App

