import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/layout/Header'
import { AppSidebarMenu } from '@/components/layout/SideBarMenu'
import { SidebarProvider } from '@/context/SideBarContext'

import { Loader } from '../../components/common/Loader'

export default function AppLayout() {
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
