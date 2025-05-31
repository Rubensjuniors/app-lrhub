import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'

import { SidebarProvider } from '@/context/SideBarContext'
import { render, screen } from '@/test/test-utils'

import { Header } from '.'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

describe('Header', () => {
  const renderHeader = () => {
    return render(
      <BrowserRouter>
        <SidebarProvider>
          <Header />
        </SidebarProvider>
      </BrowserRouter>,
    )
  }

  it('should render header component', () => {
    renderHeader()
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should render logo image', () => {
    renderHeader()
    const logo = screen.getByRole('img', { name: /logo/i })
    expect(logo).toBeInTheDocument()
  })

  it('should render sidebar trigger', () => {
    renderHeader()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
