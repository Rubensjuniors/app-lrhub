import { Header } from '@/components/Structor/Header'
import { AppSidebarMenu } from '@/components/Structor/SideBarMenu'
import { SidebarProvider } from '@/context/SideBarContext'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

export function Structor() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full">
        <aside className="fixed left-0 top-0 z-40 h-screen">
          <AppSidebarMenu />
        </aside>

        <div className="flex w-full flex-col pl-64">
          <header className="sticky top-0 z-30">
            <Header />
          </header>

          <main className="flex-1 p-4">
            <Suspense fallback={<div>Carregando...</div>}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
