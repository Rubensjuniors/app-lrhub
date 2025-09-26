import { Outlet } from '@tanstack/react-router'

import { ProtectedRoute } from '@/routes/protectedRoute'

export default function StructorLayout() {
  return (
    <ProtectedRoute>
      <div className="structor-layout">
        <div className="auth-container">
          <div className="auth-logo">
            <h1>StructorLayout</h1>
            <hr />
          </div>
          <div className="auth-content">
            <Outlet />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
