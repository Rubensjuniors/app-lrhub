import Cookies from 'js-cookie'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import type { AuthContextType, AuthProviderProps } from './types'

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const KEY_TOKEN = 'token'
const KEY_REFRESH_TOKEN = 'token'

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const cookieToken = Cookies.get(KEY_TOKEN)

    return cookieToken ? Boolean(cookieToken) : false
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const signIn = useCallback(async (email: string, password: string) => {
    Cookies.set(KEY_TOKEN, 'true') // TODO: Remover isso quando implementar a autenticação
    try {
      console.log({ email, password })
      setIsAuthenticated(true)
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      throw error
    }
  }, [])

  const signOut = useCallback(async () => {
    try {
      console.log('Fazendo logout...')
      Cookies.remove('auth')
      Cookies.remove(KEY_REFRESH_TOKEN)
      Cookies.remove(KEY_TOKEN)
      setIsAuthenticated(false)
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
      throw error
    }
  }, [])

  const value: AuthContextType = {
    isAuthenticated,
    signIn,
    signOut,
  }

  if (isLoading) {
    return null
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}
