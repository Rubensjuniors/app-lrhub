import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const AuthLayout = lazy(() => import('../../layout/auth'))
const SignIn = lazy(() => import('../../pages/auth/Sing-in/SingIn'))
const SignUp = lazy(() => import('../../pages/auth/Sing-up'))

const AppLayout = lazy(() => import('../../layout/app'))
const Financial = lazy(() => import('../../pages/Financial'))
const Profile = lazy(() => import('../../pages/Profile'))

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
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
    element: <AuthLayout />,
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
