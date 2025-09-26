import { createRootRoute, createRouter, Outlet } from '@tanstack/react-router'
import { lazy } from 'react'

import { createLayoutRoute, createPageRoute } from './helpers'
import { Providers } from './providers'

const AuthLayout = lazy(() => import('../layout/auth'))
const AppLayout = lazy(() => import('../layout/app'))

const Financial = lazy(() => import('../pages/Financial'))
const SignIn = lazy(() => import('../pages/auth/Sing-in'))
const SignUp = lazy(() => import('../pages/auth/Sing-up'))

const rootRoute = createRootRoute({
  component: () => (
    <Providers>
      <Outlet />
    </Providers>
  ),
  notFoundComponent: () => <div>Not Found 404</div>,
})

// ===== LAYOUTS =====
const authLayout = createLayoutRoute('auth-layout', AuthLayout, rootRoute)
const structorLayout = createLayoutRoute('structor-layout', AppLayout, rootRoute)

// ===== PAGES =====
const signInRoute = createPageRoute('/sign-in', SignIn, authLayout)
const signUpRoute = createPageRoute('/sign-up', SignUp, authLayout)
const indexRoute = createPageRoute('/', Financial, structorLayout)

const routeTree = rootRoute.addChildren([
  authLayout.addChildren([signInRoute, signUpRoute]),
  structorLayout.addChildren([indexRoute]),
])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
