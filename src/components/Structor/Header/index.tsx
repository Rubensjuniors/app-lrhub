import { SidebarTrigger } from '@/components/shad-ui/Sidebar/SidebarTrigger'
import Logo from '@/assets/images/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="sticky left-0 top-0 z-10 px-5 py-5 shadow-md backdrop-blur-lg md:hidden">
      <div className="flex w-full items-center justify-between">
        <SidebarTrigger />
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
    </header>
  )
}
