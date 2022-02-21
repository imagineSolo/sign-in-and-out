import styled from 'styled-components'

const Input = styled.input`
  box-sizing: border-box;
  width: 70%;
  height: 40px;
  padding: 4px 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 1em;
  font-family: 'Open Sans';
  border-color: ${props => (props.error ? '#f50202' : '#dfe0ef')};
`

export default Input
