
import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = true

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />
  }

  return children
}
