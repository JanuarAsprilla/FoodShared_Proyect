import { Helmet } from 'react-helmet'

import Navbar from '../components/NavBar'
import Box from '../components/Box'
import Image from '../components/ImageComponent'
import Heading from '../components/Heading'
import Paragraphs from '../components/Paragraph'
import Footer from '../components/Footer'

const MoreAboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros</title>
      </Helmet>
      <Navbar />
      <Box
        backgroundColor="#d6d2be"
        display="grid"
        gap=" 60px"
        padding=" 20px 10px"
      >
        <Box margin=" 0 auto">
          <Image
            src="/logo-removebg-preview.png"
            alt="logo FoodShared"
            width="450px"
            height="400px"
            objectFit="contain"
          />
        </Box>
        <Box margin=" 0 0 50px 0">
          <Heading level={1} color="#4B8B00" textAlign="center">
            El 37% de los alimentos que se producen, se desperdician
          </Heading>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gap="100px"
          margin=" 0 auto"
        >
          <Box
            boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
            backgroundColor="#ffffff"
            borderRadius="30px"
            width="290px"
            height="230px"
            padding=" 15px"
            display="grid"
            gridTemplateRows="auto  auto"
            alignItems="center"
          >
            <Box margin="1px auto">
              <Heading level={2} color="#4B8B00">
                Nuestra motivacion
              </Heading>
            </Box>
            <Box>
              <Paragraphs fontSize="17px" padding="10px">
                El desperdicio de alimentos contribuye significativamente a las
                emisiones de gases de efecto invernadero y a la sobreexplotación
                de recursos naturales (agua, suelo, energía).
              </Paragraphs>
            </Box>
          </Box>
          <Box
            boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
            backgroundColor="#ffffff"
            borderRadius="30px"
            width="290px"
            height="230px"
            padding=" 15px"
            display="grid"
            gridTemplateRows="auto  auto"
            alignItems="center"
          >
            <Box margin="1px auto">
              <Heading level={2} color="#4B8B00">
                Nuestro proposito
              </Heading>
            </Box>
            <Box>
              <Paragraphs fontSize="17px" padding="10px">
                Reducir la cantidad de alimentos que se desechan mediante la
                implementación de prácticas de monitoreo, reutilización,
                donación y optimización de recursos.
              </Paragraphs>
            </Box>
          </Box>
        </Box>
        <Box>
          <Heading level={2} color="#4B8B00" textAlign="center">
            Grupo Poblacional
          </Heading>
          <Box
            display="grid"
            gridTemplateColumns="repeat(3, 1fr)"
            gap="50px"
            margin=" 50px 0"
          >
            <Box display="grid" gridTemplateRows="repeat(3, auto)" gap="10px">
              <Box margin=" 0 0 15px 0">
                <Heading level={2} color="#4B8B00" textAlign="center">
                  Comedor Escolar
                </Heading>
              </Box>
              <Box margin="1px auto">
                <Image
                  src="/comedorEscolar.jpg"
                  alt="logo FoodShared"
                  width="350px"
                  height="250px"
                />
              </Box>
              <Box margin="1px auto">
                <Image
                  src="/LogoBemeficiariosNiños.png"
                  alt="logo FoodShared"
                  width="125px"
                  height="125px"
                  borderRadius="50%"
                />
              </Box>
            </Box>
            <Box display="grid" gridTemplateRows="repeat(3, auto)" gap="10px">
              <Box margin=" 0 0 15px 0">
                <Heading level={2} color="#4B8B00" textAlign="center">
                  Adulto mayor
                </Heading>
              </Box>
              <Box margin="1px auto">
                <Image
                  src="/AdultoMayor.jpg"
                  alt="logo FoodShared"
                  width="350px"
                  height="250px"
                />
              </Box>
              <Box margin="1px auto">
                <Image
                  src="/LogoAdultoMayor.png"
                  alt="logo FoodShared"
                  width="125px"
                  height="125px"
                  borderRadius="50%"
                />
              </Box>
            </Box>
            <Box display="grid" gridTemplateRows="repeat(3, auto)" gap="10px">
              <Box margin=" 0 0 15px 0">
                <Heading level={2} color="#4B8B00" textAlign="center">
                  Ayuda Humanitaria
                </Heading>
              </Box>
              <Box margin="1px auto">
                <Image
                  src="/AyudaHumanitaria.png"
                  alt="logo FoodShared"
                  width="350px"
                  height="250px"
                />
              </Box>
              <Box margin="1px auto">
                <Image
                  src="/LogoBeneficiarioFamilia.png"
                  alt="logo FoodShared"
                  width="125px"
                  height="125px"
                  borderRadius="50%"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default MoreAboutUs
