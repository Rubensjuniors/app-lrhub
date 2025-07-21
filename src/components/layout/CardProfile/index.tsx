import { Camera, LogOut, PencilLine } from 'lucide-react'

import { Button, DropdownMenu } from '@/components/common'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/common/Avatar'
import { Text } from '@/components/common/Text'

interface CardProfileProps {
  name: string
  photoUrl: string
  dropdownPosition?: 'right' | 'top' | 'bottom' | 'left'
}

export function CardProfile({ name, photoUrl, dropdownPosition = 'right' }: CardProfileProps) {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline" className="py-5 px-3">
          <Avatar>
            <AvatarImage src={photoUrl} />
            <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <Text size="xs" weight="semibold">
            {name}
          </Text>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        side={dropdownPosition}
        className="w-[--radix-popper-anchor-width] p-4 flex items-center gap-3 mr-5"
      >
        <div className="flex items-center gap-2">
          <Button size="icon" className="p-6 rounded-full bg-muted cursor-pointer">
            <Camera className="cursor-pointer text-foreground" />
          </Button>
          {name}
        </div>
        <Button size="icon" className="p-4 bg-transparent hover:bg-transparent cursor-pointer">
          <PencilLine className="cursor-pointer text-foreground" />
        </Button>
        <Button size="icon" className="p-4 bg-transparent hover:bg-transparent cursor-pointer">
          <LogOut className="text-red-500 cursor-pointer" />
        </Button>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
