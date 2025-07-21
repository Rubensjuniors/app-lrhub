import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { ProtectedRoute, PublicRoute } from './PrivateRouter'

const AuthLayout = lazy(() => import('../../layout/auth'))
const SignIn = lazy(() => import('../../pages/public/Sing-in/SingIn'))
const SignUp = lazy(() => import('../../pages/public/Sing-up'))

const AppLayout = lazy(() => import('../../layout/app'))
const Hub = lazy(() => import('../../pages/auth/Hub'))
const Tasks = lazy(() => import('../../pages/auth/Tasks'))
// const Financial = lazy(() => import('../../pages/auth/Financial'))
const Profile = lazy(() => import('../../pages/auth/Profile'))

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
        element: <Hub />,
      },
      {
        path: '/tasks',
        element: <Tasks />,
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
