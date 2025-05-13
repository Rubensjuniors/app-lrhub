import { useQuery } from '@tanstack/react-query'
import { MockExpenseService } from '../services/MockExpenseService'

interface Balance {
  entry: number
  exits: number
  total: number
}

export const useGetBalance = () => {
  return useQuery<Balance>({
    queryKey: ['balance'],
    queryFn: () => MockExpenseService.getbalance(),
  })
}
