import { authenticateService } from '@/services/requests/Auth'
import { useMutation } from '@tanstack/react-query'

export function useSignIn() {
  return useMutation({
    mutationFn: authenticateService.signIn,
  })
}
