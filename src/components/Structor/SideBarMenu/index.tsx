import { ButtonToggleTheme } from '@/components/ButtonToggleTheme'
import { Sidebar } from '@/components/ui/Sidebar/index'
import Logo from '@/assets/images/logo.svg'
import { ItemsMenu } from './constants'
import { NavLink } from 'react-router-dom'

export function AppSidebarMenu() {
  return (
    <Sidebar>
      <Sidebar.SidebarHeader className="flex items-center flex-row justify-between p-4">
        <img src={Logo} alt="Logo" />
        <ButtonToggleTheme />
      </Sidebar.SidebarHeader>
      <Sidebar.SidebarContent className="p-2">
        {ItemsMenu.map((item) => {
          return (
            <NavLink to={item.route} key={item.name}>
              {({ isActive }) => (
                <span
                  className={`${isActive ? 'text-purple-700 bg-purple-100' : ''} rounded flex items-center gap-2 py-4 px-3`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </span>
              )}
            </NavLink>
          )
        })}
      </Sidebar.SidebarContent>
      <Sidebar.SidebarFooter className="p-4">
        <h1>Footer</h1>
      </Sidebar.SidebarFooter>
    </Sidebar>
  )
}
