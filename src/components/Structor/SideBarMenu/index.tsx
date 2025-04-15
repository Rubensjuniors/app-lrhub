import { ButtonToggleTheme } from '@/components/ButtonToggleTheme'
import { Sidebar } from '@/components/ui/Sidebar/index'
import Logo from '@/assets/images/logo.svg'
import { ItemsMenu } from './constants'
import { NavLink } from 'react-router-dom'
import { CardProfile } from '@/components/CardProfile'

export function AppSidebarMenu() {
  return (
    <Sidebar>
      <Sidebar.SidebarHeader className="flex items-center flex-row justify-between p-4">
        <img src={Logo} alt="Logo" />
        <ButtonToggleTheme />
      </Sidebar.SidebarHeader>
      <Sidebar.SidebarContent className="p-2">
        <nav className="flex flex-col gap-2">
          {ItemsMenu.map((item) => {
            return (
              <NavLink to={item.route} key={item.name}>
                {({ isActive }) => (
                  <div
                    className={`
                      ${isActive ? 'text-primary bg-sidebar-secondary' : ''}
                      hover:bg-accent rounded flex items-center gap-2 py-4 px-3`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                )}
              </NavLink>
            )
          })}
        </nav>
      </Sidebar.SidebarContent>
      <Sidebar.SidebarFooter className="p-4">
        <CardProfile name="Rubens Junio" photoUrl="https://github.com/rubensjuniors.png" />
      </Sidebar.SidebarFooter>
    </Sidebar>
  )
}
