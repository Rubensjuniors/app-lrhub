import { Routes, Route, Navigate } from 'react-router-dom'
import { Structor } from './Structor.component'
import { ThemeProvider } from '@/context/ThemeContext'
import { lazy } from 'react'
import { ProtectedRoute } from './PrivateRouter'

const SingIn = lazy(() => import('./pages/Login/SingIn/SingIn'))
const SingOut = lazy(() => import('./pages/Login/SingUp'))
const Financial = lazy(() => import('./pages/Financial'))
const Profile = lazy(() => import('./pages/Profile'))

export function AppRoutes() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/login/singin" element={<SingIn />} />
        <Route path="/login/singup" element={<SingOut />} />

        <Route element={<Structor />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                 <Navigate to="/financial" replace />
              </ProtectedRoute>
            }
          />
          <Route
            path="/financial"
            element={
              <ProtectedRoute>
                <Financial />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
