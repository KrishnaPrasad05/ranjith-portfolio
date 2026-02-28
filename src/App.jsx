import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layout/Footer'
import Header from './layout/Header'

import ProjectDetails from './pages/ProjectDetails'
import Projects from './pages/Projects'
import HomePage from './pages/HomePage'
import ScrollToSection from './pages/ScrollToSection'

function App() {
  return (
    <>
      <Header />
      <ScrollToSection/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-details" element={<ProjectDetails />} />
      </Routes>

      <section id="contact"><Footer /></section>
    </>
  )
}

export default App