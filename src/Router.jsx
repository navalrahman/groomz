import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import Home from './components/home/Home.jsx'
import Header from './components/home/header/Header.jsx'
import Contact from './components/home/contact/Contact.jsx'
import About from './components/home/about/About.jsx'
import Termsandconditins from './components/home/terms&conditions/Termsandconditins.jsx'

const Router = () => {

    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // can also be 'smooth'
      });
    }, [pathname]);
  

  return (
    <div>

      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/terms&conditions' element={<Termsandconditins />}></Route>
      </Routes>
      <Contact />
    </div>
  )
}

export default Router
