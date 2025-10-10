import { Select } from '@/shared/components/Atoms/Select'
import { changeLanguage, getCurrentLanguage } from '@/shared/utils/languageUtils'

export function LanguageSelect() {
  return (
    <Select onValueChange={(event) => changeLanguage(event)} defaultValue={getCurrentLanguage()}>
      <Select.Trigger className="w-[180px]">
        <Select.Value placeholder="Select a Lang" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Item value="pt-BR">Portugues</Select.Item>
          <Select.Item value="en">Ingles</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
  )
}
