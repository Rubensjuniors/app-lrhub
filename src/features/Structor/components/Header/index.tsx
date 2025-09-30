import { Link } from '@tanstack/react-router'

import { SidebarTrigger } from '@/shared/components/Atoms/Sidebar/SidebarTrigger'

import { SwitcherCalendar } from '../SwitcherCalendar'

export function Header() {
  return (
    <header className="sticky left-0 top-0 z-10 px-5 py-5 bg-sidebar shadow-lg">
      <div className="flex w-full items-center justify-between">
        <SidebarTrigger />

        <SwitcherCalendar className="hidden md:flex" />

        <Link to="/" className="md:hidden">
          <img src="/icons/logo.svg" alt="Logo" />
        </Link>
      </div>
    </header>
  )
}
