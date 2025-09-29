// import lrHubApi from '@/config/axios'
import type { IUser } from './types'
import { sleep } from '@/shared/utils/sleep'

class User {
  async getProfile(): Promise<IUser> {
    await sleep() // TODO: Remover essa simulação de delay
    // const { data } = await lrHubApi.get<IUser>('/profile')

    return new Promise<IUser>((resolve) =>
      resolve({
        name: 'Larissa Vítoria',
        email: 'rublari3011@teste.com',
        avatar: 'https://avatars.githubusercontent.com/u/16882392?v=4',
      }),
    )
  }
}

export const userService = new User()
