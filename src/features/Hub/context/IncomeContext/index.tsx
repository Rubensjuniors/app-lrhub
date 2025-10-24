import { createContext, useContext, useState } from 'react'

import type { IIncomeContext, IIncomeProvider } from './types'

const IncomeContext = createContext<IIncomeContext>({} as IIncomeContext)

export function IncomeProvider({ children }: IIncomeProvider) {
  const [isOpenIncomeModal, setIsOpenIncomeModal] = useState(false)

  return (
    <IncomeContext.Provider
      value={{
        isOpenIncomeModal,
        setIsOpenIncomeModal
      }}
    >
      {children}
    </IncomeContext.Provider>
  )
}

export function useIncomeContext() {
  const context = useContext(IncomeContext)
  if (context === undefined) {
    throw new Error('useIncomeContext is error')
  }
  return context
}
