import axios from 'axios'
import { toast } from 'sonner'

import { authenticateService } from '../../services/Auth/request'

// const baseUrl = 'https://api-lrhub.onrender.com'

const requestApiLrHub = axios.create({
  baseURL: import.meta.env.VITE_API_LRHUB,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

requestApiLrHub.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401) {
      if (originalRequest.url === '/auth/refreshToken') {
        toast.error('Sessão expirada')
        window.location.href = '/sign-in'
        return Promise.reject(new Error('Sessão expirada'))
      }

      if (originalRequest.url === '/auth/login') {
        return Promise.reject(new Error('Sessão expirada'))
      }

      try {
        await authenticateService.refreshToken()
        return requestApiLrHub(originalRequest)
      } catch {
        toast.error('Sessão expirada')
        window.location.href = '/sign-in'
        return Promise.reject(new Error('Sessão expirada'))
      }
    }

    return Promise.reject(error)
  },
)

export default requestApiLrHub
