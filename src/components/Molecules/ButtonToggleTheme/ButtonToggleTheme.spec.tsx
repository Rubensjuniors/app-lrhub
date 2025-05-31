import { fireEvent, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { render } from '@/test/test-utils'

import { ButtonToggleTheme } from './index'

const mockSetTheme = vi.fn()

vi.mock('@/context/ThemeContext', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: mockSetTheme,
  }),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

describe('ButtonToggleTheme', () => {
  it('should render the button with sun and moon icons', () => {
    render(<ButtonToggleTheme />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    const sunIcon = screen.getByTestId('sun-icon')
    const moonIcon = screen.getByTestId('moon-icon')
    expect(sunIcon).toBeInTheDocument()
    expect(moonIcon).toBeInTheDocument()
  })

  it('should have accessible text for screen readers', () => {
    render(<ButtonToggleTheme />)

    const srText = screen.getByText('Toggle theme')
    expect(srText).toHaveClass('sr-only')
  })

  it('should call setTheme with opposite theme when clicked', () => {
    render(<ButtonToggleTheme />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockSetTheme).toHaveBeenCalledWith('dark')
  })
})
