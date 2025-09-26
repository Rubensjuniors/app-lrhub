import Cookies from 'js-cookie'
import { createContext, type ReactNode, useCallback, useContext, useEffect, useState } from 'react'

import { useLogout } from '@/features/SignIn/mutations/useLogout'
import { useSignIn } from '@/features/SignIn/mutations/useSignIn'

interface AuthContextType {
  isAuthenticated: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

const accessToken = 'accessToken'
const refreshToken = 'refreshToken'

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const cookieToken = Cookies.get(accessToken)
    return cookieToken ? Boolean(cookieToken) : false
  })

  const { mutateAsync: signInMutation } = useSignIn()
  const { mutateAsync: logoutMutation } = useLogout()

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        await signInMutation({ email, password })
        setIsAuthenticated(true)
      } catch (error) {
        console.error('Erro ao fazer login:', error)
        throw error
      }
    },
    [signInMutation],
  )

  const signOut = async () => {
    try {
      await logoutMutation()
      Cookies.remove('auth')
      Cookies.remove(refreshToken)
      Cookies.remove(accessToken)
      setIsAuthenticated(false)
    } catch (error) {
      console.error('Erro ao fazer logout:', error)
      throw error
    }
  }

  useEffect(() => {
    console.log({ isAuthenticated })
  }, [isAuthenticated])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}
