import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Component', () => {
  test('renders the title and counter', () => {
    render(<App />)
    expect(screen.getByText('React CI/CD Demo')).toBeInTheDocument()
    expect(screen.getByText(/Counter:/)).toBeInTheDocument()
  })

  test('increments the counter when button is clicked', async () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /increment/i })

    expect(screen.getByText('Counter: 0')).toBeInTheDocument()

    await userEvent.click(button)
    expect(screen.getByText('Counter: 1')).toBeInTheDocument()
  })
})
