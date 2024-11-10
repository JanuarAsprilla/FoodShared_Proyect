import { Helmet } from 'react-helmet'

import NavBar from '../components/NavBar'
import Image from '../components/ImageComponent'
import Paragraphs from '../components/Paragraph'
import Heading from '../components/Heading'
import Box from '../components/Box'
import Link from '../components/Link'
import Footer from '../components/Footer'
import Links from '../components/Link'
function PageHome() {
  return (
    <>
      <Helmet>
        <title>FoodShared | Inicio</title>
      </Helmet>
      <NavBar />
      <Box>
        <Box
          backgroundColor="#d6d2be"
          display="grid"
          gridTemplateColumns="auto auto"
          justifyContent="center"
          gap=" 60px"
          padding=" 20px 10px"
        >
          <Image
            src="src/assets/img/logo-removebg-preview.png"
            alt="logo FoodShared"
            width="450px"
            height="400px"
          />

          <Box
            boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
            backgroundColor="#ffffff"
            borderRadius="30px"
            width="500px"
            padding=" 15px"
            display="grid"
            gridTemplateRows="auto auto auto"
          >
            <Box margin="10px 0">
              <Heading
                level={1}
                color="#4b8b00"
                fontWeight="bold"
                textAlign="left"
              >
                Comparte Alimentos
              </Heading>
              <Heading
                level={1}
                color="#ce8600"
                fontWeight="bold"
                textAlign="right"
              >
                Comparte Esperanza
              </Heading>
            </Box>
            <Box margin="5px 0">
              <Paragraphs
                fontSize="25px"
                color="#000000"
                fontWeight="bold"
                textAlign="center"
              >
                Ayuda a reducir el desperdicio de alimentos mientras apoyas a
                quienes más lo necesitan, contribuyendo a un futuro más
                sostenible y solidario. Cada acción cuenta.
              </Paragraphs>
            </Box>

            <Box
              margin="10px auto"
              borderRadius="30px"
              padding=" 14px"
              textAlign="center"
              backgroundColor="#4b8b00"
              hoverBackgroundColor="#355c0b"
              transition="all 0.3s ease"
            >
              <Links
                to="/donar"
                fontSize="20px"
                color="#ffffff"
                hoverColor="#fffaf2"
                fontWeight="bold"
                textDecoration="none"
                padding=" 10px"
              >
                Dona Ahora
              </Links>
            </Box>
          </Box>
        </Box>
        <Box
          padding="40px 15px "
          backgroundColor="#d6d2be"
          display="grid"
          gridTemplateColumns="1fr 1fr"
          justifyItems="center"
        >
          <Box
            boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
            backgroundColor="#ffffff"
            borderRadius="30px"
            width="500px"
            padding=" 15px"
            display="grid"
            gridTemplateRows="auto auto auto"
            alignItems="center"
          >
            <Box margin="10px 0">
              <Heading
                level={1}
                color="#4b8b00"
                fontWeight="bold"
                textAlign="center"
              >
                ¿Qué es FoodShare?
              </Heading>
            </Box>
            <Box margin="10px 0">
              <Paragraphs fontSize="20px" color="#000000">
                En FoodShare, conectamos donantes con organizaciones y familias
                que necesitan alimentos frescos. Nuestro objetivo es reducir el
                desperdicio de alimentos y garantizar que aquellos que lo
                necesiten puedan acceder a comidas nutritivas. Con tu ayuda,
                podemos hacer la diferencia y crear un impacto positivo en
                nuestras comunidades.
              </Paragraphs>
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
                Saber Mas...
              </Links>
            </Box>
          </Box>
          <Box
            display="grid"
            gridTemplateRows="auto auto auto"
            gap="20px"
            justifyContent="center"
            alignItems="center"
            justifyItems="center"
          >
            <Box
              boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
              backgroundColor="#ffffff"
              borderRadius="30px"
              width="400px"
              padding=" 10px 5px"
              display="grid"
              alignItems="center"
              gridTemplateRows="auto auto"
            >
              <Box margin="10px 0">
                <Heading
                  level={2}
                  color="#ce8600"
                  fontWeight="bold"
                  textAlign="center"
                >
                  BONOS DE CONDOLENCIAS Y GENEROSIDAD
                </Heading>
              </Box>

              <Box
                margin="5px auto"
                backgroundColor="#ce8600"
                borderRadius="30px"
                padding=" 8px 20px "
                textAlign="center"
                hoverBackgroundColor="#874a0c"
                transition="all 0.3s ease"
              >
                <Links
                  to="#"
                  fontSize="18px"
                  fontWeight="bold"
                  color="#ffffff"
                  padding=" 10px"
                  hoverColor="#fffaf2"
                  textDecoration="none"
                >
                  Saber Más
                </Links>
              </Box>
            </Box>
            <Box
              boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
              backgroundColor="#ffffff"
              borderRadius="30px"
              width="400px"
              padding=" 10px 5px"
              display="grid"
              alignItems="center"
              gridTemplateRows="auto auto"
            >
              <Box margin="10px 0">
                <Heading
                  level={2}
                  color="#ce8600"
                  fontWeight="bold"
                  textAlign="center"
                >
                  QUIERO SER BENEFICIARIO
                </Heading>
              </Box>

              <Box
                margin="5px auto"
                backgroundColor="#ce8600"
                borderRadius="30px"
                padding=" 8px 20px "
                textAlign="center"
                hoverBackgroundColor="#874a0c"
                transition="all 0.3s ease"
              >
                <Links
                  to="#"
                  fontSize="18px"
                  fontWeight="bold"
                  color="#ffffff"
                  padding=" 10px"
                  hoverColor="#fffaf2"
                  textDecoration="none"
                >
                  Saber Más
                </Links>
              </Box>
            </Box>
            <Box
              boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
              backgroundColor="#ffffff"
              borderRadius="30px"
              width="400px"
              padding=" 10px 5px"
              display="grid"
              alignItems="center"
              gridTemplateRows="auto auto"
            >
              <Box margin="10px 0">
                <Heading
                  level={2}
                  color="#ce8600"
                  fontWeight="bold"
                  textAlign="center"
                >
                  QUIERO SER VOLUNTARIO
                </Heading>
              </Box>

              <Box
                margin="5px auto"
                backgroundColor="#ce8600"
                borderRadius="30px"
                padding=" 8px 20px "
                textAlign="center"
                hoverBackgroundColor="#874a0c"
                transition="all 0.3s ease"
              >
                <Links
                  to="#"
                  fontSize="18px"
                  padding=" 10px"
                  fontWeight="bold"
                  color="#ffffff"
                  hoverColor="#fffaf2"
                  textDecoration="none"
                >
                  Saber Más
                </Links>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box backgroundColor="#ffffff" padding=" 20px 5px">
          <Box display="grid" gridTemplateRows="auto auto" margin="20px 0">
            <Heading
              level={2}
              color="#000000"
              fontWeight="bold"
              textAlign="center"
            >
              NUESTROS DONANTES
            </Heading>
            <Box
              width="240px"
              height="16px"
              margin="5px auto"
              backgroundColor="#ce8600"
              borderRadius="20px"
            ></Box>
          </Box>
          <Box
            display="grid"
            gridTemplateColumns="repeat(4, 1fr)"
            borderBottom="1px solid gray"
            padding="0 10px 40px 10px"
          >
            <Image
              src="src/assets/img/ShairaRestaurante.jpeg"
              width="200"
              height="200px"
              alt="2"
            ></Image>
            <Image
              src="src/assets/img/LaPailaAbuela.png"
              width="200"
              height="200px"
              alt="Restaurante Tipico La Paila de mi Abuela"
            ></Image>
            <Image
              src="src/assets/img/Frescura.png"
              width="200"
              height="200px"
              alt="Freskura"
            ></Image>
            <Image
              src="src/assets/img/ElTablazo.jpeg"
              width="200"
              height="200px"
              alt="Restaurante el Tablazo"
            ></Image>
          </Box>
          <Box margin="50px 5px">
            <Box display="grid" gridTemplateRows="auto auto">
              <Heading
                level={2}
                color="#000000"
                fontWeight="bold"
                textAlign="center"
              >
                NOTICIAS
              </Heading>
              <Box
                width="240px"
                height="16px"
                margin="5px auto"
                backgroundColor="#ce8600"
                borderRadius="20px"
              ></Box>
            </Box>
            <Box
              display="grid"
              gridTemplateColumns="1fr 1fr"
              alignItems="start"
              justifyItems="center"
            >
              <Box
                margin="50px 10px"
                display="grid"
                gridTemplateRows="repeat(4, auto)"
                gap="10px"
                width="510px"
              >
                <Box>
                  <Image
                    src="src/assets/img/KitsAlimentos.jpg"
                    width="490"
                    height="290px"
                    alt="Restaurante el Tablazo"
                  />
                </Box>
                <Box>
                  <Heading level={2}>
                    La desnutrición infantil: una crisis silenciosa
                  </Heading>
                </Box>
                <Box>
                  <Paragraphs
                    fontSize="15px"
                    fontWeight="light"
                    color="#393939"
                    opacity="0.7"
                  >
                    La desnutrición infantil es una crisis silenciosa que afecta
                    a miles de niños en Colombia. Cada semana, en promedio, 4
                    niños menores de 5 años mueren por desnutrición en Colombia,
                    392 mil niños menores de 5 años padecen desnutrición crónica
                    y un niño por causa del hambre y la baja educación, sólo
                    podrá alcanzar el 60% de su potencial.
                  </Paragraphs>
                </Box>
                <Box width="100px">
                  <Link
                    href="#"
                    fontSize="15px"
                    fontWeight="light"
                    color="#393939"
                    textDecoration="underline"
                    hoverColor="#ce8600"
                    hoverTextDecoration="none"
                    activeColor="red"
                  >
                    Leer mas...
                  </Link>
                </Box>
              </Box>
              <Box
                display="grid"
                gridTemplateRows="auto auto"
                gap="30px"
                margin="50px 10px"
              >
                <Box
                  display="grid"
                  gridTemplateRows="repeat(3, auto)"
                  width="510px"
                  alignContent="center"
                  gap="3px"
                >
                  <Box>
                    <Image
                      src="src/assets/img/Procuradora.jpg"
                      width="400"
                      height="190px"
                      alt="Restaurante el Tablazo"
                    />
                  </Box>
                  <Heading level={2}>
                    Procuraduría pide tomar las medidas necesarias ante
                    desnutrición infantil
                  </Heading>
                  <Box width="100px">
                    <Link
                      href="#"
                      fontSize="15px"
                      fontWeight="light"
                      color="#393939"
                      textDecoration="underline"
                      hoverColor="#ce8600"
                      hoverTextDecoration="none"
                      activeColor="red"
                    >
                      Leer mas...
                    </Link>
                  </Box>
                </Box>
                <Box
                  display="grid"
                  gridTemplateRows="repeat(3, auto)"
                  width="510px"
                  alignContent="center"
                  gap="3px"
                >
                  <Box>
                    <Image
                      src="src/assets/img/PAE.jpg"
                      width="400"
                      height="190px"
                      alt="Restaurante el Tablazo"
                    />
                  </Box>
                  <Heading level={2}>
                    Estudiantes sin recibir PAE: ¿Cuántos en Colombia?
                  </Heading>
                  <Box width="100px">
                    <Link
                      href="#"
                      fontSize="15px"
                      fontWeight="light"
                      color="#393939"
                      textDecoration="underline"
                      hoverColor="#ce8600"
                      hoverTextDecoration="none"
                      activeColor="red"
                    >
                      Leer mas...
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default PageHome
