import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { authenticateService } from '@/services/Auth/request'

import { ApiError } from '../types'

export function useLogin() {
  return useMutation({
    mutationFn: authenticateService.signIn,
    onSuccess: () => {
      toast.success('Login realizado com sucesso!')
    },
    onError: (error: ApiError) => {
      toast.error(error.response?.data?.message || 'Erro ao fazer login')
    },
  })
}
