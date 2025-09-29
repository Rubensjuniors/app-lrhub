import { Navigate, Outlet } from '@tanstack/react-router'
import { Suspense } from 'react'
import { Loader } from '../../shared/components/Atoms/Loader'
import { SidebarProvider } from '@/shared/contexts/SideBarContext'
import { AppSidebarMenu } from '@/features/Structor/components/SideBarMenu'
import { Header } from '@/features/Structor/components/Header'
import { useAuthContext } from '@/shared/contexts/AuthContext'
import { UserProvider } from '@/shared/contexts/UserContext'

export default function AppLayout() {
  const { isAuthenticated } = useAuthContext()

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />
  }

  return (
    <UserProvider>
      <SidebarProvider defaultOpen={true} >
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
