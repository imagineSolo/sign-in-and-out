import React, { useState } from 'react'
import SignInForm from './components/SignForm/SignInForm'
import SignUpForm from './components/SignForm/SignUpForm'
import MainPage from './components/MainPage/MainPage'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import './App.scss'

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
    <div className="main-page-component">
      <ToastContainer autoClose={3000} />
      {!isLogged ? isSignIn ?
        <SignInForm
          switchToSignUp={switchToSignUpHandler}
          setLogin={setLogin}
        /> :
        <SignUpForm
          switchToSignIn={switchToSignInHandler}
        /> : <MainPage setLogout={setLogout}/>}
    </div>
  );
}

export default App
