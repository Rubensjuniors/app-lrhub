import type { IUser } from '@/shared/services/User/types'
import type { ReactNode } from 'react'

export interface UserContextType {
  user: IUser,
  isUserLoading: boolean,
}

export interface UserProviderProps {
  children: ReactNode
}
