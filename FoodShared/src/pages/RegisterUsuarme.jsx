import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Box from '../components/Box'
import Image from '../components/ImageComponent'
import Paragraph from '../components/Paragraph'
import Heading from '../components/Heading'
import Form from '../components/Form'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import Links from '../components/Link'
import Footer from '../components/Footer'

import usePasswordToggle from '../hooks/usePasswordToggle'

import ver from 'public/ver.png'
import noVer from 'public/noVer.png'

const RegisterUsuarme = () => {
  const [showPassword, togglePasswordVisibility] = usePasswordToggle()

  const RegisterUser = [
    {
      nameLabel: 'Nombre Completo',
      htmlFor: 'username',
      type: 'text',
      placeholder: 'Ingrese el nombre completo',
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
      nameLabel: 'Contraseña',
      htmlFor: 'password',
      type: showPassword ? 'text' : 'password',
      placeholder: 'Contraseña',
      src: showPassword ? ver : noVer,
      onClick: togglePasswordVisibility,
    },
    {
      nameLabel: 'Confirmar Contraseña',
      htmlFor: 'passwordConfirm',
      type: showPassword ? 'text' : 'password',
      placeholder: 'Confirmar Contraseña',
      src: showPassword ? ver : noVer,
      alt: showPassword ? 'ver' : 'noVer',
      onClick: togglePasswordVisibility,
    },
  ]
  const navigate = useNavigate()

  const handleRedirect = () => {
    alert('Registrado Correctamente')
    navigate('/')
  }
  const renderRegisterUser = (
    <Form>
      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap="40px">
        {RegisterUser.map((dates, index) => (
          <Box key={index} display="grid">
            <Label
              htmlFor={dates.htmlFor}
              fontSize="18px"
              fontWeight="bold"
              color="#000000"
            >
              {dates.nameLabel}
            </Label>
            <Box
              display="grid"
              gridTemplateColumns="1fr auto"
              padding="1px 10px"
              borderRadius="40px"
              border="1px solid #000f00"
              backgroundColor="#ffffff"
              position="relative"
            >
              <Input
                type={dates.type}
                id="password"
                placeholder={dates.placeholder}
                padding="10px 10px"
                width="85%"
                outline="none"
                border="none"
              />
              {dates.htmlFor === 'password' ||
              dates.htmlFor === 'passwordConfirm' ? (
                <Image
                  width="30px"
                  height="30px"
                  position="absolute"
                  right="10px"
                  top="50%"
                  transform="translateY(-50%)"
                  cursor="pointer"
                  src={dates.src}
                  alt={dates.alt}
                  onClick={dates.onClick}
                />
              ) : null}
            </Box>
          </Box>
        ))}
      </Box>
      <Box margin="25px 0" display="flex" justifyContent="center">
        <Button
          backgroundColor="#4B8B00"
          color="#ffffff"
          borderRadius="10px"
          padding="10px 50px"
          margin="20px 0"
          type="submit"
          name="Registrarse"
          onClick={handleRedirect}
        >
          Registrarse
        </Button>
      </Box>
    </Form>
  )
  return (
    <>
      <Helmet>
        <title>Registro de Usuario</title>
      </Helmet>
      <Box backgroundColor="#d6d2be">
        <Box
          margin=" 0 auto"
          width="800px"
          display="grid"
          gap=" 30px"
          padding=" 20px 10px"
        >
          <Box
            margin=" 0 auto"
            padding="50px"
            border="1px solid #4B8B00"
            borderRadius="50%"
          >
            <Links to="/">
              <Image
                src="public/logo-removebg-preview.png"
                alt="logo FoodShared"
                width="150px"
                height="150px"
              />
            </Links>
          </Box>
          <Box display="grid" gap="15px">
            <Heading level={1} color="#4B8B00" textAlign="center">
              Crea tu cuenta
            </Heading>
            <Paragraph fontSize="18px" color="#213c00" textAlign="center">
              Como usuario
            </Paragraph>
          </Box>
          <Box>{renderRegisterUser}</Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default RegisterUsuarme
