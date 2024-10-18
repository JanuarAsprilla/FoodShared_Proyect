import React from 'react'
import {
  Container,
  ContainerLogo,
  LogoImg,
  Title,
  ContainerNav,
  LinksNav,
  ButtonContairner,
  Button,
} from './navBar'
const NavBar = () => {
  return (
    <Container>
      <ContainerLogo>
        <LogoImg
          src="src/assets/img/logo.jpeg"
          alt="logo FoodShared"
          href="/"
        />
        <Title href="/">FoodShared</Title>
      </ContainerLogo>
      <ContainerNav>
        <LinksNav href="/">Inicio</LinksNav>
        <LinksNav href="/">Donar Alimento</LinksNav>
        <LinksNav href="/">Solicitar Alimentos</LinksNav>
        <LinksNav href="/">Sobre Nosotros</LinksNav>
        <LinksNav href="/">Contactanos</LinksNav>
      </ContainerNav>
      <ButtonContairner>
        <Button href="/">INICIAR SESIÓN</Button>
        <Button href="/">REGISTRARSE</Button>
      </ButtonContairner>
    </Container>
  )
}

export default NavBar
