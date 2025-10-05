import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router'
import { lazy } from 'react'

const AuthLayout = lazy(() => import('../layout/auth'))
const AppLayout = lazy(() => import('../layout/app'))
const SummaryLayout = lazy(() => import('../layout/SummaryLayout'))

const Hub = lazy(() => import('../pages/Hub'))
const Financial = lazy(() => import('../pages/Financial'))
const SignIn = lazy(() => import('../pages/auth/Sing-in'))
const SignUp = lazy(() => import('../pages/auth/Sing-up'))

const rootRoute = createRootRoute({
  component: () => <Outlet />,
  notFoundComponent: () => <div>Not Found 404</div>
})

// ===== LAYOUTS =====
const authLayout = createRoute({
  getParentRoute: () => rootRoute,
  id: 'auth-layout',
  component: AuthLayout
})

const structorLayout = createRoute({
  getParentRoute: () => rootRoute,
  id: 'structor-layout',
  component: AppLayout
})

const summaryLayout = createRoute({
  getParentRoute: () => structorLayout,
  id: 'summary-layout',
  component: SummaryLayout
})

// ===== PAGES =====
const signInRoute = createRoute({
  getParentRoute: () => authLayout,
  path: '/sign-in',
  component: SignIn
})

const signUpRoute = createRoute({
  getParentRoute: () => authLayout,
  path: '/sign-up',
  component: SignUp
})

const indexRoute = createRoute({
  getParentRoute: () => summaryLayout,
  path: '/',
  component: Hub
})

const financialRoute = createRoute({
  getParentRoute: () => summaryLayout,
  path: '/financial',
  component: Financial
})

const routeTree = rootRoute.addChildren([
  authLayout.addChildren([signInRoute, signUpRoute]),
  structorLayout.addChildren([summaryLayout.addChildren([indexRoute, financialRoute])])
])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent'
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
