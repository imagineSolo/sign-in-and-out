import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './SignForm.scss'

const SignInForm = ({switchToSignUp}) => {

  return (
    <div className="sign-form-container">
        <Typography variant='h5' className="sign-form-header">SIGN IN</Typography>
        <div className="sign-form-inputs">
        <TextField className="sign-form-text-field"
          required
          id="username-required"
          label="E-mail"
          type="email"
        />
        <TextField className="sign-form-text-field"
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        </div>
        <div className="sign-form-buttons">
        <Button className="sign-form-button">
          SIGN IN
        </Button>
        <Button
          className="sign-form-button"
          onClick={switchToSignUp}>
          SIGN UP
        </Button>
        </div>
    </div>
  );
}

export default SignInForm