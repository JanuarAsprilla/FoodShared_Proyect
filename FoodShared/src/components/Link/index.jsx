import { StyledLink } from './Link'

const Link = ({ href, children, ...props }) => {
  return (
    <StyledLink href={href} {...props}>
      {children}
    </StyledLink>
  )
}

export default Link
