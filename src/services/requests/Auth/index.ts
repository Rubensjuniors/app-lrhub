import apiClient from '@/services/axios/config'

type SignInData = {
  email: string
  password: string
}

class AuthenticateServices {
  async signIn(data: SignInData) {
    return await apiClient.post('/auth/signin', data)
  }
  async refreshToken() {
    return await apiClient.patch('/auth/refresh')
  }
  async logout() {
    return await apiClient.post('/auth/logout')
  }
}

export const authenticateService = new AuthenticateServices()
