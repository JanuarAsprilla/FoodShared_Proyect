import React from 'react'
import { Helmet } from 'react-helmet'

import usePasswordToggle from '../hooks/usePasswordToggle'

import Box from '../components/Box'
import Image from '../components/ImageComponent'
import Heading from '../components/Heading'
import Form from '../components/Form'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import Links from '../components/Link'

import ver from '../assets/img/ver.png'
import noVer from '../assets/img/noVer.png'

const Login = () => {
  const [showPassword, togglePasswordVisibility] = usePasswordToggle()

  return (
    <>
      <Helmet>
        <title>Iniciar Sesion</title>
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
                src="src/assets/img/logo-removebg-preview.png"
                alt="logo FoodShared"
                width="150px"
                height="150px"
              />
            </Links>
          </Box>
          <Box>
            <Heading level={1} color="#4B8B00" textAlign="center">
              Iniciar Sesion
            </Heading>
          </Box>
          <Box>
            <Form>
              <Box
                display="grid"
                gridTemplateColumns="repeat(2, 1fr)"
                gap="40px"
              >
                <Box display="grid" justifyItems="center">
                  <Label
                    htmlFor="username"
                    fontSize="18px"
                    fontWeight="bold"
                    color="#000000"
                  >
                    Correo y/o usuario
                  </Label>
                  <Box
                    padding="1px 10px"
                    borderRadius="40px"
                    border="1px solid #000f00"
                    backgroundColor="#ffffff"
                  >
                    <Input
                      type="text"
                      id="username"
                      placeholder="Ingresa tu usuario"
                      padding="10px 10px"
                      width="90%"
                      outline="none"
                      border="none"
                    />
                  </Box>
                </Box>
                <Box display="grid" justifyItems="center">
                  <Label
                    htmlFor="password"
                    fontSize="18px"
                    fontWeight="bold"
                    color="#000000"
                  >
                    Contraseña
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
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Ingresa tu contraseña"
                      padding="10px 10px"
                      width="75%"
                      outline="none"
                      border="none"
                    />
                    <Image
                      width="30px"
                      height="30px"
                      position="absolute"
                      right="10px"
                      top="50%"
                      transform="translateY(-50%)"
                      cursor="pointer"
                      src={showPassword ? ver : noVer}
                      alt="ver"
                      onClick={togglePasswordVisibility}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                display="grid"
                gap="30px"
                gridTemplateRows="repeat(2, 1fr)"
                justifyItems="center"
                margin="50px auto"
              >
                <Links to="/Sobre_Nosotros">
                  <Button
                    type="submit"
                    backgroundColor="#4B8B00"
                    color="white"
                    fontSize="18px"
                    padding="10px 30px"
                    borderRadius="20px"
                    textAlign="center"
                    hoverBackgroundColor="#355c0b"
                    transition="all 0.3s ease"
                  >
                    Iniciar Sesion
                  </Button>
                </Links>
                <Links to="/Tipo_Registro">
                  <Button
                    type="submit"
                    backgroundColor="#4B8B00"
                    color="white"
                    fontSize="18px"
                    padding="10px 30px"
                    borderRadius="20px"
                    textAlign="center"
                    hoverBackgroundColor="#355c0b"
                    transition="all 0.3s ease"
                  >
                    Registrarse
                  </Button>
                </Links>
              </Box>
            </Form>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Login
