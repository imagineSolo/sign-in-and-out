import { render, screen, fireEvent } from '@testing-library/react'
import SignInForm from '../SignInForm'

const defultProps = {
  switchToSignUp: jest.fn(),
}

describe('SignInForm', () => {
  beforeEach(() => {
    render(<SignInForm {...defultProps} />)
  })

  test('should render the SignInForm component', () => {
    const formElement = screen.getByTestId('sign-in-form')
    expect(formElement).toBeInTheDocument()
  })

  test('should render two form input fields', () => {
    const inputElements = screen.getAllByDisplayValue('')
    expect(inputElements.length).toBe(2)
  })

  test('should be able to type in email input field', () => {
    const inputElement = screen.getByPlaceholderText(/E-mail/i)
    fireEvent.change(inputElement, { target: { value: 'test@test.com' } })
    expect(inputElement.value).toBe('test@test.com')
  })

  test('should be able to type in password input field', () => {
    const inputElement = screen.getByPlaceholderText(/Password/i)
    fireEvent.change(inputElement, { target: { value: 'password111!' } })
    expect(inputElement.value).toBe('password111!')
  })

  test('should change input border to red, if email type is incorrect on Login action', () => {
    const inputElement = screen.getByPlaceholderText(/E-mail/i)
    const buttonElement = screen.getByRole('button', { name: /Login/i })
    fireEvent.change(inputElement, { target: { value: 'test' } })
    fireEvent.click(buttonElement)
    expect(inputElement).toHaveStyle('border-color: #f50202')
  })
})
