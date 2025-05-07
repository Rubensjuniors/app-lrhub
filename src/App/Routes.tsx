import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import { lazy, Suspense } from 'react'
import { ProtectedRoute } from './PrivateRouter'

// Lazy loaded components
const SignIn = lazy(() => import('./pages/Login/SingIn/SingIn'))
const SignUp = lazy(() => import('./pages/Login/SingUp'))
const Financial = lazy(() => import('./pages/Financial'))
const Profile = lazy(() => import('./pages/Profile'))

// Loading component
const LoadingFallback = () => <div>Carregando...</div>

// Route configuration
const routes = [
  {
    path: '/login/signin',
    element: <SignIn />,
    isProtected: false,
  },
  {
    path: '/login/signup',
    element: <SignUp />,
    isProtected: false,
  },
  {
    path: '/',
    element: <Financial />,
    isProtected: true,
  },
  {
    path: '/profile',
    element: <Profile />,
    isProtected: true,
  },
]

export function AppRoutes() {
  return (
    <ThemeProvider>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {routes.map(({ path, element, isProtected }) => (
            <Route
              key={path}
              path={path}
              element={isProtected ? <ProtectedRoute>{element}</ProtectedRoute> : element}
            />
          ))}
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}
