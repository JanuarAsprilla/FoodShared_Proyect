import Box from '../components/Box'
import Image from '../components/ImageComponent'
import { Helmet } from 'react-helmet'
import Paragraph from '../components/Paragraph'
import Heading from '../components/Heading'
import Form from '../components/Form'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'
import Links from '../components/Link'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import Select from '../components/Select'

const RegisterCompay = () => {
  const registerCompany = [
    {
      nameLabel: 'Nombre de empresa',
      htmlFor: 'username',
      type: 'text',
      placeholder: 'Ingrese el nombre de empresa',
    },
    {
      nameLabel: 'Tipo de empresa',
      htmlFor: 'typeCompany',
      type: 'select',
      options: [
        'Sociedad Anónima (S.A)',
        'Sociedad por Acciones Simplificada (S.A.S.)',
        'Sociedad de Responsabilidad Limitada (Ltda.)',
        'Empresa Unipersonal (E.U.)',
        'Sociedad Colectiva (S.C.)',
        'Sociedad en Comandita (Simple y por Acciones)',
        'Cooperativas',
        'Sociedades Civiles',
        'Sociedades de Responsabilidad Limitada (S.R.L.)',
        'Sociedades de Responsabilidad Limitada por Acciones (S.R.L.A.)',
        'Sociedades Simplificadas (S.S.)',
      ],
    },
    {
      nameLabel: 'NIT de la empresa',
      htmlFor: 'number',
      type: 'number',
      placeholder: 'Ingrese Numero tefelonico',
    },
    {
      nameLabel: 'Direccion de la empresa',
      htmlFor: 'address',
      type: 'text',
      placeholder: 'Direccion de empresa',
    },
    {
      nameLabel: 'Pais y/o Region',
      htmlFor: 'country',
      type: 'text',
      placeholder: 'Pais o Region',
    },
  ]
  const navigate = useNavigate()

  const handleRedirect = () => {
    alert('Registrado Correctamente')
    navigate('/Iniciar_Sesion')
  }
  const optionsWithValue =
    registerCompany[1]?.options?.map((option) => ({
      label: option,
      value: option
        .toLowerCase()
        .replace(/ /g, '_')
        .replace(/[^a-z0-9_]/g, ''), // Asegura que el value sea único y amigable
    })) || []

  const renderRegisterCompay = (
    <Form>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridTemplateRows="repeat(3, 1fr)"
        gap="40px"
      >
        {registerCompany.map((dates, index) => (
          <Box key={index} display="grid">
            <Label
              htmlFor={dates.htmlFor}
              fontSize="18px"
              fontWeight="bold"
              color="#000000"
            >
              {dates.nameLabel}
            </Label>
            <Box
              display="grid"
              gridTemplateColumns="1fr auto"
              padding="1px 10px"
              borderRadius="40px"
              border="1px solid #000f00"
              backgroundColor="#ffffff"
              position="relative"
            >
              {dates.type === 'select' ? (
                <Select
                  id={dates.htmlFor}
                  options={optionsWithValue}
                  placeholder={dates.placeholder}
                  padding="10px 10px"
                  outline="none"
                  border="none"
                  width="100%"
                />
              ) : (
                <Input
                  type={dates.type}
                  id={dates.htmlFor}
                  placeholder={dates.placeholder}
                  padding="10px 10px"
                  width="85%"
                  outline="none"
                  border="none"
                />
              )}
            </Box>
          </Box>
        ))}
      </Box>
      <Box margin="25px 0" display="flex" justifyContent="center">
        <Button
          backgroundColor="#4B8B00"
          color="#ffffff"
          borderRadius="10px"
          padding="10px 50px"
          margin="20px 0"
          type="submit"
          name="Registrarse"
          onClick={handleRedirect}
        >
          Registrarse
        </Button>
      </Box>
    </Form>
  )
  return (
    <>
      <Helmet>
        <title>Registro de Usuario</title>
      </Helmet>
      <Box backgroundColor="#d6d2be">
        <Box
          margin=" 0 auto"
          width="800px"
          display="grid"
          gap=" 30px"
          padding=" 20px 10px"
        >
          <Box
            margin=" 0 auto"
            padding="50px"
            border="1px solid #4B8B00"
            borderRadius="50%"
          >
            <Links to="/">
              <Image
                src="src/assets/img/logo-removebg-preview.png"
                alt="logo FoodShared"
                width="150px"
                height="150px"
              />
            </Links>
          </Box>
          <Box display="grid" gap="15px">
            <Heading level={1} color="#4B8B00" textAlign="center">
              Crea tu cuenta
            </Heading>
            <Paragraph fontSize="18px" color="#213c00" textAlign="center">
              Como empresa
            </Paragraph>
          </Box>
          <Box>{renderRegisterCompay}</Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default RegisterCompay
