import { AlignJustify, X } from 'lucide-react'

import { useSidebar } from '@/context/SideBarContext'
import { cn } from '@/lib/utils'

import { Button } from '../../Atoms/Button'

type SidebarTriggerProps = React.ComponentProps<typeof Button> & {
  isClose?: boolean
}

export function SidebarTrigger({ className, onClick, isClose, ...props }: SidebarTriggerProps) {
  const { toggleSidebar } = useSidebar()

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
      {isClose ? <X /> : <AlignJustify />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}
