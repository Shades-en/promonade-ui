import { useState } from 'react'
import './App.css'
import React from 'react'
import {UserProvider} from './contexts/UserProvider'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import User from './pages/User'
import Promotion from './pages/Promotion'
import Analytics from './pages/Analytics'
import { RequireAuth } from './requireAuth'

function App() {

  return (
    
    <UserProvider>

        <Navbar />
        <Routes>
          <Route path='/' element={<RequireAuth><Promotion/></RequireAuth>}/> 
          <Route path='/analytics' element={<RequireAuth><Analytics/></RequireAuth>}/> 
          <Route path='/me' element={<RequireAuth><User/></RequireAuth>}/>
          
          
          <Route path='/login' element={<Login />}/>
        </Routes> 
      
    </UserProvider>
  )
}

export default App
