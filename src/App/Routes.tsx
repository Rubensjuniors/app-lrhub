import { Routes, Route } from 'react-router-dom'
import { Structor } from './Structor.component'
import { ThemeProvider } from '@/context/ThemeContext'
import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home'))

export function AppRoutes() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Structor />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
