import styled from 'styled-components'

const Container = styled.div`
  background-color: #f0f0e9;
  height: 55px;
  padding: 0 10px;
  align-items: center;
  align-content: center;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
`

const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 50px;
  pading: 55;
  gap: 5px;
`

const LogoImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`
const Title = styled.a`
  font-size: 15px;
  font-weight: 900;
  color: #002d07;
  text-decoration: none;
`

const ContainerNav = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 5px;
`

const LinksNav = styled.a`
  font-size: 13px;
  padding: 5px 25px;
  text-decoration: none;
  color: #002d07;
  font-weight: bold;

  &:hover {
    color: #006510;
    background-color: #dcdcdc;
    border-radius: 5px;
    text-decoration: none;
  }
`
const ButtonContairner = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
const Button = styled.a`
  font-size: 12px;
  padding: 13px;
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  background-color: #696558;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #3a3830;
    text-decoration: none;
  }

  &:nth-child(2) {
    background-color: #002d07;
    color: #ffffff;
  }
  &:nth-child(2):hover {
    color: #002d07;
    background-color: #dcdcdc;
    text-decoration: none;
  }
`

export {
  Container,
  ContainerLogo,
  LogoImg,
  Title,
  ContainerNav,
  LinksNav,
  ButtonContairner,
  Button,
}
