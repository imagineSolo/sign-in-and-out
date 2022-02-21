import styled, { css } from 'styled-components'
import theme from '../utilities/themes'

const priorityStyles = ({ secondary }) => {
  if (secondary) {
    return css`
      display: inline-block;
      color: ${theme.primaryColor};
      background: none;
      width: auto;
      padding: 0 5px;
      border-radius: none;
      font-size: inherit;
    `
  } else {
    return css`
      display: block;
      color: white;
      background: ${theme.primaryColor};
      width: 40%;
      padding: 12px 0px;
      border-radius: 4px;
    `
  }
}

const Button = styled.button`
  ${priorityStyles}

  font-weight: bold;
  box-shadow: none;
  border: none;
  white-space: none;
  cursor: pointer;
  &:disabled {
    background: #eee;
    color: #666;
  }
`

export default Button
