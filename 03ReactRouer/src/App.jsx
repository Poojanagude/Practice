import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/Aboutus/About'
import Contact from './components/Contact/Contact'

function App() {
 

  return (
   <Routes>
     <Route path='/' element={<Header/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
   
    <Route path='/contact' element={<Contact/>}></Route>
   
    <Route path='/' element={<Footer/>}></Route>
   </Routes>
  )
}

export default App
