import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

function DrawerTrigger({ ...props }: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

export { DrawerTrigger }
