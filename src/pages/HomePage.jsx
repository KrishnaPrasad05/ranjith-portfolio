import React from 'react'
import Hero from './Home/Hero'
import MobileApp from './Home/MobileApp'
import PortfolioPage from './Home/PortfolioPage'
import About from './Home/About'

function HomePage() {
  return (
    <div>
        <Hero/>
        <PortfolioPage/>
        <MobileApp/>
        <About/>
    </div>
  )
}

export default HomePage