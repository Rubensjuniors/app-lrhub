import { Heading } from '@/components/common/Heading'
import { SidebarTrigger } from '@/components/common/Sidebar/SidebarTrigger'

import { CardProfile } from '../CardProfile'

export function Header() {
  return (
    <header className="sticky left-0 top-0 z-10 px-5 py-5 shadow-md backdrop-blur-xs">
      <div className="flex w-full items-center justify-between">
        <div className="md:hidden">
          <SidebarTrigger />
        </div>

        <Heading size="h4" className="hidden md:inline">
          Ola, Larissa Vitoria
        </Heading>

        <CardProfile
          name="Larissa Vitoria"
          photoUrl="https://github.com/larissacesarr.png"
          dropdownPosition="bottom"
        />
      </div>
    </header>
  )
}
