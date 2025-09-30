import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import * as React from 'react'

import { DropdownMenuCheckboxItem } from './DropdownMenuCheckboxItem'
import { DropdownMenuContent } from './DropdownMenuContent'
import { DropdownMenuGroup } from './DropdownMenuGroup'
import { DropdownMenuItem } from './DropdownMenuItem'
import { DropdownMenuLabel } from './DropdownMenuLabel'
import { DropdownMenuPortal } from './DropdownMenuPortal'
import { DropdownMenuRadioGroup } from './DropdownMenuRadioGroup'
import { DropdownMenuRadioItem } from './DropdownMenuRadioItem'
import { DropdownMenuSeparator } from './DropdownMenuSeparator'
import { DropdownMenuShortcut } from './DropdownMenuShortcut'
import { DropdownMenuSub } from './DropdownMenuSub'
import { DropdownMenuSubContent } from './DropdownMenuSubContent'
import { DropdownMenuSubTrigger } from './DropdownMenuSubTrigger'
import { DropdownMenuTrigger } from './DropdownMenuTrigger'

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
