import { createRootRoute, createRouter, Outlet } from '@tanstack/react-router'
import { lazy } from 'react'

import { createLayoutRoute, createPageRoute } from './helpers'
import { Providers } from './providers'

const AuthLayout = lazy(() => import('../shared/components/layouts/Auth'))
const StructorLayout = lazy(() => import('../shared/components/layouts/Structor'))

const Home = lazy(() => import('../pages/Home'))
const SignIn = lazy(() => import('../pages/Auth/SignIn'))

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
const structorLayout = createLayoutRoute('structor-layout', StructorLayout, rootRoute)

// ===== PAGES =====
const signInRoute = createPageRoute('/sign-in', SignIn, authLayout)
const indexRoute = createPageRoute('/', Home, structorLayout)

const routeTree = rootRoute.addChildren([
  authLayout.addChildren([signInRoute]),
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
