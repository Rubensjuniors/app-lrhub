import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from '@tanstack/react-router'
import { Suspense } from 'react'

import { queryClient } from '@/lib/queryClient'
import { Loading } from '@/shared/components/Atoms'
import { AuthProvider } from '@/shared/contexts/AuthContext'
import { ThemeProvider } from '@/shared/contexts/ThemeContext'

import { router } from './routes'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Suspense fallback={<Loading />}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </Suspense>
      </ThemeProvider>
      {import.meta.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} position="left" buttonPosition="bottom-left" />
      )}
    </QueryClientProvider>
  )
}
