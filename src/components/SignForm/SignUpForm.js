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
import { isValidEmail, isValidPassword } from '../../utilities/validation'

const SignUpForm = ({ switchToSignIn }) => {
  const [fields, setFields] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({
    name: false,
    surname: false,
    email: false,
    password: false,
    confirmPassword: false
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
          name: '',
          surname: '',
          email: '',
          password: '',
          confirmPassword: ''
        })
        toast.success('Account registered')
      }, 3000)
    }
  }

  const validate = () => {
      const { name, surname, email, password, confirmPassword } = fields
      const errors = {}
      errors.email = !isValidEmail(email)
      errors.password = !isValidPassword(password)

      errors.name = name.trim() === ""

      errors.surname = surname.trim() === ""

      if (errors.email) {
        toast.error("Incorrect email")
      }

      if (errors.password) {
        toast.error(
          "Password must contain at least 8 characters, capital letter and special character"
        )
      }

        if (password !== confirmPassword) {
          toast.error('Passwords don\'t match')
          errors.confirmPassword = true
        }

      setErrors(errors)

      return !errors.name && !errors.surname && !errors.email && !errors.password && !errors.confirmPassword
  }

  return (
    <div className="sign-form-container">
        <Typography variant='h5' className="sign-form-header">SIGN UP</Typography>
        <div className="sign-form-inputs">
         <TextField className="sign-form-text-field"
          required
          id="name"
          label="Name"
          margin="dense"
          value={fields.name}
          error={errors.name}
          onChange={handleInputChange}
        />
        <TextField className="sign-form-text-field"
          required
          id="surname"
          label="Surname"
          margin="dense"
          value={fields.surname}
          error={errors.surname}
          onChange={handleInputChange}
        />
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
          autoComplete="current-password"
          margin="dense"
          value={fields.password}
          error={errors.password}
          onChange={handleInputChange}
        />
        <TextField className="sign-form-text-field"
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          margin="dense"
          value={fields.confirmPassword}
          error={errors.confirmPassword}
          onChange={handleInputChange}
        />
        </div>
        <div className="sign-up-form-buttons">
        <Button
          className="sign-form-button"
          onClick={switchToSignIn}>
          Cancel
        </Button>
        <Button
          className="sign-form-button"
          onClick={handleSubmit}>
          Save
        </Button>
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

export default SignUpForm

SignUpForm.propTypes = {
  switchToSignIn: PropTypes.func
}