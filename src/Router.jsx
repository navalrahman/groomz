import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Header from './components/home/header/Header.jsx'
import Contact from './components/home/contact/Contact.jsx'
import About from './components/home/about/About.jsx'
import Termsandconditins from './components/home/terms&conditions/Termsandconditins.jsx'

const Router = () => {
  return (
    <div>

      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/terms&conditions' element={<Termsandconditins/>}></Route>
      </Routes>
      <Contact />
    </div>
  )
}

export default Router
