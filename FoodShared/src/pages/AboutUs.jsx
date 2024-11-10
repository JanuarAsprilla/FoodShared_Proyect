import { Helmet } from 'react-helmet'

import Navbar from '../components/NavBar'
import Box from '../components/Box'
import Image from '../components/ImageComponent'
import Heading from '../components/Heading'
import Paragraphs from '../components/Paragraph'
import Footer from '../components/Footer'
import Links from '../components/Link'

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nosotros</title>
      </Helmet>
      <Navbar />
      <Box
        backgroundColor="#d6d2be"
        display="grid"
        justifyContent="center"
        gap=" 60px"
        padding=" 20px 10px"
      >
        <Box margin=" 0 auto">
          <Image
            src="src/assets/img/logo-removebg-preview.png"
            alt="logo FoodShared"
            width="450px"
            height="400px"
          />
        </Box>
        <Box margin=" 0 0 50px 0">
          <Heading level={1} color="#4B8B00" textAlign="center">
            Sobre Nosotros
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
            width="345px"
            padding=" 15px"
            display="grid"
            gridTemplateRows="auto  auto"
            alignItems="center"
          >
            <Box margin>
              <Heading level={2} color="#4B8B00" textAlign="center">
                Mision
              </Heading>
            </Box>
            <Box>
              <Paragraphs fontSize="17px" padding="10px">
                Foodshare es un sitio web que reduce el desperdicio de alimentos
                al conectar donantes con organizaciones y familias necesitadas,
                garantizando que los alimentos frescos lleguen a quienes más los
                requieren. Trabajamos para construir una comunidad solidaria que
                comparta recursos de manera sostenible y equitativa.
              </Paragraphs>
            </Box>
          </Box>
          <Box
            boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
            backgroundColor="#ffffff"
            borderRadius="30px"
            width="345px"
            padding=" 15px"
            display="grid"
            gridTemplateRows="auto  auto"
            alignItems="center"
          >
            <Box>
              <Heading level={2} color="#4B8B00" textAlign="center">
                Visión
              </Heading>
            </Box>
            <Box>
              <Paragraphs fontSize="17px" padding="10px">
                Ser la plataforma líder en la lucha contra el hambre y el
                desperdicio de alimentos, promoviendo una cultura de generosidad
                y responsabilidad social. Aspiramos a que en el futuro, ningún
                alimento apto para el consumo se desperdicie, y todas las
                personas tengan acceso a las comidas. nutritivas.
              </Paragraphs>
            </Box>
          </Box>
        </Box>
        <Box
          margin="5px auto"
          width="105px"
          backgroundColor="#4b8b00"
          hoverBackgroundColor="#2e5500"
          borderRadius="30px"
          padding=" 10px 25px"
          transition="all 0.5s ease"
        >
          <Links
            to="/Mas_Sobre_Nosotros"
            fontSize="17px"
            fontWeight="bold"
            padding="10px 1px"
            color="#ffffff"
            textDecoration="none"
          >
            Saber Mas...
          </Links>
        </Box>
        <Box>
          <Heading level={2} color="#4B8B00" textAlign="center">
            Beneficiaros de Foodshare
          </Heading>
          <Box
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gap="50px"
            margin=" 20px 0"
          >
            <Box display="grid" gridTemplateRows="repeat(3, auto)" gap="10px">
              <Box>
                <Heading level={2} color="#4B8B00" textAlign="center">
                  Niños
                </Heading>
              </Box>
              <Box>
                <Image
                  src="src/assets/img/niños.jpg"
                  alt="logo FoodShared"
                  width="400px"
                  height="300px"
                />
              </Box>
              <Box margin="1px auto">
                <Image
                  src="src/assets/img/LogoBemeficiariosNiños.png"
                  alt="logo FoodShared"
                  width="125px"
                  height="125px"
                  borderRadius="50%"
                />
              </Box>
            </Box>
            <Box display="grid" gridTemplateRows="repeat(3, auto)" gap="10px">
              <Box>
                <Heading level={2} color="#4B8B00" textAlign="center">
                  Familias
                </Heading>
              </Box>
              <Box>
                <Image
                  src="src/assets/img/familia.jpg"
                  alt="logo FoodShared"
                  width="400px"
                  height="300px"
                />
              </Box>
              <Box margin="1px auto">
                <Image
                  src="src/assets/img/LogoBeneficiarioFamilia.png"
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

export default AboutUs
