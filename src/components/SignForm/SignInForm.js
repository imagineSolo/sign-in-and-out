import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import { toast } from 'react-toastify';

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

    if (!value) {
      setErrors({ ...errors, [id]: true })
    } else {
      setErrors({ ...errors, [id]: false })
    }
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
        alert('Login succesful')
      }, 3000)
    }
  }

  const validate = () => {
      const { email, password } = fields
      const errors = {}
      let isValid = true

      if (!email) {
        isValid = false
        errors["email"] = true
      }

      if (typeof email !== "undefined") {

        const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
        if (!emailRegex.test(email)) {
          isValid = false
          toast.error('Incorrect email')
          errors["email"] = true
        }
      }

      if (!password) {
        isValid = false
        errors["password"] = true
      }

      if (typeof password !== "undefined") {

        const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
        if (!passwordRegex.test(password)) {
          isValid = false
          toast.error('Password must contain at least 8 characters, capital letter and special character')
          errors["password"] = true
        }
      }

      setErrors(errors)
      return isValid
  }


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
          onChange={handleInputChange}
        />
        <TextField className="sign-form-text-field"
          id="password"
          label="Password"
          type="password"
          margin="dense"
          value={fields.password}
          autoComplete="current-password"
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