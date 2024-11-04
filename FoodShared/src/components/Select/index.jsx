import StyledSelect from './select'

const Select = ({ options = [], ...props }) => {
  return (
    <StyledSelect {...props}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  )
}

export default Select
