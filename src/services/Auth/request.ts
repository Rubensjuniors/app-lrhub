import requestApiLrHub from '../../config/AxionsConfig'

type SignInData = {
  email: string
  password: string
}

type CheckAuthType = {
  isAuthenticated: boolean
}

class Authenticate {
  async signIn(data: SignInData) {
    return await requestApiLrHub.post('/auth/login', data)
  }
  async refreshToken() {
    return await requestApiLrHub.patch('/auth/refreshToken')
  }
  async logout() {
    return await requestApiLrHub.post('/auth/logout')
  }
  async checkAuth() {
    return await requestApiLrHub.get<CheckAuthType>('/auth/check')
  }
}

export const authenticateService = new Authenticate()
