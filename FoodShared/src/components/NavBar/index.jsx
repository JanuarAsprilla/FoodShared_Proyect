import Box from '../Box'
import Links from '../Link'
import LogoImage from '../ImageComponent'

const NavBar = () => {
  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/Donar_Alimento', label: 'Donar Alimento' },
    { to: '/Solicitar_Alimento', label: 'Solicitar Alimentos' },
    { to: '/Sobre_Nosotros', label: 'Sobre Nosotros' },
    { to: '/contactanos', label: 'Contactanos' },
  ]

  const renderNavLinks = navLinks.map((link, index) => (
    <Box
      key={index}
      padding="2px 25px"
      transition="all 0.3s ease"
      hoverBackgroundColor="#dcdcdc"
      borderRadius="5px"
    >
      <Links
        to={link.to}
        fontSize="14px"
        fontWeight="bold"
        color="#002d07"
        textDecoration="none"
        hoverColor="#006510"
      >
        {link.label}
      </Links>
    </Box>
  ))

  return (
    <Box
      backgroundColor="#F0F0E9"
      height="55px"
      padding="0 10px"
      gap="10px"
      alignItems="center"
      display="grid"
      gridTemplateColumns="auto 1fr auto"
      position="sticky"
      top="0"
      zIndex="1"
      boxShadow="0px 5px 50px rgba(0, 0, 0, 0.3)"
    >
      <Box display="flex" alignItems="center" height="50px" gap="5px">
        <Links to="/">
          <LogoImage
            src="/logo.jpeg"
            alt="logo FoodShared"
            width="50px"
            height="50px"
            borderRadius="50%"
          />
        </Links>
        <Links
          to="/"
          fontSize="15px"
          fontWeight="900"
          color="#002d07"
          textDecoration="none"
        >
          FoodShared
        </Links>
      </Box>
      <Box
        display="flex"
        gap="10px"
        alignItems="center"
        padding="0 10px"
        justifyContent="center"
      >
        {renderNavLinks}
      </Box>
      <Box display="flex" gap="5px" alignItems="center">
        <Box
          padding="10px"
          backgroundColor="#696558"
          borderRadius="15px"
          cursor="pointer"
          transition="all 0.3s ease"
          hoverBackgroundColor="#3a3830"
        >
          <Links
            to="/Iniciar_Sesion"
            fontSize="12px"
            fontWeight="bold"
            color="white"
            textDecoration="none"
            padding="13px"
          >
            INICIAR SESIÓN
          </Links>
        </Box>
        <Box
          padding="10px"
          borderRadius="15px"
          cursor="pointer"
          transition="all 0.3s ease"
          backgroundColor="#4b8b00"
          hoverBackgroundColor="#355c0b"
        >
          <Links
            to="/Tipo_Registro"
            fontSize="12px"
            fontWeight="bold"
            color="#ffffff"
            hoverColor="#fffaf2"
            textDecoration="none"
            padding="13px"
          >
            REGISTRARSE
          </Links>
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar
