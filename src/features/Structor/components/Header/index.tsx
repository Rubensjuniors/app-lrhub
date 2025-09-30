import { Link } from '@tanstack/react-router'

import { SidebarTrigger } from '@/shared/components/Atoms/Sidebar/SidebarTrigger'

export function Header() {
  return (
    <header className="sticky left-0 top-0 z-10 px-5 py-5 shadow-md backdrop-blur-lg md:hidden">
      <div className="flex w-full items-center justify-between">
        <SidebarTrigger />
        <Link to="/">
          <img src="/icons/logo.svg" alt="Logo" />
        </Link>
      </div>
    </header>
  )
}
