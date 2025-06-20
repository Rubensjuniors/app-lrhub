import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ChevronRightIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        [
          'focus:bg-accent focus:text-accent-foreground',
          'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
          'flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none',
          'data-[inset]:pl-8'
        ].join(' '),
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

export { DropdownMenuSubTrigger }
