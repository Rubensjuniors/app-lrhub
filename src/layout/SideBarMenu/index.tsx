import { ButtonToggleTheme } from '@/components/Molecules'
import { Sidebar } from '@/components/Atoms'
import Logo from '@/assets/images/logo.svg'
import { ItemsMenu } from './constants'
import { Link, NavLink } from 'react-router-dom'
import { CardProfile } from '@/modules/Profile/components/CardProfile'
import { useSidebar } from '@/context/SideBarContext'
import { useTranslation } from 'react-i18next'

export function AppSidebarMenu() {
  const { setOpenMobile, isMobile } = useSidebar()
  const { t } = useTranslation()

  return (
    <Sidebar>
      <Sidebar.SidebarHeader className="flex items-center flex-row justify-between p-4">
        <Link to="/" className="hidden md:block">
          <img src={Logo} alt="Logo" />
        </Link>

        <ButtonToggleTheme />
        <Sidebar.SidebarTrigger className="md:hidden ml-3" isClose />
      </Sidebar.SidebarHeader>
      <Sidebar.SidebarContent className="p-2">
        <nav className="flex flex-col gap-2">
          {ItemsMenu.map((item) => {
            return (
              <NavLink to={item.route} key={item.name} onClick={() => setOpenMobile(false)}>
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
              </NavLink>
            )
          })}
        </nav>
      </Sidebar.SidebarContent>
      <Sidebar.SidebarFooter className="p-4">
        <CardProfile
          name="Larissa Vitoria"
          photoUrl="https://github.com/larissacesarr.png"
          dropdownPosition={isMobile ? 'top' : 'right'}
        />
      </Sidebar.SidebarFooter>
    </Sidebar>
  )
}
