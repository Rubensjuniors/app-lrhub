import { Outlet } from '@tanstack/react-router'
import { Suspense } from 'react'
import { Loader } from '../../shared/components/Atoms/Loader'
import { SidebarProvider } from '@/shared/contexts/SideBarContext'
import { AppSidebarMenu } from '@/features/Structor/components/SideBarMenu'
import { Header } from '@/features/Structor/components/Header'

export default function AppLayout() {
  return (
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
  )
}
