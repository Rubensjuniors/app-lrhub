import Cookies from 'js-cookie'
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'

import { useLogin, useLogout } from '@/services/Mutations'

interface AuthContextType {
  isAuthenticated: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const authCookie = Cookies.get('auth')
    return authCookie ? JSON.parse(authCookie).isAuthenticated : false
  })
  const [isLoading, setIsLoading] = useState(true)

  const { mutateAsync: login } = useLogin()
  const { mutateAsync: logout } = useLogout()

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        await login({ email, password })
        const authState = { isAuthenticated: true }
        Cookies.set('auth', JSON.stringify(authState), {
          expires: 7,
          secure: true,
          sameSite: 'strict',
        })
        setIsAuthenticated(true)
      } catch (error) {
        console.error('Erro ao fazer login:', error)
        throw error
      }
    },
    [login],
  )

  const signOut = async () => {
    try {
      await logout()
      console.log('aqui ssss')
      Cookies.remove('auth')
      Cookies.remove('refreshToken')
      Cookies.remove('token')
      setIsAuthenticated(false)
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
      throw error
    }
  }

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
