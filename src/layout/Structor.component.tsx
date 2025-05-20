import { Header } from '@/layout/components/Header'
import { AppSidebarMenu } from '@/layout/components/SideBarMenu'
import { SidebarProvider } from '@/context/SideBarContext'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { Loader } from '../components/Atoms/Loader'

export function Structor() {
  return (
    <SidebarProvider defaultOpen={true}>
      <>
        <AppSidebarMenu />

        <div className="w-full">
          <Header />

          <main>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </>
    </SidebarProvider>
  )
}
