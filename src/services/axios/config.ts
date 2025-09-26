import axios, { type CreateAxiosDefaults } from 'axios'

const axiosConfig: CreateAxiosDefaults = {
  baseURL: 'http://localhost:4001',
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
}

const apiClient = axios.create(axiosConfig)

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401) {
      if (originalRequest.url === '/auth/refresh') {
        // toast.error('Sessão expirada')
        window.location.href = '/sign-in'
        return Promise.reject(new Error('Sessão expirada'))
      }

      if (originalRequest.url === '/auth/login') {
        return Promise.reject(new Error('Sessão expirada'))
      }

      try {
        // await authenticateService.refreshToken()
        return apiClient(originalRequest)
      } catch {
        // toast.error('Sessão expirada')
        window.location.href = '/sign-in'
        return Promise.reject(new Error('Sessão expirada'))
      }
    }

    return Promise.reject(error)
  },
)

export default apiClient

export { axiosConfig }
