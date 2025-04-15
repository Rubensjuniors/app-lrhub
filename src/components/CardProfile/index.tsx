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

interface CardProfileProps {
  name: string
  photoUrl: string
  dropdownPosition?: 'right' | 'top' | 'bottom' | 'left'
}

export function CardProfile({ name, photoUrl, dropdownPosition = 'right' }: CardProfileProps) {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const { setOpenMobile } = useSidebar()

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
          <span>Perfil</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => logout()}>
          <span className="text-red-500">Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
