import { useAuth } from '@/context/AuthContext'
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login/singin" replace />
  }

  return children
}
