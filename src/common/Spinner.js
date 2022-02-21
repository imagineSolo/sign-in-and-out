import styled, { keyframes } from 'styled-components'
import theme from '../utilities/themes'

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`

const Spinner = styled.div`
  height: 40px;
  width: 40px;
  border: 3px solid ${theme.primaryColor};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`

export default Spinner
