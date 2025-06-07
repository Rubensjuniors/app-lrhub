import { useQuery } from '@tanstack/react-query'

import { userService } from '@/services/User/request'

export function useProfile() {
  return useQuery({
    queryKey: ['user', 'profile'],
    queryFn: userService.getProfile,
    enabled: false,
    staleTime: 1000 * 60 * 5, // 5 minutos
    gcTime: 1000 * 60 * 30, // 30 minutos
  })
}
