import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import { lazy, Suspense } from 'react'
import { ProtectedRoute } from './PrivateRouter'
import { Structor } from './Structor.component'
import { Loader } from '@/components/LoaderFullContent'

const SignIn = lazy(() => import('./pages/Login/SingIn/SingIn'))
const SignUp = lazy(() => import('./pages/Login/SingUp'))
const Financial = lazy(() => import('./pages/Financial'))
const Profile = lazy(() => import('./pages/Profile'))

export function AppRoutes() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login/signin" element={<SignIn />} />
          <Route path="/login/signup" element={<SignUp />} />

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
