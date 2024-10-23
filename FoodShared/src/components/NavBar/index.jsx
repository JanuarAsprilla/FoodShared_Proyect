import React from 'react'
import Box from '../Box'
import Link from '../Link'
import LogoImage from '../ImageComponent'

const NavBar = () => {
  return (
    <Box
      backgroundColor="#F0F0E9"
      height="55px"
      padding="0 10px"
      gap="10px"
      alignItems="center"
      alignContent="center"
      display="grid"
      gridTemplateColumns="auto 1fr auto"
      position="sticky"
      top="0"
      zIndex="1"
      boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
    >
      <Box
        display="flex"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        height="50px"
        gap="5px"
      >
        <LogoImage
          src="src/assets/img/logo.jpeg"
          alt="logo FoodShared"
          href="/"
          width="50px"
          height="50px"
          borderRadius="50%"
        />
        <Link
          href="/"
          fontSize="15px"
          fontWeight="900"
          color="#002d07"
          textDecoration="none"
        >
          FoodShared
        </Link>
      </Box>
      <Box
        display="flex"
        gap="10px"
        alignItems="center"
        alignContent="center"
        padding="0 10px"
        justifyContent="center"
      >
        <Box
          padding=" 2px 25px"
          transition="all 0.3s ease"
          hoverBackgroundColor="#dcdcdc"
          borderRadius="5px"
        >
          <Link
            href="#"
            fontSize="14px"
            fontWeight="bold"
            color="#002d07"
            textDecoration="none"
            hoverColor="#006510"
          >
            Inicio
          </Link>
        </Box>
        <Box
          padding=" 2px 25px"
          transition="all 0.3s ease"
          hoverBackgroundColor="#dcdcdc"
          borderRadius="5px"
        >
          <Link
            href="#"
            fontSize="14px"
            fontWeight="bold"
            color="#002d07"
            textDecoration="none"
            hoverColor="#006510"
          >
            Donar Alimento
          </Link>
        </Box>
        <Box
          padding=" 2px 25px"
          transition="all 0.3s ease"
          hoverBackgroundColor="#dcdcdc"
          borderRadius="5px"
        >
          <Link
            href="#"
            fontSize="14px"
            fontWeight="bold"
            color="#002d07"
            textDecoration="none"
            hoverColor="#006510"
          >
            Solicitar Alimentos
          </Link>
        </Box>
        <Box
          padding=" 2px 25px"
          transition="all 0.3s ease"
          hoverBackgroundColor="#dcdcdc"
          borderRadius="5px"
        >
          <Link
            href="#"
            fontSize="14px"
            fontWeight="bold"
            color="#002d07"
            textDecoration="none"
            hoverColor="#006510"
          >
            Sobre Nosotros
          </Link>
        </Box>
        <Box
          padding=" 2px 25px"
          transition="all 0.3s ease"
          hoverBackgroundColor="#dcdcdc"
          borderRadius="5px"
        >
          <Link
            href="#"
            fontSize="14px"
            fontWeight="bold"
            color="#002d07"
            textDecoration="none"
            hoverColor="#006510"
          >
            Contactanos
          </Link>
        </Box>
      </Box>
      <Box display="flex" gap="5px" alignItems="center">
        <Box
          padding=" 10px "
          backgroundColor="#696558"
          borderRadius="15px"
          cursor="pointer"
          transition="all 0.3s ease"
          hoverBackgroundColor="#3a3830"
        >
          <Link
            href="#"
            fontSize="12px"
            fontWeight="bold"
            color="white"
            textDecoration="none"
            padding="2px 13px"
          >
            INICIAR SESIÓN
          </Link>
        </Box>
        <Box
          padding=" 10px "
          backgroundColor="#002d07"
          borderRadius="15px"
          cursor="pointer"
          transition="all 0.3s ease"
          hoverBackgroundColor=" #dcdcdc"
        >
          <Link
            href="#"
            fontSize="12px"
            fontWeight="bold"
            color="#ffffff"
            textDecoration="none"
            hoverColor=" #002d07"
            padding="2px 13px"
          >
            REGISTRARSE
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar
