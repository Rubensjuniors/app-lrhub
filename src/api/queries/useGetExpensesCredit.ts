import { useQuery } from '@tanstack/react-query'
import { IExpense } from './types'
import { MockExpenseService } from '../services/MockExpenseService'

const useGetExpensesCredit = () => {
  return useQuery<IExpense[]>({
    queryKey: ['expenses-credit'],
    queryFn: () => MockExpenseService.getExpensesCredit(),
  })
}

export default useGetExpensesCredit
