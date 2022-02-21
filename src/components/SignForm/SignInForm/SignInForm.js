import React, { useState } from 'react'
import Spinner from '../../../common/Spinner'
import PropTypes from 'prop-types'
import Form from '../../../common/Form'
import FormInputs from '../../../common/FormInputs'
import Header from '../../../common/Header'
import Input from '../../../common/Input'
import ButtonsWrapper from '../../../common/ButtonsWrapper'
import Button from '../../../common/Button'
import { toast } from 'react-toastify'
import { isValidEmail, isValidPassword } from '../../../utilities/validation'
import { signIn } from '../../../firebase'

const SignInForm = ({ switchToSignUp }) => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  })
  const [loading, setLoading] = useState(false)

  const handleInputChange = event => {
    const { value, id } = event.target

    setFields({ ...fields, [id]: value })
  }

  const handleSubmit = async () => {
    if (validate()) {
      setLoading(true)
      try {
        await signIn(fields.email, fields.password)
        toast.success('Login succesful')
      } catch (error) {
        setLoading(false)
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
      toast.error('Incorrect email')
    }

    if (errors.password) {
      toast.error('Password must contain at least 8 characters, capital letter and special character')
    }

    setErrors(errors)

    return !errors.email && !errors.password
  }

  return (
    <>
      <Form data-testid='sign-in-form'>
        <Header>SIGN IN</Header>
        <FormInputs>
          <Input
            className='sign-form-text-field'
            required
            id='email'
            placeholder='E-mail'
            type='email'
            value={fields.email}
            error={errors.email}
            onChange={handleInputChange}
          />
          <Input
            className='sign-form-text-field'
            required
            id='password'
            placeholder='Password'
            type='password'
            value={fields.password}
            autoComplete='current-password'
            error={errors.password}
            onChange={handleInputChange}
          />
        </FormInputs>
        <ButtonsWrapper signin>
          <Button type='button' onClick={handleSubmit} disabled={loading}>
            LOGIN
          </Button>
          <p>
            Don't have an account?
            <Button secondary type='button' onClick={switchToSignUp}>
              Sign up
            </Button>
          </p>
        </ButtonsWrapper>
      </Form>
      {loading && <Spinner />}
    </>
  )
}

SignInForm.propTypes = {
  switchToSignUp: PropTypes.func.isRequired,
}

export default SignInForm
