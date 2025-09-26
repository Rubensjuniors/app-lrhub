import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from '@/lib/queryClient'
import { AuthProvider } from '@/shared/contexts/AuthContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div>{children}</div>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} position="left" buttonPosition="bottom-left" />
    </QueryClientProvider>
  )
}
