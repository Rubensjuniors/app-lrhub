import type { Dispatch, ReactNode, SetStateAction } from 'react'

export interface IIncome {
  id: string
  name: string
  amount: number
  dayOfReceipt: number
}

export interface IIncomeContext {
  isOpenIncomeModal: boolean
  setIsOpenIncomeModal: Dispatch<SetStateAction<boolean>>
}

export interface IIncomeProvider {
  children: ReactNode
}
