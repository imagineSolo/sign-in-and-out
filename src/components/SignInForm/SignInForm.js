import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './SignInForm.scss'

const SignInForm = ({switchToSignUp}) => {

  return (
    <div className="signin-form-container">
        <Typography variant='h5' style={{ margin: '10px' }}>SIGN IN</Typography>
        <div className="sign-form-inputs">
        <TextField style={{ margin: '5px', width: '50%', backgroundColor: 'white' }}
          required
          id="username-required"
          label="E-mail"
          type="email"
        />
        <TextField style={{ margin: '5px', width: '50%', backgroundColor: 'white' }}
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        </div>
        <div className="sign-form-buttons">
        <Button style={{ border: '1px solid rgb(118, 118, 194)'}}>
          SIGN IN
        </Button>
        <Button
          style={{ border: '1px solid rgb(118, 118, 194)'}}
          onClick={switchToSignUp}>
          SIGN UP
        </Button>
        </div>
    </div>
  );
}

export default SignInForm