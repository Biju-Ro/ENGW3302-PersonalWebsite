import React, { useEffect } from 'react'
import AOS from 'aos'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App