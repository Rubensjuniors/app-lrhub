import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { ProtectedRoute, PublicRoute } from './PrivateRouter'

const AuthLayout = lazy(() => import('../../layout/auth'))
const SignIn = lazy(() => import('../../pages/auth/Sing-in/SingIn'))
const SignUp = lazy(() => import('../../pages/auth/Sing-up'))

const AppLayout = lazy(() => import('../../layout/app'))
const Financial = lazy(() => import('../../pages/app/Financial'))
const Profile = lazy(() => import('../../pages/app/Profile'))

export const Router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: <Financial />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>
    ),
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
])
