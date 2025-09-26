import { Outlet } from '@tanstack/react-router'

import { Welcome } from '@/features/SignIn/components/Welcome'

export default function AuthLayout() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3 max-w-[420px] mx-auto my-0 p-3">
      <Welcome />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  )
}
