import { ChevronUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Button, DropdownMenu } from '@/components/common'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/common/Avatar'
import { useSidebar } from '@/context/SideBarContext'

interface CardProfileProps {
  name: string
  photoUrl: string
  dropdownPosition?: 'right' | 'top' | 'bottom' | 'left'
}

export function CardProfile({ name, photoUrl, dropdownPosition = 'right' }: CardProfileProps) {
  const navigate = useNavigate()
  const { setOpenMobile } = useSidebar()
  const { t } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline" className="py-8 px-2">
          <Avatar>
            <AvatarImage src={photoUrl} />
            <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          {name}
          <ChevronUp className="ml-auto" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content side={dropdownPosition} className="w-[--radix-popper-anchor-width]">
        <DropdownMenu.Item
          onClick={() => {
            navigate('/profile')
            setOpenMobile(false)
          }}
        >
          <span>{t('general.profile')}</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => void 0}>
          <span className="text-red-500">{t('general.out')}</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
