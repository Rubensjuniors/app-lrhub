import * as SheetPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'

import { cn } from '@/lib/utils'

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export { SheetDescription }
