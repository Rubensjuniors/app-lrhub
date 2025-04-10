import { Routes, Route } from 'react-router-dom'
import { Structor } from './Structor.component'
import { ThemeProvider } from '@/context/ThemeContext'
import { lazy } from 'react'
import { ProtectedRoute } from './PrivateRouter'

const SingIn = lazy(() => import('./pages/Login/SingIn/SingIn'))
const SingOut = lazy(() => import('./pages/Login/SingUp'))
const Home = lazy(() => import('./pages/Home'))

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
                <Home />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
