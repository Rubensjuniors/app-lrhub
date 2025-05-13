import { ApiLrhub } from '@/config/httpClient'

export class ExpenseService {
  static async getbalance() {
    try {
      const response = await ApiLrhub.get('/balance')
      return response.data
    } catch (error) {
      console.error('Erro ao obter o saldo:', error)
      throw error
    }
  }

  static async getExpensesFixed() {
    try {
      const response = await ApiLrhub.get('/fixed')
      return response.data
    } catch (error) {
      console.error('Erro ao obter as despesas fixas:', error)
      throw error
    }
  }

  static async getExpensesDebts() {
    try {
      const response = await ApiLrhub.get('/debit')
      return response.data
    } catch (error) {
      console.error('Erro ao obter as despesas debito:', error)
      throw error
    }
  }

  static async getExpensesCredit() {
    try {
      const response = await ApiLrhub.get('/credit')
      return response.data
    } catch (error) {
      console.error('Erro ao obter as despesas credito:', error)
      throw error
    }
  }
}