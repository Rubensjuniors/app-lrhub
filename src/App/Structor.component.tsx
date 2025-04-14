import { AppSidebarMenu } from '@/components/Structor/SideBarMenu'
import { SidebarProvider } from '@/context/SideBarContext'
import { Outlet } from 'react-router-dom'

export function Structor() {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebarMenu />
      <main>
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
