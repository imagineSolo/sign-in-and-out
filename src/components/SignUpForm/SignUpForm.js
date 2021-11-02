import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import './SignUpForm.scss'

const SignUpForm = () => {
  // const [userName, setUserName] = useState('');

  return (
    <div className="signup-form-container">
        <Typography variant='h5' style={{ margin: '10px' }}>SIGN UP</Typography>
        <div className="sign-form-inputs">
         <TextField style={{ margin: '5px', width: '50%', backgroundColor: 'white' }}
          required
          id="name-required"
          label="Name"
        />
        <TextField style={{ margin: '5px', width: '50%', backgroundColor: 'white' }}
          required
          id="surname-required"
          label="Surname"
        />
        <TextField style={{ margin: '5px', width: '50%', backgroundColor: 'white' }}
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField style={{ margin: '5px', width: '50%', backgroundColor: 'white' }}
          id="password-confirm"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        />
        </div>
        <div className="sign-form-buttons">
        <Button style={{ border: '1px solid rgb(118, 118, 194)'}}>
          Save
        </Button>
        <Button style={{ border: '1px solid rgb(118, 118, 194)'}}>
          Cancel
        </Button>
        </div>
    </div>
  );
}

export default SignUpForm