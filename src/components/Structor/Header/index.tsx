import { SidebarTrigger } from '@/components/ui/Sidebar/SidebarTrigger'
import Logo from '@/assets/images/logo.svg'

export function Header() {
  return (
    <header className="sticky left-0 top-0 z-10 px-5 py-5 shadow-md backdrop-blur-lg md:hidden">
      <div className="flex w-full items-center justify-between">
        <img src={Logo} alt="Logo" />
        <SidebarTrigger />
      </div>
    </header>
  )
}
