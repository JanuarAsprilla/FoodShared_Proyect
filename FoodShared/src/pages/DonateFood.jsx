import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import Box from '../components/Box'
import Navbar from '../components/NavBar'
import Image from '../components/ImageComponent'
import Paragraph from '../components/Paragraph'
import Heading from '../components/Heading'
import Form from '../components/Form'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import Links from '../components/Link'
import Textarea from '../components/Textarea'
import Footer from '../components/Footer'
import Select from '../components/Select'

const DonateFood = () => {
  const [formData, setFormData] = useState({
    username: '',
    mail: '',
    number: '',
    address: '',
    foodType: '',
    date: '',
    foodAmount: '',
    method: '',
    details: '',
  })
  const DonateForm = [
    {
      nameLabel: 'Nombre del Donante',
      htmlFor: 'username',
      type: 'text',
      placeholder: 'Nombre del Donante',
    },
    {
      nameLabel: 'Correo Electrónico',
      htmlFor: 'mail',
      type: 'text',
      placeholder: 'Ingresar Correo Electrónico',
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
      nameLabel: 'Tipo de alimento',
      htmlFor: 'foodType',
      type: 'select',
      options: ['Alimentos Perecederos', 'Alimentos no Perecederos'],
    },
    {
      nameLabel: 'Fecha de donacion',
      htmlFor: 'date',
      type: 'date',
      placeholder: 'dd/mm/aaaa',
    },
    {
      nameLabel: 'Cantidad de alimento',
      htmlFor: 'foodAmount',
      type: 'number',
      placeholder: 'Ingrese la cantidad de alimento',
    },
    {
      nameLabel: 'Metodo de entrega',
      htmlFor: 'method',
      type: 'select',
      options: ['Puntos de recolección de FoodShared', 'Domicilio'],
    },
    {
      nameLabel: 'Fecha de Vencimiento',
      htmlFor: 'date',
      type: 'date',
      placeholder: 'dd/mm/aaaa',
    },
    {
      nameLabel: 'Detalles Adicionales',
      htmlFor: 'details',
      type: 'textarea',
      placeholder: 'Comentarios',
    },
  ]

  const navigate = useNavigate()

  const handleRedirect = () => {
    alert('Donacion Registrada Correctamente')
    navigate('/')
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const donateOptions = DonateForm.map((dates) => {
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

  const renderDonateForm = (
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

      {donateOptions.map((dates, index) => (
        <Box key={index} margin="40px 0">
          {dates.type === 'textarea' ? (
            <Box width="98%">
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
              <Box>
                <Textarea
                  type={dates.type}
                  id={dates.htmlFor}
                  placeholder={dates.placeholder}
                  outline="none"
                  padding="10px 10px"
                  border="1px solid black"
                  height="150px"
                  fontSize="16px"
                />
              </Box>
            </Box>
          ) : null}
        </Box>
      ))}

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
        <title>Donar Alimento</title>
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
              src="public/logo-removebg-preview.png"
              alt="logo FoodShared"
              width="450px"
              height="450px"
            />
          </Links>
        </Box>
        <Box margin=" 25px 0 10px 0">
          <Heading level={1} color="#4B8B00" textAlign="center">
            Donar Alimento
          </Heading>
        </Box>
        <Box width="85%" margin="0 auto">
          {renderDonateForm}
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default DonateFood
