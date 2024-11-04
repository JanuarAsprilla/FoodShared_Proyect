const StyledLabel = styled.label`
  font-size: ${(props) => props.fontSize || '1em'};
  margin-bottom: ${(props) => props.marginBottom || '0.25em'};
  color: ${(props) => props.color || '#333'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
`

export default StyledLabel
