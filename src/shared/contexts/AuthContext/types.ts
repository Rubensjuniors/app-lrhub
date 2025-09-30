import type { ReactNode } from 'react'

export interface AuthContextType {
  isAuthenticated: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export interface AuthProviderProps {
  children: ReactNode
}
