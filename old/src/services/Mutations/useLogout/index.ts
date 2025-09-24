import { useMutation } from '@tanstack/react-query'

import { authenticateService } from '@/services/Auth/request'

export function useLogout() {
  return useMutation({
    mutationFn: authenticateService.logout,
  })
}
