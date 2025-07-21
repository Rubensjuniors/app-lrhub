import axios, { AxiosInstance } from 'axios'
import { toast } from 'sonner'

import { authenticateService } from '../../services/Auth/request'
import i18n from '../i18n'

export function createApiInstance(baseURL: string): AxiosInstance {
  const instance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config

      if (error.response?.status === 401) {
        if (originalRequest.url === '/auth/refreshToken') {
          toast.error(i18n.t('errors.session_expired'))
          window.location.href = '/sign-in'
          return Promise.reject(new Error('Sessão expirada'))
        }

        if (originalRequest.url === '/auth/login') {
          return Promise.reject(new Error('Sessão expirada'))
        }

        try {
          await authenticateService.refreshToken()
          return instance(originalRequest)
        } catch {
          toast.error(i18n.t('errors.session_expired'))
          window.location.href = '/sign-in'
          return Promise.reject(new Error('Sessão expirada'))
        }
      }

      return Promise.reject(error)
    },
  )

  return instance
}
