import React, { useState } from 'react';
import SignInForm from './components/SignForm/SignInForm'
import SignUpForm from './components/SignForm/SignUpForm'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './MainPageComponent.scss';

function MainPageComponent() {
  const [isSignIn, setIsSignIn] = useState(true)

  const switchToSignUpHandler = () => {
    setIsSignIn(false)
  }

  const switchToSignInHandler = () => {
    setIsSignIn(true)
  }

  return (
    <div className="main-page-component">
      <ToastContainer autoClose={3000} />
      {isSignIn ?
        <SignInForm switchToSignUp={switchToSignUpHandler} /> :
        <SignUpForm switchToSignIn={switchToSignInHandler} />}
    </div>
  );
}

export default MainPageComponent;
