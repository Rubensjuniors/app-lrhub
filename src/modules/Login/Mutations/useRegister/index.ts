import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { userService } from '@/services/User/request'

import { ApiError } from '../types'

export function useRegister() {
  return useMutation({
    mutationFn: userService.register,
    onSuccess: () => {
      toast.success('Conta criada com sucesso!')
    },
    onError: (error: ApiError) => {
      toast.error(error.response?.data?.message || 'Erro ao criar conta')
    },
  })
}
