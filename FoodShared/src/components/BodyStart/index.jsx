import React from 'react'

import LogoImage from './LogoImage'
import Paragraphs from '../Paragraph'
import Heading from '../Heading'
import Box from '../Box'
import Button from '../Button'
const BodyStart = () => {
  return (
    <>
      <Box
        backgroundColor="#d6d2be"
        display="grid"
        gridTemplateColumns="auto auto"
        justifyContent="center"
        gap=" 60px"
        padding=" 20px 10px"
      >
        <LogoImage
          src="src/assets/img/logo-removebg-preview.png"
          alt="logo FoodShared"
          width="450px"
          height="400px"
          borderRadius="50%"
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
              quienes más lo necesitan, contribuyendo a un futuro más sostenible
              y solidario. Cada acción cuenta.
            </Paragraphs>
          </Box>

          <Box display="flex" justifyContent="center">
            <Button
              fontSize="20px"
              color="#ffffff"
              fontWeight="bold"
              backgroundColor="#4b8b00"
              borderRadius="30px"
              padding=" 12px"
              textAlign="center"
              hoverBackgroundColor="#dcdcdc"
              hoverColor="#002d07"
            >
              Dona Ahora
            </Button>
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

          <Box display="flex" justifyContent="left">
            <Button
              fontSize="20px"
              color="#ffffff"
              fontWeight="bold"
              backgroundColor="#4b8b00"
              borderRadius="30px"
              padding=" 12px"
              textAlign="center"
              hoverBackgroundColor="#dcdcdc"
              hoverColor="#002d07"
            >
              Saber Más
            </Button>
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

            <Box display="flex" justifyContent="center">
              <Button
                fontSize="18px"
                color="#ffffff"
                fontWeight="bold"
                backgroundColor="#ce8600"
                borderRadius="30px"
                padding=" 8px 20px "
                textAlign="center"
                hoverBackgroundColor="#dcdcdc"
                hoverColor="#885800"
              >
                Saber Más
              </Button>
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

            <Box display="flex" justifyContent="center">
              <Button
                fontSize="18px"
                color="#ffffff"
                fontWeight="bold"
                backgroundColor="#ce8600"
                borderRadius="30px"
                padding=" 8px 20px "
                textAlign="center"
                hoverBackgroundColor="#dcdcdc"
                hoverColor="#885800"
              >
                Saber Más
              </Button>
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

            <Box display="flex" justifyContent="center">
              <Button
                fontSize="18px"
                color="#ffffff"
                fontWeight="bold"
                backgroundColor="#ce8600"
                borderRadius="30px"
                padding=" 8px 20px "
                textAlign="center"
                hoverBackgroundColor="#dcdcdc"
                hoverColor="#885800"
              >
                Saber Más
              </Button>
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
          <LogoImage
            src="src/assets/img/ShairaRestaurante.jpeg"
            width="200"
            height="200px"
            alt="2"
          ></LogoImage>
          <LogoImage
            src="src/assets/img/LaPailaAbuela.png"
            width="200"
            height="200px"
            alt="Restaurante Tipico La Paila de mi Abuela"
          ></LogoImage>
          <LogoImage
            src="src/assets/img/Frescura.png"
            width="200"
            height="200px"
            alt="Freskura"
          ></LogoImage>
          <LogoImage
            src="src/assets/img/ElTablazo.jpeg"
            width="200"
            height="200px"
            alt="Restaurante el Tablazo"
          ></LogoImage>
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
          <Box display="grid" gridTemplateColumns="1fr 1fr">
            <Box
              margin="50px 10px"
              display="grid"
              gridTemplateRows="repeat(4, auto)"
              gap="10px"
              width="510px"
            >
              <Box>
                <LogoImage
                  src="src/assets/img/KitsAlimentos.jpg"
                  width="490"
                  height="290px"
                  alt="Restaurante el Tablazo"
                />
              </Box>
              <Heading level={2}>
                La desnutrición infantil: una crisis silenciosa
              </Heading>
              <Paragraphs fontSize="15px" fontWeight="light" color="#393939">
                La desnutrición infantil es una crisis silenciosa que afecta a
                miles de niños en Colombia. Cada semana, en promedio, 4 niños
                menores de 5 años mueren por desnutrición en Colombia, 392 mil
                niños menores de 5 años padecen desnutrición crónica y un niño
                por causa del hambre y la baja educación, sólo podrá alcanzar el
                60% de su potencial.
              </Paragraphs>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default BodyStart
