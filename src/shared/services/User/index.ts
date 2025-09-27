import lrHubApi from "@/config/axios"
import type { IUser } from "./types"
import { sleep } from "@/shared/utils/sleep"


class User {
  async getProfile(): Promise<IUser > {
     await sleep() // TODO: Remover essa simulação de delay
    const { data } = await lrHubApi.get<IUser>('/profile')

    return data
  }
}

export const userService = new User()