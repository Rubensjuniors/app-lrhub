import { useQuery } from '@tanstack/react-query'

import { userService } from '..'

export function useUserQuery() {
  return useQuery({
    queryKey: ['user', 'profile'],
    queryFn: userService.getProfile,
    staleTime: 1000 * 60 * 5, // 5 minutos
    gcTime: 1000 * 60 * 30 // 30 minutos
  })
}
