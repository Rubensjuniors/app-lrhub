import lrHubApi from "@/config/axios"
import type { IUser } from "./types"


class User {
  async getProfile(): Promise<{ data: IUser }> {
    const profile = await lrHubApi.get<IUser>('/profile')

    return profile
  }
}

export const userService = new User()