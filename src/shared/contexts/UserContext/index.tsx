import { createContext, useContext, useMemo } from 'react'
import type { UserContextType, UserProviderProps } from './types'
import { useUserQuery } from '@/shared/services/User/useUserQuery'

const UserContext = createContext<UserContextType>({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const { data: user, isLoading } = useUserQuery()

  const providerValue = useMemo(() => {
    return {
      user: { ...user } as UserContextType['user'],
      isUserLoading: isLoading,
    }
  }, [user])

  return <UserContext.Provider value={providerValue}>{children}</UserContext.Provider>
}

export function useUserContext() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUserContext must be used within an AuthProvider')
  }
  return context
}
