import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Footer from './Footer'

const Home = () => {
  return (
    <div style={{overflow:"hidden"}}>
        <Header/>
        <Hero/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home