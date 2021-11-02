import React, { useState } from 'react';
import SignInForm from './components/SignInForm/SignInForm'
import SignUpForm from './components/SignUpForm/SignUpForm'
import './MainPageComponent.scss';

function MainPageComponent() {
  const [isSignIn, setIsSignIn] = useState(true)

  const switchToSignUpHandler = () => {
    setIsSignIn(false)
  }

  return (
    <div className="main-page-component">
      {isSignIn ?
        <SignInForm switchToSignUp={switchToSignUpHandler} /> :
        <SignUpForm/>}
    </div>
  );
}

export default MainPageComponent;
