import { render, screen, fireEvent } from '@testing-library/react'
import SignUpForm from '../SignUpForm'

const defultProps = {
  switchToSignUp: jest.fn(),
}

describe('SignUpForm', () => {
  beforeEach(() => {
    render(<SignUpForm {...defultProps} />)
  })

  test('should render the SignUpForm component', () => {
    const formElement = screen.getByTestId('sign-up-form')
    expect(formElement).toBeInTheDocument()
  })

  test('should render five form input fields', () => {
    const inputElements = screen.getAllByDisplayValue('')
    expect(inputElements.length).toBe(5)
  })

  test('should be able to type in email input field', () => {
    const inputElement = screen.getByPlaceholderText(/E-mail/i)
    fireEvent.change(inputElement, { target: { value: 'test@test.com' } })
    expect(inputElement.value).toBe('test@test.com')
  })

  test('should be able to type in password input field', () => {
    const inputElement = screen.getByPlaceholderText('Password')
    fireEvent.change(inputElement, { target: { value: 'password111!' } })
    expect(inputElement.value).toBe('password111!')
  })

  test('should change input border to red, if email type is incorrect on Login action', () => {
    const inputElement = screen.getByPlaceholderText(/E-mail/i)
    const buttonElement = screen.getByRole('button', { name: /Save/i })
    fireEvent.change(inputElement, { target: { value: 'test' } })
    fireEvent.click(buttonElement)
    expect(inputElement).toHaveStyle('border-color: #f50202')
  })
})
