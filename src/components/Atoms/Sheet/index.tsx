import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { SheetContent } from './SheetContent'
import { SheetTrigger } from './SheetTrigger'
import { SheetDescription } from './SheetDescription'
import { SheetTitle } from './SheetTitle'
import { SheetClose } from './SheetClose'
import { SheetPortal } from './SheetPortal'
import { SheetOverlay } from './SheetOverlay'
import { SheetHeader } from './SheetHeader'
import { SheetFooter } from './SheetFooter'


function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

Sheet.Content = SheetContent
Sheet.Trigger = SheetTrigger
Sheet.Description = SheetDescription
Sheet.Title = SheetTitle
Sheet.Close = SheetClose
Sheet.Portal = SheetPortal
Sheet.Overlay = SheetOverlay
Sheet.Header = SheetHeader
Sheet.Footer = SheetFooter

export { Sheet }
