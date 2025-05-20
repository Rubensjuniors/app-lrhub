import { Header } from '@/layout/Header'
import { AppSidebarMenu } from '@/layout/SideBarMenu'
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
