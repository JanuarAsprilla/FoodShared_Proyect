import { Helmet } from 'react-helmet'

import Box from '../components/Box'
import Image from '../components/ImageComponent'
import Heading from '../components/Heading'
import Links from '../components/Link'

const TypeRegister = () => {
  const typeRegister = [
    {
      src: 'public/edificio.png',
      alt: 'Logo de edifio',
      to: '/Registro_Empresa',
      label: 'Empresa',
    },
    {
      src: 'public/usuario.png',
      alt: 'Logo de usuario',
      to: '/Registro_Persona',
      label: 'Persona',
    },
  ]

  const typeRegisterRender = typeRegister.map((dates, index) => (
    <Box key={index} display="grid" gap="30px">
      <Box
        key={`${index}-inner`}
        boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
        borderRadius="50%"
        padding="10px"
      >
        <Image src={dates.src} alt={dates.alt} width="150px" height="150px" />
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
          to={dates.to}
          fontSize="20px"
          color="#ffffff"
          hoverColor="#fffaf2"
          fontWeight="bold"
          textDecoration="none"
          padding=" 10px"
        >
          {dates.label}
        </Links>
      </Box>
    </Box>
  ))
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
                src="public/logo-removebg-preview.png"
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
            {typeRegisterRender}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default TypeRegister
