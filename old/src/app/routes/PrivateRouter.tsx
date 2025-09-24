/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { useAuthContext } from '@/context/AuthContext'

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuthContext()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/sign-in', {
        replace: true,
        state: { from: location.pathname },
      })
    }
  }, [isAuthenticated, location.pathname, navigate])

  if (!isAuthenticated) {
    return null
  }

  return children
}

export const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuthContext()
  const navigate = useNavigate()
  const location = useLocation()
  const publicRoutes = ['/sign-in', '/sign-up']

  useEffect(() => {
    if (isAuthenticated && publicRoutes.includes(location.pathname)) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, location.pathname, navigate])

  if (isAuthenticated && publicRoutes.includes(location.pathname)) {
    return null
  }

  return children
}
