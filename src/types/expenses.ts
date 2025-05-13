import { IExpense, EXPENSE_TYPE } from '@/api/queries/types'

export interface Balance {
  entry: number
  exits: number
  total: number
}

export type FixedExpense = IExpense & {
  expense_type: EXPENSE_TYPE.FIXED
}

export type DebitExpense = IExpense & {
  expense_type: EXPENSE_TYPE.DEBIT
}

export type CreditExpense = IExpense & {
  expense_type: EXPENSE_TYPE.CREDIT
}
