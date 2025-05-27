import { RouterProvider } from 'react-router-dom'

import { Providers } from './providers'
import { Router } from './routes/Routes'

export function App() {
  return (
    <Providers>
      <RouterProvider router={Router} />
    </Providers>
  )
}
