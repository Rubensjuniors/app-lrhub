import * as SheetPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'

function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

export { SheetClose }
