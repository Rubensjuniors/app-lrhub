import { useQuery } from '@tanstack/react-query'
import { MockExpenseService } from '../services/MockExpenseService'
import { IExpense } from './types'

const useGetExpensesFixed = () => {
  return useQuery<IExpense[]>({
    queryKey: ['expenses-fixed'],
    queryFn: () => MockExpenseService.getExpensesFixed(),
  })
}

export default useGetExpensesFixed
