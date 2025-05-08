import { Button } from '@/components/ui/Button'
import { ChevronUp } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/DropdownMenu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { useSidebar } from '@/context/SideBarContext'
import { useTranslation } from 'react-i18next'
interface CardProfileProps {
  name: string
  photoUrl: string
  dropdownPosition?: 'right' | 'top' | 'bottom' | 'left'
}

export function CardProfile({ name, photoUrl, dropdownPosition = 'right' }: CardProfileProps) {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const { setOpenMobile } = useSidebar()
  const { t } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="py-8 px-2">
          <Avatar>
            <AvatarImage src={photoUrl} />
            <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          {name}
          <ChevronUp className="ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side={dropdownPosition} className="w-[--radix-popper-anchor-width]">
        <DropdownMenuItem
          onClick={() => {
            navigate('/profile')
            setOpenMobile(false)
          }}
        >
          <span>{t('general.profile')}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => logout()}>
          <span className="text-red-500">{t('general.out')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
