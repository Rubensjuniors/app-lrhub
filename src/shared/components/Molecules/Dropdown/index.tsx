import { DropdownMenu } from './dropdown-menu'
import { DropdownMenuCheckboxItem } from './dropdown-menu-checkbox-item'
import { DropdownMenuContent } from './dropdown-menu-content'
import { DropdownMenuGroup } from './dropdown-menu-group'
import { DropdownMenuItem } from './dropdown-menu-item'
import { DropdownMenuLabel } from './dropdown-menu-label'
import { DropdownMenuPortal } from './dropdown-menu-portal'
import { DropdownMenuRadioGroup } from './dropdown-menu-radio-group'
import { DropdownMenuRadioItem } from './dropdown-menu-radio-item'
import { DropdownMenuSeparator } from './dropdown-menu-separator'
import { DropdownMenuShortcut } from './dropdown-menu-shortcut'
import { DropdownMenuSub } from './dropdown-menu-sub'
import { DropdownMenuSubContent } from './dropdown-menu-sub-content'
import { DropdownMenuSubTrigger } from './dropdown-menu-sub-trigger'
import { DropdownMenuTrigger } from './dropdown-menu-trigger'

const Dropdown = Object.assign(DropdownMenu, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  CheckboxItem: DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuRadioGroup,
  RadioItem: DropdownMenuRadioItem,
  Label: DropdownMenuLabel,
  Separator: DropdownMenuSeparator,
  Shortcut: DropdownMenuShortcut,
  Sub: DropdownMenuSub,
  SubTrigger: DropdownMenuSubTrigger,
  SubContent: DropdownMenuSubContent,
  Group: DropdownMenuGroup,
  Portal: DropdownMenuPortal
})

export { Dropdown }

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
}
