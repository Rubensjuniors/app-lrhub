import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/shared/components/ui/select'
import { changeLanguage, getCurrentLanguage } from '@/shared/utils/languageUtils'

export function LanguageSelect() {
  return (
    <Select onValueChange={(event) => changeLanguage(event)} defaultValue={getCurrentLanguage()}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Lang" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="pt-BR">Portugues</SelectItem>
          <SelectItem value="en">Ingles</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
