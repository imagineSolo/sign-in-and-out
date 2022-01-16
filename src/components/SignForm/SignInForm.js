import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { toast } from 'react-toastify';
import { isValidEmail, isValidPassword } from '../../utilities/validation'

import './SignForm.scss'

const SignInForm = ({switchToSignUp}) => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (event) => {
    const { value, id } = event.target

    setFields({ ...fields, [id]: value })
  }

  const handleSubmit = () => {
    if (validate()){
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setFields({
          email: '',
          password: '',
        })
        toast.success('Login succesful')
      }, 3000)
    }
  }

  const validate = () => {
    const { email, password } = fields
    const errors = {}

    errors.email = !isValidEmail(email)
    errors.password = !isValidPassword(password)

    if (errors.email) {
      toast.error("Incorrect email")
    }

    if (errors.password) {
      toast.error(
        "Password must contain at least 8 characters, capital letter and special character"
      )
    }

    setErrors(errors)

    return !errors.email && !errors.password
};


  return (
    <div className="sign-form-container">
        <Typography variant='h5' className="sign-form-header">SIGN IN</Typography>
        <div className="sign-form-inputs">
        <TextField className="sign-form-text-field"
          required
          id="email"
          label="E-mail"
          type="email"
          margin="dense"
          value={fields.email}
          error={errors.email}
          onChange={handleInputChange}
        />
        <TextField className="sign-form-text-field"
          id="password"
          label="Password"
          type="password"
          margin="dense"
          value={fields.password}
          autoComplete="current-password"
          error={errors.password}
          onChange={handleInputChange}
        />
        </div>
        <div className="sign-in-form-buttons">
        <Button
          className="sign-form-button"
          onClick={handleSubmit}>
          LOGIN
        </Button>
        <Typography
          onClick={switchToSignUp}>
          Don't have an account? <Button className="sign-form-sign-up-button">Sign up</Button>
        </Typography>
        </div>
        <Box sx={{ height: 40 }}>
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </Box>
    </div>
  )
}

export default SignInForm

SignInForm.propTypes = {
  switchToSignUp: PropTypes.func
}