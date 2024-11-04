import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AboutUs from '../pages/AboutUs'
import PageHome from '../pages/Home'
import Contacts from '../pages/Contacts'
import MoreAboutUs from '../pages/MoreAboutUs'
import Login from '../pages/Login'
import TypeRegister from '../pages/typeRegister'

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/contactanos" element={<Contacts />} />
        <Route path="/Sobre_Nosotros" element={<AboutUs />} />
        <Route path="/Mas_Sobre_Nosotros" element={<MoreAboutUs />} />
        <Route path="/Iniciar_Sesion" element={<Login />} />
        <Route path="/Tipo_Registro" element={<TypeRegister />} />
      </Routes>
    </Router>
  )
}

export default RoutesApp
