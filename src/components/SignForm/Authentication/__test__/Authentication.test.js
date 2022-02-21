import { render, screen, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Authentication from '../Authentication'

describe('Authentication', () => {
  beforeEach(() => {
    render(<Authentication />)
  })

  test('should switch to Sign Up when clicked button', () => {
    const buttonElement = screen.getByRole('button', { name: /Sign up/i })
    act(() => fireEvent.click(buttonElement))
    const headingElement = screen.getByRole('heading', { name: /SIGN UP/i })
    expect(headingElement).toBeInTheDocument()
  })

  test('should switch to Sign In when clicked cancel button', () => {
    const SignUpButtonElement = screen.getByRole('button', { name: /Sign up/i })
    act(() => fireEvent.click(SignUpButtonElement))
    const cancelButtonElement = screen.getByRole('button', { name: /Cancel/i })
    act(() => fireEvent.click(cancelButtonElement))
    const headingElement = screen.getByRole('heading', { name: /SIGN IN/i })
    expect(headingElement).toBeInTheDocument()
  })
})
