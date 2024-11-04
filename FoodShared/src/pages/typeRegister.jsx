import React from 'react'
import { Helmet } from 'react-helmet'

import Box from '../components/Box'
import Image from '../components/ImageComponent'
import Heading from '../components/Heading'
import Form from '../components/Form'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import Links from '../components/Link'

const TypeRegister = () => {
  return (
    <>
      <Helmet>
        <title>Tipo de Registro</title>
      </Helmet>
      <Box backgroundColor="#d6d2be">
        <Box margin=" 0 auto" display="grid" gap=" 30px" padding=" 20px 10px">
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
              Indique el tipo de registro
            </Heading>
          </Box>
          <Box
            margin="50px auto"
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gap="150px"
          >
            <Box gap="50px">
              <Box
                boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
                borderRadius="50%"
                padding="10px"
              >
                <Image
                  src="src/assets/img/edificio.png"
                  alt="Logo de edifio"
                  width="150px"
                  height="150px"
                />
              </Box>
              <Box
                width="150px"
                margin="10px 0"
                borderRadius="30px"
                padding=" 10px"
                textAlign="center"
                backgroundColor="#4b8b00"
                hoverBackgroundColor="#355c0b"
                transition="all 0.3s ease"
              >
                <Links
                  to="/Sobre_Nosotros"
                  fontSize="20px"
                  color="#ffffff"
                  hoverColor="#fffaf2"
                  fontWeight="bold"
                  textDecoration="none"
                  padding=" 10px"
                >
                  Empresa
                </Links>
              </Box>
            </Box>
            <Box gap="50px">
              <Box
                boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
                borderRadius="50%"
                padding="10px"
              >
                <Image
                  src="src/assets/img/usuario.png"
                  alt="Logo de edifio"
                  width="150px"
                  height="150px"
                />
              </Box>
              <Box
                width="150px"
                margin="10px 0"
                borderRadius="30px"
                padding=" 10px"
                textAlign="center"
                backgroundColor="#4b8b00"
                hoverBackgroundColor="#355c0b"
                transition="all 0.3s ease"
              >
                <Links
                  to="/Sobre_Nosotros"
                  fontSize="20px"
                  color="#ffffff"
                  hoverColor="#fffaf2"
                  fontWeight="bold"
                  textDecoration="none"
                  padding=" 10px"
                >
                  Persona
                </Links>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default TypeRegister
