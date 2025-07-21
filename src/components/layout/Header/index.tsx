import { MonthYearPicker } from '@/components/common/MonthYearPick'
import { SidebarTrigger } from '@/components/common/Sidebar/SidebarTrigger'

import { CardProfile } from '../CardProfile'

export function Header() {
  return (
    <header className="sticky left-0 top-0 z-10 px-5 py-5 shadow-md backdrop-blur-xs">
      <div className="flex w-full items-center justify-between md:justify-end">
        <div className="md:hidden">
          <SidebarTrigger />
        </div>

        <div className="flex items-center gap-4">
          <MonthYearPicker />
          <div className="hidden sm:inline">
            <CardProfile
              name="Larissa Vitoria"
              photoUrl="https://github.com/larissacesarr.png"
              dropdownPosition="bottom"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
