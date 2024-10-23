import Box from '../Box'
import Image from '../ImageComponent'
import Heading from '../Heading'
import Paragraphs from '../Paragraph'
import Link from '../Link'

function Footer() {
  return (
    <>
      <Box
        backgroundColor="#acd99a"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        padding=" 35px 20px 20px 20px"
      >
        <Box
          display="grid"
          gridTemplateRows="repeat(2, 1fr)"
          gap="20px"
          width="350px"
        >
          <Box
            display="grid"
            gridTemplateColumns="auto 1fr"
            alignItems="center"
            gap="5px"
            width="250px"
          >
            <Link href="/">
              <Image
                src="src/assets/img/logoSinNombre.jpeg"
                alt="logo FoodShared"
                width="100px"
                height="100px"
                borderRadius="50%"
              />
            </Link>
            <Heading
              level={2}
              fontWeight="bold"
              textAlign="center"
              color="#002D07"
            >
              FoodShared
            </Heading>
          </Box>
          <Box gap="20px">
            <Heading level={2} color="#002D07">
              Contacto
            </Heading>
            <Paragraphs fontWeight="bold">
              Calle 19 A # 32 - 50, Bogotá D.C, Colombia
            </Paragraphs>
            <Paragraphs fontWeight="bold">
              amigo@bancodealimentos.org.co
            </Paragraphs>
            <Paragraphs fontWeight="bold">
              {' '}
              Recepción: +57 312 5048747
            </Paragraphs>
          </Box>
        </Box>
        <Box
          display="grid"
          gap="20px"
          gridTemplateRows="auto 1fr 1fr"
          justifyItems="center"
          borderRight="1px solid #656565"
          borderLeft="1px solid #656565"
        >
          <Heading level={2} color="#002D07">
            Nos encuentras en:
          </Heading>
          <Box display="grid" gridTemplateColumns="auto auto auto" gap="30px">
            <Link href={'www.facebook.com'}>
              <Image
                src="src/assets/img/facebook.png"
                alt="logo facebook"
                width="60px"
                height="60px"
              />
            </Link>
            <Link href={'www.instagram.com'}>
              <Image
                src="src/assets/img/instagram.png"
                alt="logo instagram"
                width="60px"
                height="60px"
              />
            </Link>
            <Link href={'www.youtube.com'}>
              <Image
                src="src/assets/img/youtube.png"
                alt="logo Youtube"
                width="60px"
                height="60px"
              />
            </Link>
          </Box>
          <Box display="grid" gridTemplateColumns="auto auto" gap="30px">
            <Link href={'www.gmail.com'}>
              <Image
                src="src/assets/img/correoElectronico.png"
                alt="logo Gmail"
                width="60px"
                height="60px"
              />
            </Link>
            <Link href={'www.x.com'}>
              <Image
                src="src/assets/img/X.png"
                alt="logo X"
                width="60px"
                height="60px"
              />
            </Link>
          </Box>
        </Box>
        <Box
          padding=" 0 50px"
          display="grid"
          gap="20px"
          gridTemplateRows="repeat(5, 1fr)"
        >
          <Link
            href="#"
            fontSize="17px"
            fontWeight="bold"
            color="#000000"
            textDecoration="none"
            hoverColor="#656565"
          >
            Inicio
          </Link>
          <Link
            href="#"
            fontSize="17px"
            fontWeight="bold"
            color="#000000"
            textDecoration="none"
            hoverColor="#656565"
          >
            Donar Alimento
          </Link>
          <Link
            href="#"
            fontSize="17px"
            fontWeight="bold"
            color="#000000"
            textDecoration="none"
            hoverColor="#656565"
          >
            Solicitar Alimentos
          </Link>
          <Link
            href="#"
            fontSize="17px"
            fontWeight="bold"
            color="#000000"
            textDecoration="none"
            hoverColor="#656565"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="#"
            fontSize="17px"
            fontWeight="bold"
            color="#000000"
            textDecoration="none"
            hoverColor="#656565"
          >
            Contactanos
          </Link>
        </Box>
      </Box>
    </>
  )
}

export default Footer
