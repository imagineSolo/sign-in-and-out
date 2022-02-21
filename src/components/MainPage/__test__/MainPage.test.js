import { render, screen } from '@testing-library/react'
import MainPage from '../MainPage'

describe('MainPage', () => {
  test('should render the MainPage component', async () => {
    render(<MainPage />)
    const headingElement = await screen.findByText(/Logged in as:/i)
    expect(headingElement).toHaveTextContent(/Logged in as:/i)
  })
})
