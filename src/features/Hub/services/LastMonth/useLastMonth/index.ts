import { useQuery } from '@tanstack/react-query'

import { lastMonthService } from '..'

export function useLastMonth() {
  return useQuery({
    queryKey: ['last-month'],
    queryFn: lastMonthService.getLastMonth,
    staleTime: 1000 * 60 * 5, // 5 minutos
    gcTime: 1000 * 60 * 30 // 30 minutos
  })
}
