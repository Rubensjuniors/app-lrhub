import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/_layouts/Header'
import { AppSidebarMenu } from '@/components/_layouts/SideBarMenu'
import { SidebarProvider } from '@/context/SideBarContext'

import { Loader } from '../../components/Atoms/Loader'

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
