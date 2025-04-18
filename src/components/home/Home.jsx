import React from 'react'
import Header from './header/Header'
import Contact from './contact/Contact'
import Mensapparels from './mensapparels/Mensapparels'

const Home = () => {
  return (
    <div>
      <Header/>

      <Mensapparels/>
      <Contact/>
    </div>
  )
}

export default Home