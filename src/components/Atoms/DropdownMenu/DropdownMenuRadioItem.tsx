import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { CircleIcon } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        [
          'focus:bg-accent focus:text-accent-foreground',
          'relative flex cursor-default items-center gap-2',
          'rounded-sm py-1.5 pr-2 pl-8 text-sm',
          'outline-hidden select-none',
          'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          '[&_svg]:pointer-events-none [&_svg]:shrink-0',
          '[&_svg:not([class*=\'size-\'])]:size-4',
        ].join(' '),
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

export { DropdownMenuRadioItem }
