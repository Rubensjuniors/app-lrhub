import * as SheetPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'

import { SheetClose } from './SheetClose'
import { SheetContent } from './SheetContent'
import { SheetDescription } from './SheetDescription'
import { SheetFooter } from './SheetFooter'
import { SheetHeader } from './SheetHeader'
import { SheetOverlay } from './SheetOverlay'
import { SheetPortal } from './SheetPortal'
import { SheetTitle } from './SheetTitle'
import { SheetTrigger } from './SheetTrigger'


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
