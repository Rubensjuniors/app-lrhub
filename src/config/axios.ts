import axios from 'axios'
import { env } from '@/env'

const lrHubApi = axios.create({
  baseURL: env.VITE_API_LRHUB,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

lrHubApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401) {
      if (originalRequest.url === '/auth/refreshToken') {
        window.location.href = '/sign-in'
        return Promise.reject(new Error('Sessão expirada'))
      }

      if (originalRequest.url === '/auth/login') {
        return Promise.reject(new Error('Sessão expirada'))
      }

      try {
        // await authenticateService.refreshToken() // TODO: implement refresh token
        return lrHubApi(originalRequest)
      } catch {
        window.location.href = '/sign-in'
        return Promise.reject(new Error('Sessão expirada'))
      }
    }

    return Promise.reject(error)
  },
)

export default lrHubApi
