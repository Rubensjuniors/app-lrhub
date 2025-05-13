import { Header } from '@/components/Structor/Header'
import { AppSidebarMenu } from '@/components/Structor/SideBarMenu'
import { SidebarProvider } from '@/context/SideBarContext'
import { Outlet } from 'react-router-dom'

export function Structor() {
  return (
    <SidebarProvider defaultOpen={true}>
      <>
        <AppSidebarMenu />

        <div className="w-full">
          <Header />

          <main>
            <Outlet />
          </main>
        </div>
      </>
    </SidebarProvider>
  )
}
