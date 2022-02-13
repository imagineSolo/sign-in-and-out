import React from 'react'
import Authentication from './components/SignForm/Authentication'
import { createGlobalStyle } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import theme from './utilities/themes'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    font-family: 'Open Sans';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
	}
`

  return (
    <>
    <GlobalStyle />
    <ToastContainer autoClose={3000} />
    <Authentication />
    </>
  )
}

export default App
