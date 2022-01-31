import React, { useState } from 'react'
import Spinner from '../Spinner/Spinner'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { toast } from 'react-toastify'
import { isValidEmail, isValidPassword } from '../../utilities/validation'
import { signIn } from '../../firebase'
import './SignForm.scss'

const SignInForm = ({switchToSignUp, setLogin}) => {
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

  const handleSubmit = async () => {
    if (validate()){
      setLoading(true)
      try {
        await signIn(fields.email, fields.password)
        setTimeout(() => {
        setFields({
          email: '',
          password: '',
        })
        setLoading(false)
        setLogin()
        toast.success('Login succesful')
      }, 2000)
      } catch(error){
        toast.error(error.message)
      }
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
          onClick={handleSubmit}
          disabled={loading}>
          LOGIN
        </Button>
        <Typography
          onClick={switchToSignUp}>
          Don't have an account? <Button className="sign-form-sign-up-button">Sign up</Button>
        </Typography>
        </div>
        <Spinner loading={loading}/>
    </div>
  )
}

SignInForm.propTypes = {
  switchToSignUp: PropTypes.func,
  setLogin: PropTypes.func
}

export default SignInForm
