import { IUser } from '@/types/userTypes'

import requestApiLrHub from '../../config/AxionsConfig'

type UserData = Omit<IUser, 'created_at' | 'id'>

class User {
  async register(data: UserData) {
    return await requestApiLrHub.post('/register/user', data)
  }

  async getProfile() {
    const profile = await requestApiLrHub.get<IUser>('/user/profile')

    return profile
  }
}

export const userService = new User()
