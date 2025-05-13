import type { Balance, FixedExpense, DebitExpense, CreditExpense } from '@/types/expenses'

// Dados de mock baseados no server.json
const mockData = {
  balance: {
    entry: 1000,
    exits: 500,
    total: 500,
  },
  fixed: [
    {
      id: 1,
      paid: true,
      name: 'Aluguel',
      expense_type: 'fixed',
      exit_or_entry_type: 'exits',
      date_of_purchase: '2024-07-10',
      updated_at: '2024-07-10',
      created_at: '2024-07-10',
      category: {
        id: 1,
        name: 'Moradia',
        color: '',
        icon: '🏠',
      },
      payment_method: 'PIX',
      is_installment: false,
      total_installments: null,
      current_installment: null,
      total_amount: 600,
      number_installments_paid: null,
      installment_amount: null,
    },
    {
      id: 2,
      paid: false,
      name: 'Internet',
      expense_type: 'fixed',
      exit_or_entry_type: 'exits',
      date_of_purchase: '2024-07-10',
      updated_at: '2024-07-10',
      created_at: '2024-07-10',
      category: {
        id: 1,
        name: 'Moradia',
        color: '',
        icon: '🏠',
      },
      payment_method: 'PIX',
      is_installment: false,
      total_installments: null,
      current_installment: null,
      total_amount: 100,
      number_installments_paid: null,
      installment_amount: null,
    },
  ],
  debit: [
    {
      id: 1,
      paid: false,
      name: 'Mercado',
      expense_type: 'debit',
      exit_or_entry_type: 'exits',
      date_of_purchase: '2024-07-10',
      updated_at: '2024-07-10',
      created_at: '2024-07-10',
      category: {
        id: 1,
        name: 'Alimentação',
        color: '',
        icon: '🍔',
      },
      payment_method: 'CREDIT_CARD',
      is_installment: false,
      total_installments: 1,
      current_installment: 1,
      total_amount: 80,
      number_installments_paid: 0,
      installment_amount: 80,
    },
    {
      id: 2,
      paid: false,
      name: 'Uber',
      expense_type: 'debit',
      exit_or_entry_type: 'exits',
      date_of_purchase: '2024-07-10',
      updated_at: '2024-07-10',
      created_at: '2024-07-10',
      category: {
        id: 1,
        name: 'Transporte',
        color: '',
        icon: '🚗',
      },
      payment_method: 'PIX',
      is_installment: false,
      total_installments: null,
      current_installment: null,
      total_amount: 10,
      number_installments_paid: null,
      installment_amount: null,
    },
  ],
  credit: [
    {
      id: 1,
      paid: false,
      name: 'Celular',
      exit_or_entry_type: 'exits',
      date_of_purchase: '2024-07-10',
      updated_at: '2024-07-10',
      created_at: '2024-07-10',
      expense_type: 'credit',
      category: {
        id: 1,
        name: 'Tecnologia',
        color: '',
        icon: '💻',
      },
      payment_method: 'CREDIT_CARD',
      is_installment: true,
      total_installments: 12,
      current_installment: 1,
      total_amount: 1200,
      number_installments_paid: 0,
      installment_amount: 100,
    },
    {
      id: 2,
      paid: false,
      name: 'MacBook Pro',
      exit_or_entry_type: 'exits',
      expense_type: 'credit',
      date_of_purchase: '2024-07-10',
      updated_at: '2024-07-10',
      created_at: '2024-07-10',
      category: {
        id: 1,
        name: 'Tecnologia',
        color: '',
        icon: '💻',
      },
      payment_method: 'CREDIT_CARD',
      is_installment: true,
      total_installments: 12,
      current_installment: 5,
      total_amount: 10000,
      number_installments_paid: 4,
      installment_amount: 833,
    },
  ],
}

// Função auxiliar para criar uma promessa com delay
const createDelayedPromise = <T>(data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 5000)
  })
}

export class MockExpenseService {
  static async getbalance(): Promise<Balance> {
    return createDelayedPromise(mockData.balance)
  }

  static async getExpensesFixed(): Promise<FixedExpense[]> {
    return createDelayedPromise(mockData.fixed as FixedExpense[])
  }

  static async getExpensesDebts(): Promise<DebitExpense[]> {
    return createDelayedPromise(mockData.debit as DebitExpense[])
  }

  static async getExpensesCredit(): Promise<CreditExpense[]> {
    return createDelayedPromise(mockData.credit as CreditExpense[])
  }
}
