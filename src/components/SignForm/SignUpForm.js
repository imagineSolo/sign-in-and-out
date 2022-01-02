import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import './SignForm.scss'

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
        setFields({
          name: '',
          surname: '',
          email: '',
          password: '',
          confirmPassword: ''
        })
        alert('Demo Form is submited')
    }
  }

  const validate = () => {
      const { name, surname, email, password, confirmPassword } = fields
      const errors = {}
      let isValid = true

      if (!name) {
        isValid = false
        errors["name"] = true
      }

      if (!surname) {
        isValid = false
        errors["surname"] = true
      }

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

      if (typeof password !== "undefined" && typeof confirmPassword !== "undefined") {
        console.log(password)
        console.log(confirmPassword)
        if (password !== confirmPassword) {
          isValid = false
          toast.error('Passwords don\'t match')
          errors["confirmPassword"] = true
        }

    }

      setErrors(errors)
      return isValid
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
    </div>
  )
}

export default SignUpForm

SignUpForm.propTypes = {
  switchToSignIn: PropTypes.func
}