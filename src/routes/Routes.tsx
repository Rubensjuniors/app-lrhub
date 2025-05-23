import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import { lazy, Suspense } from 'react'
import { ProtectedRoute } from './PrivateRouter'
import { Structor } from '../layout/Structor.component'
import { Loader } from '../components/Atoms/Loader'

const SignIn = lazy(() => import('../pages/Login/SingIn/SingIn'))
const SignUp = lazy(() => import('../pages/Login/SingUp'))
const Financial = lazy(() => import('../pages/Financial'))
const Profile = lazy(() => import('../pages/Profile'))

export function RoutesComponent() {
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
            <Route path="/loader" element={<Loader />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}
