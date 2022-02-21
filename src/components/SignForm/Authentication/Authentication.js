import React, { useState } from 'react'
import SignInForm from '../SignInForm/SignInForm'
import SignUpForm from '../SignUpForm/SignUpForm'
import MainPage from '../../MainPage/MainPage'
import { useAuth } from '../../../firebase'

const Authentication = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const user = useAuth()

  const switchToSignUpHandler = () => {
    setIsSignIn(false)
  }

  const switchToSignInHandler = () => {
    setIsSignIn(true)
  }

  return (
    <>
      {!user ? (
        isSignIn ? (
          <SignInForm switchToSignUp={switchToSignUpHandler} />
        ) : (
          <SignUpForm switchToSignIn={switchToSignInHandler} />
        )
      ) : (
        <MainPage />
      )}
    </>
  )
}

export default Authentication
