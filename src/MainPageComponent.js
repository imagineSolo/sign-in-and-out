import React, { useState } from 'react';
import SignInForm from './components/SignForm/SignInForm'
import SignUpForm from './components/SignForm/SignUpForm'
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
      {isSignIn ?
        <SignInForm switchToSignUp={switchToSignUpHandler} /> :
        <SignUpForm switchToSignIn={switchToSignInHandler} />}
    </div>
  );
}

export default MainPageComponent;
