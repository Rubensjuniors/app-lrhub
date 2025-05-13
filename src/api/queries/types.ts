export enum PAYMENT_METHOD {
  PIX = 'PIX',
  CREDIT_CARD = 'CREDIT_CARD',
  DEBIT_CARD = 'DEBIT_CARD',
  CASH = 'CASH',
  BANK_TRANSFER = 'BANK_TRANSFER',
}

export interface ICategory {
  id: number
  name: string
  color?: string
  icon?: string
}

export enum EXIT_OR_ENTRY_TYPE {
  EXITS = 'exits',
  ENTRIES = 'entries',
}
export enum EXPENSE_TYPE {
  FIXED = 'fixed',
  DEBIT = 'debit',
  CREDIT = 'credit',
}


export interface IExpense {
  id: number
  paid: boolean
  name: string
  date_of_purchase: string
  expense_type: EXPENSE_TYPE
  exit_or_entry_type: EXIT_OR_ENTRY_TYPE
  updated_at: string
  created_at: string
  category: ICategory
  payment_method: PAYMENT_METHOD
  is_installment: boolean
  total_installments: number | null
  current_installment: number | null
  total_amount: number
  number_installments_paid: number | null
  installment_amount: number | null
}
