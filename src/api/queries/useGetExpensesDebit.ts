import { useQuery } from '@tanstack/react-query'
import { IExpense } from './types'
import { MockExpenseService } from '../services/MockExpenseService'

const useGetExpensesDebit = () => {
  return useQuery<IExpense[]>({
    queryKey: ['expenses-debit'],
    queryFn: () => MockExpenseService.getExpensesDebts(),
  })
}

export default useGetExpensesDebit
