import { Select } from './select'
import { SelectContent } from './select-content'
import { SelectGroup } from './select-group'
import { SelectItem } from './select-item'
import { SelectLabel } from './select-label'
import { SelectScrollDownButton } from './select-scroll-down-button'
import { SelectScrollUpButton } from './select-scroll-up-button'
import { SelectSeparator } from './select-separator'
import { SelectTrigger } from './select-trigger'
import { SelectValue } from './select-value'

const SelectComponent = Object.assign(Select, {
  Group: SelectGroup,
  Value: SelectValue,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
  ScrollUpButton: SelectScrollUpButton,
  ScrollDownButton: SelectScrollDownButton
})

export { SelectComponent as Select }

export {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  Select as SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue
}
