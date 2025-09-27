import { useTranslation } from 'react-i18next'

import { ItemsMenu } from './constants'
import { Sidebar } from '@/shared/components/Atoms'
import { Link } from '@tanstack/react-router'
import { ButtonToggleTheme } from '@/shared/components/Molecules'
import { useSidebar } from '@/shared/contexts/SideBarContext'

export function AppSidebarMenu() {
  const { setOpenMobile } = useSidebar()
  const { t } = useTranslation()

  return (
    <Sidebar>
      <Sidebar.SidebarHeader className="flex items-center flex-row justify-between p-4">
        <Link to="/" className="hidden md:block">
          <img src="/icons/logo.svg" alt="Logo" />
        </Link>

        <ButtonToggleTheme />
        <Sidebar.SidebarTrigger className="md:hidden ml-3" isClose />
      </Sidebar.SidebarHeader>
      <Sidebar.SidebarContent className="p-2">
        <nav className="flex flex-col gap-2">
          {ItemsMenu.map((item) => {
            return (
              <Link to={item.route} key={item.name} onClick={() => setOpenMobile(false)}>
                {({ isActive }) => (
                  <div
                    className={`
                      ${isActive ? 'text-primary bg-sidebar-secondary' : ''}
                      hover:bg-sidebar-secondary hover:text-primary
                      transition-colors duration-200 rounded flex items-center
                      gap-2 py-4 px-3`}
                  >
                    {item.icon}
                    <span>{t(item.name)}</span>
                  </div>
                )}
              </Link>
            )
          })}
        </nav>
      </Sidebar.SidebarContent>
    </Sidebar>
  )
}
