import React from 'react'
import { StyledButton } from './Button'

const Button = ({ href, children, ...props }) => {
  return (
    <StyledButton href={href} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button
