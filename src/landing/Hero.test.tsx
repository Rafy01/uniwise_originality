import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

test('renders hero title', () => {
  render(<Hero />)
  expect(screen.getByText(/discover originality/i)).toBeInTheDocument()
})
