import { Button } from '@/components/shad-ui/Button'
import { DropdownMenu } from '@/components/shad-ui/DropdownMenu'
import { EllipsisVertical } from 'lucide-react'

export const ActionsCell = () => {
  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <EllipsisVertical />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Item>Editar</DropdownMenu.Item>
          <DropdownMenu.Item className="text-red-500">Excluir</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  )
}
