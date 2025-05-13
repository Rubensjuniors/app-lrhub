import { Header } from '@/components/Structor/Header'
import { AppSidebarMenu } from '@/components/Structor/SideBarMenu'
import { SidebarProvider } from '@/context/SideBarContext'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { Loader } from '@/components/Commons/Loader'
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
