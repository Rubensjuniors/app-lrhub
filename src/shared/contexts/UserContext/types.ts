import type { IUser } from '@/shared/services/User/types'
import type { ReactNode } from 'react'

export interface UserContextType extends IUser {}

export interface UserProviderProps {
  children: ReactNode
}
