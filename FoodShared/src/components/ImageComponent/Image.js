import styled from 'styled-components'

const BodyImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
`

export { BodyImage }
