import React from 'react';
import PropTypes from 'prop-types';
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
          margin="dense"
        />
        <TextField className="sign-form-text-field"
          id="password"
          label="Password"
          type="password"
          margin="dense"
          autoComplete="current-password"
        />
        </div>
        <div className="sign-in-form-buttons">
        <Button className="sign-form-button">
          LOGIN
        </Button>
        <Typography
          // className="sign-form-button"
          onClick={switchToSignUp}>
          Don't have an account? <Button className="sign-form-sign-up-button">Sign up</Button>
        </Typography>
        </div>
    </div>
  );
}

export default SignInForm

SignInForm.propTypes = {
  switchToSignUp: PropTypes.func
}