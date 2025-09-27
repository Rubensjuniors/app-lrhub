import { useQuery } from '@tanstack/react-query'
import { summaryService } from '..'

export function useSummaryQuery() {
  return useQuery({
    queryKey: ['summary'],
    queryFn: summaryService.getSummary,
    staleTime: 1000 * 60 * 5, // 5 minutos
    gcTime: 1000 * 60 * 30, // 30 minutos
  })
}
