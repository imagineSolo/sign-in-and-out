import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from '../../common/Form'
import FormInputs from '../../common/FormInputs'
import Header from '../../common/Header'
import Input from '../../common/Input'
import ButtonsWrapper from '../../common/ButtonsWrapper'
import Button from '../../common/Button'
import Spinner from '../../common/Spinner'
import { isValidEmail, isValidPassword } from '../../utilities/validation'
import { toast } from 'react-toastify'
import { signUp } from '../../firebase'

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

  const handleSubmit = async () => {
    if (validate()){
      setLoading(true)
      try {
          await signUp(fields.email, fields.password)
          setLoading(false)
          setFields({
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: ''
          })
          toast.success('Account registered')
          switchToSignIn()
      } catch(error){
        toast.error(error.message)
      }
      setLoading(false)
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
    <>
    <Form>
        <Header>
          SIGN UP
        </Header>
        <FormInputs>
        <Input className="sign-form-text-field"
          required
          id="name"
          placeholder="Name"
          value={fields.name}
          error={errors.name}
          onChange={handleInputChange}
        />
        <Input className="sign-form-text-field"
          required
          id="surname"
          placeholder="Surname"
          value={fields.surname}
          error={errors.surname}
          onChange={handleInputChange}
        />
        <Input className="sign-form-text-field"
          required
          id="email"
          placeholder="E-mail"
          type="email"
          value={fields.email}
          error={errors.email}
          onChange={handleInputChange}
        />
        <Input className="sign-form-text-field"
          id="password"
          placeholder="Password"
          type="password"
          autoComplete="current-password"
          value={fields.password}
          error={errors.password}
          onChange={handleInputChange}
        />
        <Input className="sign-form-text-field"
          id="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          autoComplete="current-password"
          value={fields.confirmPassword}
          error={errors.confirmPassword}
          onChange={handleInputChange}
        />
        </FormInputs>
        <ButtonsWrapper signup>
        <Button
          type='button'
          onClick={switchToSignIn}>
            Cancel
        </Button>
        <Button
          type='button'
          onClick={handleSubmit}>
            Save
        </Button>
        </ButtonsWrapper>
    </Form>
    {loading && <Spinner />}
    </>
  )
}

SignUpForm.propTypes = {
  switchToSignIn: PropTypes.func
}

export default SignUpForm
