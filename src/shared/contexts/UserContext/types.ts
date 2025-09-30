import type { ReactNode } from 'react'

import type { IUser } from '@/shared/services/User/types'

export interface UserContextType {
  user: IUser,
  isUserLoading: boolean,
}

export interface UserProviderProps {
  children: ReactNode
}
