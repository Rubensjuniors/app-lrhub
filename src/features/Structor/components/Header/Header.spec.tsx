import { describe, expect, it, vi } from 'vitest'

import { render, screen } from '@/config/test-utils'

import { Header } from '.'
import { SidebarProvider } from '@/shared/contexts/SideBarContext'

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
      <SidebarProvider>
        <Header />
      </SidebarProvider>,
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
