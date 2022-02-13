import React, { useState } from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import MainPage from '../MainPage/MainPage'
import { useAuth } from '../../firebase'

const user = useAuth

const Authentication = () => {
    const [isSignIn, setIsSignIn] = useState(true)

    const switchToSignUpHandler = () => {
      setIsSignIn(false)
    }

    const switchToSignInHandler = () => {
      setIsSignIn(true)
    }

    return (
        <>
        {!user ? isSignIn ?
            <SignInForm
              switchToSignUp={switchToSignUpHandler}
            /> :
            <SignUpForm
              switchToSignIn={switchToSignInHandler}
            /> : <MainPage />}
        </>
    )

}

export default Authentication