import Navbar from '../components/NavBar'
import Box from '../components/Box'
import Image from '../components/ImageComponent'
import Heading from '../components/Heading'
import Paragraphs from '../components/Paragraph'

import Footer from '../components/Footer'
import Links from '../components/Link'

const Contacts = () => {
  return (
    <>
      <Navbar />

      <Box
        backgroundColor="#d6d2be"
        display="grid"
        justifyContent="center"
        gap=" 60px"
        padding=" 20px 10px"
      >
        <Box display="flex" justifyContent="center">
          <Image
            src="src/assets/img/logo-removebg-preview.png"
            alt="logo FoodShared"
            width="450px"
            height="400px"
          />
        </Box>
        <Box>
          <Box margin=" 0 0 50px 0">
            <Heading level={1} color="#4B8B00" textAlign="center">
              Medios de Atencion
            </Heading>
          </Box>

          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="50px">
            <Box
              boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
              backgroundColor="#ffffff"
              borderRadius="30px"
              width="300px"
              padding=" 15px"
              display="grid"
              gridTemplateRows="auto auto auto"
              alignItems="center"
              gap="15px"
            >
              <Box
                display="grid"
                gridTemplateColumns="auto 1fr"
                alignItems="center"
                gap="20px"
              >
                <Box>
                  <Image
                    src="src/assets/img/whatsapp.png"
                    alt="logo Whatsapp"
                    width="90px"
                    height="90px"
                  />
                </Box>
                <Box
                  display="grid"
                  gridTemplateRows="repeat(2, 1fr)"
                  alignItems="center"
                  gap="10px"
                >
                  <Heading level={2}>WhatsApp</Heading>
                  <Paragraphs fontSize="18px">+57 313 456 7890</Paragraphs>
                </Box>
              </Box>
              <Box>
                <Paragraphs fontSize="18px">
                  Añade <strong>+57 3105017475</strong> a la lista de contactos
                  en tu smartphone y comuníquese con nosotros a traves de
                  WhatsApp
                </Paragraphs>
              </Box>
              <Box display="grid" justifyContent="center">
                <Links to="https://wa.me/573135567890" textDecoration="none">
                  <Box
                    width="155px"
                    display="flex"
                    alignItems="center"
                    border="1px solid black"
                    padding="5px 10px"
                    gap="10px"
                    justifyContent="center"
                    alignContent="center"
                    borderRadius="10px"
                    backgroundColor="#e2e2e2"
                    hoverBackgroundColor="#a1a8b4"
                    color="black"
                  >
                    <Paragraphs>Abre WhatsApp</Paragraphs>
                    <Image
                      src="src/assets/img/flecha-correcta.png"
                      alt="flecha"
                      width="20px"
                      height="20px"
                    />
                  </Box>
                </Links>
              </Box>
            </Box>
            <Box
              boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
              backgroundColor="#ffffff"
              borderRadius="30px"
              width="300px"
              padding=" 15px"
              display="grid"
              gridTemplateRows="auto auto auto"
              alignItems="center"
              gap="15px"
            >
              <Box
                display="grid"
                gridTemplateColumns="auto 1fr"
                alignItems="center"
                gap="20px"
              >
                <Box>
                  <Image
                    src="src/assets/img/correoElectronico.png"
                    alt="logo Whatsapp"
                    width="90px"
                    height="90px"
                  />
                </Box>
                <Box
                  display="grid"
                  gridTemplateRows="repeat(2, 1fr)"
                  alignItems="center"
                  gap="10px"
                >
                  <Heading level={2}>Gmail</Heading>
                  <Paragraphs fontSize="18px">FoodShare@gmail.com</Paragraphs>
                </Box>
              </Box>
              <Box>
                <Paragraphs fontSize="18px">
                  Comunícate con nosotros por el correo para mas información y
                  poder contactarnos
                </Paragraphs>
              </Box>
              <Box display="grid" justifyContent="center">
                <Links to="https://wa.me/573135567890" textDecoration="none">
                  <Box
                    width="155px"
                    display="flex"
                    alignItems="center"
                    border="1px solid black"
                    padding="5px 10px"
                    gap="10px"
                    justifyContent="center"
                    alignContent="center"
                    borderRadius="10px"
                    backgroundColor="#e2e2e2"
                    hoverBackgroundColor="#a1a8b4"
                    color="black"
                  >
                    <Paragraphs>Enviar Correo</Paragraphs>
                    <Image
                      src="src/assets/img/flecha-correcta.png"
                      alt="flecha"
                      width="20px"
                      height="20px"
                    />
                  </Box>
                </Links>
              </Box>
            </Box>
            <Box
              boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
              backgroundColor="#ffffff"
              borderRadius="30px"
              width="300px"
              padding=" 15px"
              display="grid"
              gridTemplateRows="auto auto auto"
              alignItems="center"
              gap="15px"
            >
              <Box
                display="grid"
                gridTemplateColumns="auto 1fr"
                alignItems="center"
                gap="20px"
              >
                <Box>
                  <Image
                    src="src/assets/img/social.png"
                    alt="logo Whatsapp"
                    width="90px"
                    height="90px"
                  />
                </Box>
                <Box
                  display="grid"
                  gridTemplateRows="repeat(2, 1fr)"
                  alignItems="center"
                  gap="10px"
                >
                  <Heading level={2}>Linkedln</Heading>
                  <Paragraphs fontSize="18px">Food Shared S.A.</Paragraphs>
                </Box>
              </Box>
              <Box>
                <Paragraphs fontSize="18px">
                  A través de nuestra página de LinkedIn, puedes conocer
                  nuestras iniciativas y proyectos para reducir el desperdicio
                  de alimentos.
                </Paragraphs>
              </Box>
              <Box display="grid" justifyContent="center">
                <Links to="https://wa.me/573135567890" textDecoration="none">
                  <Box
                    width="155px"
                    display="flex"
                    alignItems="center"
                    border="1px solid black"
                    padding="5px 10px"
                    gap="10px"
                    justifyContent="center"
                    alignContent="center"
                    borderRadius="10px"
                    backgroundColor="#e2e2e2"
                    hoverBackgroundColor="#a1a8b4"
                    color="black"
                  >
                    <Paragraphs>Abre Linkedln</Paragraphs>
                    <Image
                      src="src/assets/img/flecha-correcta.png"
                      alt="flecha"
                      width="20px"
                      height="20px"
                    />
                  </Box>
                </Links>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Contacts
