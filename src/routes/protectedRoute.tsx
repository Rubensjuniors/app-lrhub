import { useNavigate } from '@tanstack/react-router'
import { type ReactNode, useEffect } from 'react'

import { useAuthContext } from '@/shared/contexts/AuthContext'

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({ to: '/sign-in' })
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return null
  }

  return children
}
