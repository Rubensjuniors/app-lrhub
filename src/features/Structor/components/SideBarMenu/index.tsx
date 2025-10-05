import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { Button, Sidebar } from '@/shared/components/Atoms'
import { ButtonToggleTheme } from '@/shared/components/Molecules'
import { useSidebar } from '@/shared/contexts/SideBarContext'

import { ItemsMenu } from './constants'

export function AppSidebarMenu() {
  const { setOpenMobile } = useSidebar()
  const { t } = useTranslation()
  // const t = ' "
  //           className=""'

  return (
    <Sidebar>
      <Sidebar.SidebarHeader className="flex items-center md:flex-col lg:flex-row flex-row justify-between p-4 gap-4">
        <Link to="/" className="hidden md:block">
          <img src="/icons/logo.svg" alt="Logo" />
        </Link>

        <ButtonToggleTheme />
        <Sidebar.SidebarTrigger className="md:hidden" isClose />
      </Sidebar.SidebarHeader>
      <Sidebar.SidebarContent className="p-2">
        <nav className="flex flex-col gap-2">
          {ItemsMenu.map((item) => {
            return (
              <Link to={item.route} key={item.name} onClick={() => setOpenMobile(false)}>
                {({ isActive }) => (
                  <Button
                    variant="ghost"
                    className={`
                      ${isActive ? 'bg-primary/10 text-primary hover:bg-primary/20' : ''}
                      w-full justify-center lg:justify-start hover:bg-sidebar-secondary hover:text-primary
                      transition-colors duration-200 rounded flex items-center
                      gap-2 py-4 px-3`}
                  >
                    {item.icon}
                    <span className="md:hidden lg:inline-block">{t(item.name)}</span>
                  </Button>
                )}
              </Link>
            )
          })}
        </nav>
      </Sidebar.SidebarContent>
    </Sidebar>
  )
}
