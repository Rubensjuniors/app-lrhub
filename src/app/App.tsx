import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { Providers } from './providers'
import { Router } from './routes/Routes'

export function App() {
  return (
    <Providers>
      <Toaster richColors />
      <RouterProvider router={Router} />
    </Providers>
  )
}
