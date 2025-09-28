import type { ReactNode } from 'react'

export interface HiddenMoneyToggleContextType {
  isVisible: boolean
  toggleVisibility: () => void
}

export interface HiddenMoneyToggleProviderProps {
  children: ReactNode
}
