import { Drawer as DrawerRoot } from './drawer'
import { DrawerClose } from './drawer-close'
import { DrawerContent } from './drawer-content'
import { DrawerDescription } from './drawer-description'
import { DrawerFooter } from './drawer-footer'
import { DrawerHeader } from './drawer-header'
import { DrawerOverlay } from './drawer-overlay'
import { DrawerPortal } from './drawer-portal'
import { DrawerTitle } from './drawer-title'
import { DrawerTrigger } from './drawer-trigger'

const Drawer = Object.assign(DrawerRoot, {
  Trigger: DrawerTrigger,
  Content: DrawerContent,
  Header: DrawerHeader,
  Footer: DrawerFooter,
  Title: DrawerTitle,
  Description: DrawerDescription,
  Close: DrawerClose,
  Overlay: DrawerOverlay,
  Portal: DrawerPortal
})

export { Drawer }

export {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger
}
