import { QueryClient } from '@tanstack/react-query'

interface ErrorWithStatus extends Error {
  status?: number
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error: ErrorWithStatus) => {
        if (error?.status === 401 || error?.status === 403) {
          return false
        }
        return failureCount < 1
      },
    },
  },
})
