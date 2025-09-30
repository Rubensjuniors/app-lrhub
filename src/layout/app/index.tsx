import { Navigate, Outlet } from '@tanstack/react-router'
import { Suspense } from 'react'

import { Header } from '@/features/Structor/components/Header'
import { AppSidebarMenu } from '@/features/Structor/components/SideBarMenu'
import { useAuthContext } from '@/shared/contexts/AuthContext'
import { SidebarProvider } from '@/shared/contexts/SideBarContext'
import { UserProvider } from '@/shared/contexts/UserContext'

import { Loader } from '../../shared/components/Atoms/Loader'

export default function AppLayout() {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />
  }

  return (
    <UserProvider>
      <SidebarProvider defaultOpen={true}>
        <AppSidebarMenu />

        <div className="w-full">
          <Header />

          <main>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </SidebarProvider>
    </UserProvider>
  )
}
