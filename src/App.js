import React, { useState } from 'react'
import SignInForm from './components/SignForm/SignInForm'
import SignUpForm from './components/SignForm/SignUpForm'
import MainPage from './components/MainPage/MainPage'
import { ToastContainer } from 'react-toastify'
import { createGlobalStyle } from 'styled-components'
import theme from './utilities/themes'
import 'react-toastify/dist/ReactToastify.css'

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

const App = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [isLogged, setIsLogged] = useState(false)

  const switchToSignUpHandler = () => {
    setIsSignIn(false)
  }

  const switchToSignInHandler = () => {
    setIsSignIn(true)
  }

  const setLogin = () => {
    setIsLogged(true)
  }

  const setLogout = () => {
    setIsLogged(false)
  }

  return (
    <>
    <GlobalStyle />
    <ToastContainer autoClose={3000} />
      {!isLogged ? isSignIn ?
        <SignInForm
          switchToSignUp={switchToSignUpHandler}
          setLogin={setLogin}
        /> :
        <SignUpForm
          switchToSignIn={switchToSignInHandler}
        /> : <MainPage setLogout={setLogout}/>}
    </>
  )
}

export default App
