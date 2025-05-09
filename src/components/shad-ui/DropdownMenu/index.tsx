import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { DropdownMenuPortal } from './DropdownMenuPortal'
import { DropdownMenuTrigger } from './DropdownMenuTrigger'
import { DropdownMenuContent } from './DropdownMenuContent'
import { DropdownMenuGroup } from './DropdownMenuGroup'
import { DropdownMenuLabel } from './DropdownMenuLabel'
import { DropdownMenuItem } from './DropdownMenuItem'
import { DropdownMenuCheckboxItem } from './DropdownMenuCheckboxItem'
import { DropdownMenuRadioGroup } from './DropdownMenuRadioGroup'
import { DropdownMenuRadioItem } from './DropdownMenuRadioItem'
import { DropdownMenuSeparator } from './DropdownMenuSeparator'
import { DropdownMenuShortcut } from './DropdownMenuShortcut'
import { DropdownMenuSub } from './DropdownMenuSub'
import { DropdownMenuSubTrigger } from './DropdownMenuSubTrigger'
import { DropdownMenuSubContent } from './DropdownMenuSubContent'

function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

DropdownMenu.Portal = DropdownMenuPortal
DropdownMenu.Trigger = DropdownMenuTrigger
DropdownMenu.Content = DropdownMenuContent
DropdownMenu.Group = DropdownMenuGroup
DropdownMenu.Label = DropdownMenuLabel
DropdownMenu.Item = DropdownMenuItem
DropdownMenu.CheckboxItem = DropdownMenuCheckboxItem
DropdownMenu.RadioGroup = DropdownMenuRadioGroup
DropdownMenu.RadioItem = DropdownMenuRadioItem
DropdownMenu.Separator = DropdownMenuSeparator
DropdownMenu.Shortcut = DropdownMenuShortcut
DropdownMenu.Sub = DropdownMenuSub
DropdownMenu.SubTrigger = DropdownMenuSubTrigger
DropdownMenu.SubContent = DropdownMenuSubContent


export { DropdownMenu }
