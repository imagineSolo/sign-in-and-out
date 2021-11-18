import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './SignForm.scss'

const SignUpForm = ({switchToSignIn}) => {

  return (
    <div className="sign-form-container">
        <Typography variant='h5' className="sign-form-header">SIGN UP</Typography>
        <div className="sign-form-inputs">
         <TextField className="sign-form-text-field"
          required
          id="name-required"
          label="Name"
          margin="dense"
        />
        <TextField className="sign-form-text-field"
          required
          id="surname-required"
          label="Surname"
          margin="dense"
        />
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
          autoComplete="current-password"
          margin="dense"
        />
        <TextField className="sign-form-text-field"
          id="password-confirm"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          margin="dense"
        />
        </div>
        <div className="sign-up-form-buttons">
        <Button
          className="sign-form-button"
          onClick={switchToSignIn}>
          Cancel
        </Button>
        <Button className="sign-form-button">
          Save
        </Button>
        </div>
    </div>
  );
}

export default SignUpForm

SignUpForm.propTypes = {
  switchToSignIn: PropTypes.func
}