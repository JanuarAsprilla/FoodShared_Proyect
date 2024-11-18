import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import Box from '../components/Box'
import Navbar from '../components/NavBar'
import Image from '../components/ImageComponent'
import Heading from '../components/Heading'
import Form from '../components/Form'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import Links from '../components/Link'
import Footer from '../components/Footer'
import Select from '../components/Select'

const RequestFood = () => {
  const [formData, setFormData] = useState({
    foodType: '',
    foodAmount: '',
    priority: '',
    date: '',
    username: '',
    applicantType: '',
    number: '',
    address: '',
    mail: '',
  })
  const RequestForm = [
    {
      nameLabel: 'Tipo de alimento',
      htmlFor: 'foodType',
      type: 'select',
      options: ['Alimentos Perecederos', 'Alimentos no Perecederos'],
    },
    {
      nameLabel: 'Cantidad de alimento',
      htmlFor: 'foodAmount',
      type: 'number',
      placeholder: 'Digite la cantidad',
    },
    {
      nameLabel: 'Prioridad',
      htmlFor: 'priority',
      type: 'select',
      options: ['leve', 'Urgente'],
    },
    {
      nameLabel: 'Fecha de vencimiento',
      htmlFor: 'date',
      type: 'date',
      placeholder: 'dd/mm/aaaa',
    },
    {
      nameLabel: 'Nombre del Solicitante',
      htmlFor: 'username',
      type: 'text',
      placeholder: 'Ingrese su nombre',
    },
    {
      nameLabel: 'Tipo de Solicitante',
      htmlFor: 'applicantType',
      type: 'select',
      options: [
        'Persona natural',
        'Persona juridica',
        'Banco de alimentos',
        'Comedor',
        'Otros',
      ],
    },
    {
      nameLabel: 'Número de Teléfono',
      htmlFor: 'number',
      type: 'number',
      placeholder: 'Ingrese Número telefónico',
    },
    {
      nameLabel: 'Direccion',
      htmlFor: 'address',
      type: 'text',
      placeholder: 'Ingresar Direccion',
    },
    {
      nameLabel: 'Correo Electrónico',
      htmlFor: 'mail',
      type: 'text',
      placeholder: 'Ingresar Correo Electrónico',
    },
  ]

  const navigate = useNavigate()

  const handleRedirect = () => {
    alert('Solicitud Registrada Correctamente')
    navigate('/')
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const donateOptions = RequestForm.map((dates) => {
    if (dates.options) {
      return {
        ...dates,
        options:
          dates.options.map((option) => ({
            label: option,
            value: option
              .toLowerCase()
              .replace(/ /g, '_')
              .replace(/[^a-z0-9_]/g, ''), // Formato amigable para el value
          })) || [],
      }
    }
    return dates
  })

  const renderRequestForm = (
    <Form>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridTemplateRows="repeat(3, 1fr)"
        gap="40px"
        width="85%"
        margin="0 auto"
      >
        {donateOptions.map((dates, index) => (
          <Box key={index} display="grid">
            {dates.type !== 'textarea' ? (
              <>
                <Box>
                  <Label
                    htmlFor={dates.htmlFor}
                    fontSize="18px"
                    fontWeight="bold"
                    color="#000000"
                  >
                    {dates.nameLabel}
                  </Label>
                </Box>
                <Box
                  display="grid"
                  gridTemplateColumns="1fr auto"
                  padding="1px 10px"
                  borderRadius="40px"
                  border="1px solid #000f00"
                  backgroundColor="#ffffff"
                  position="relative"
                >
                  {dates.type === 'select' ? (
                    <Select
                      id={dates.htmlFor}
                      options={dates.options}
                      placeholder={dates.placeholder}
                      padding="10px 10px"
                      outline="none"
                      border="none"
                      width="100%"
                    />
                  ) : (
                    <Input
                      type={dates.type}
                      id={dates.htmlFor}
                      placeholder={dates.placeholder}
                      padding="10px 10px"
                      width="85%"
                      outline="none"
                      border="none"
                    />
                  )}
                </Box>
              </>
            ) : null}
          </Box>
        ))}
      </Box>

      <Box margin="25px 0" display="flex" justifyContent="center" gap="20px">
        <Button
          backgroundColor="#4B8B00"
          color="#ffffff"
          borderRadius="10px"
          padding="10px 35px"
          margin="20px 0"
          type="submit"
          name="Registrarse"
          onClick={handleRedirect}
        >
          Donar
        </Button>
        <Button
          backgroundColor="#FF0000"
          color="#ffffff"
          borderRadius="10px"
          padding="10px 35px"
          margin="20px 0"
          onClick={handleChange}
        >
          Limpiar
        </Button>
      </Box>
    </Form>
  )

  return (
    <>
      <Helmet>
        <title>Solicitar Alimentos</title>
      </Helmet>
      <Navbar />
      <Box
        margin=" 0 auto"
        display="grid"
        gap=" 30px"
        padding=" 20px 10px"
        backgroundColor="#d6d2be"
      >
        <Box margin=" 0 auto">
          <Links to="/">
            <Image
              src="/logo-removebg-preview.png"
              alt="logo FoodShared"
              width="450px"
              height="450px"
            />
          </Links>
        </Box>
        <Box margin=" 25px 0 10px 0">
          <Heading level={1} color="#4B8B00" textAlign="center">
            Socilitar Alimentos
          </Heading>
        </Box>
        <Box width="85%" margin="0 auto">
          {renderRequestForm}
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default RequestFood
