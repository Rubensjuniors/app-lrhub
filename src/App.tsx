import { RouterProvider } from '@tanstack/react-router'
import { router } from './routes'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from '@/lib/queryClient'
import { ThemeProvider } from '@/shared/contexts/ThemeContext'
import { Suspense } from 'react'
import { AuthProvider } from '@/shared/contexts/AuthContext'
import { Loader } from '@/shared/components/Atoms'
import { UserProvider } from './shared/contexts/UserContext'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Suspense fallback={<Loader />}>
          <AuthProvider>
            <UserProvider>
              <RouterProvider router={router} />
            </UserProvider>
          </AuthProvider>
        </Suspense>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position="left" buttonPosition="bottom-left" />
    </QueryClientProvider>
  )
}
