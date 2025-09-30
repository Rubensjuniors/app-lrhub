import { createContext, useContext, useState } from 'react'

import type { HiddenMoneyToggleContextType, HiddenMoneyToggleProviderProps } from './types'

const HiddenMoneyToggleContext = createContext<HiddenMoneyToggleContextType>(
  {} as HiddenMoneyToggleContextType
)

export function HiddenMoneyToggleProvider({ children }: HiddenMoneyToggleProviderProps) {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    const storedValue = localStorage.getItem('hiddenMoney')
    return storedValue ? JSON.parse(storedValue) : true
  })

  function toggleVisibility() {
    localStorage.setItem('hiddenMoney', JSON.stringify(!isVisible))
    setIsVisible((prev) => !prev)
  }

  return (
    <HiddenMoneyToggleContext.Provider value={{ isVisible, toggleVisibility }}>
      {children}
    </HiddenMoneyToggleContext.Provider>
  )
}

export function useHiddenMoneyToggle() {
  const context = useContext(HiddenMoneyToggleContext)
  if (context === undefined) {
    throw new Error('useUserContext must be used within an AuthProvider')
  }
  return context
}
