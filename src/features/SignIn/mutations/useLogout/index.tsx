import { useMutation } from '@tanstack/react-query'

import { authenticateService } from '@/services/requests/Auth'

export function useLogout() {
  return useMutation({
    mutationFn: authenticateService.logout,
  })
}
