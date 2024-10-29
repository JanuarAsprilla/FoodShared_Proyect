import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AboutUs from './pages/AboutUs'
import PageHome from './pages/Home'
import Contacts from './pages/Contacts'
import './App.css'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/contactanos" element={<Contacts />} />
          <Route path="/Sobre_Nosotros" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
