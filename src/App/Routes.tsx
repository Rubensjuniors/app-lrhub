import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import { lazy, Suspense } from 'react'
import { ProtectedRoute } from './PrivateRouter'
import { Structor } from './Structor.component'

// Lazy loaded components
const SignIn = lazy(() => import('./pages/Login/SingIn/SingIn'))
const SignUp = lazy(() => import('./pages/Login/SingUp'))
const Financial = lazy(() => import('./pages/Financial'))
const Profile = lazy(() => import('./pages/Profile'))

// Loading component
const LoadingFallback = () => <div>Carregando...</div>

export function AppRoutes() {
  return (
    <ThemeProvider>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/login/signin" element={<SignIn />} />
          <Route path="/login/signup" element={<SignUp />} />

          {/* Rotas protegidas com layout Structor */}
          <Route
            element={
              <ProtectedRoute>
                <Structor />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Financial />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}
