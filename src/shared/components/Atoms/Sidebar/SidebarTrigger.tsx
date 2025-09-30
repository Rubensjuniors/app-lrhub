import { AlignJustify, ArrowLeftToLine, ArrowRightToLine, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useSidebar } from '@/shared/contexts/SideBarContext'

import { Button } from '../Button'

type SidebarTriggerProps = React.ComponentProps<typeof Button> & {
  isClose?: boolean
}

export function SidebarTrigger({ className, onClick, isClose, ...props }: SidebarTriggerProps) {
  const { toggleSidebar, open } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn('size-7', className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <span className="md:hidden">{isClose ? <X /> : <AlignJustify />}</span>
      <span className="hidden md:inline-block">{open ? <ArrowLeftToLine /> : <ArrowRightToLine />}</span>
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
