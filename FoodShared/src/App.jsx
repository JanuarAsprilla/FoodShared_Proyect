import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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
        </Routes>
      </Router>
    </>
  )
}

export default App
