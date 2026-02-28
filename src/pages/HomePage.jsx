import React, { useEffect } from 'react'
import Hero from './Home/Hero'
import MobileApp from './Home/MobileApp'
import PortfolioPage from './Home/PortfolioPage'
import About from './Home/About'

function HomePage() {
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // remove if you want instant
      });
    }, []);
  return (
    <div>
        <Hero/>
<section id="projects"><PortfolioPage /></section>
<MobileApp />
<section id="about"><About /></section>
    </div>
  )
}

export default HomePage