import { AvatarImage } from '@radix-ui/react-avatar'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Button, Card } from '@/components/Atoms'
import { Avatar, AvatarFallback } from '@/components/Atoms/Avatar'
import { useAuthContext } from '@/context/AuthContext'
import { cn } from '@/lib/utils'
import { userService } from '@/services/User/request'

const name = 'Larissa Vitoria'

export default function Profile() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { signOut } = useAuthContext()

  useEffect(() => {
    let isMounted = true

    const fetchProfile = async () => {
      try {
        const profile = await userService.getProfile()
        if (isMounted) {
          console.log({ profile }, 'aqui')
        }
      } catch (error) {
        if (isMounted) {
          console.error('Erro ao buscar perfil:', error)
        }
      }
    }

    fetchProfile()

    return () => {
      isMounted = false
    }
  }, [])

  const handleSignOut = () => {
    signOut()
    navigate('/sign-in')
  }

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-svh">
      <Card className={cn('w-[280px] md:w-[380px]')}>
        <Card.Content className="flex flex-col items-center">
          <Avatar className="w-[140px] h-[140px] md:w-[150px] md:h-[150px]">
            <AvatarImage src="https://github.com/larissacesarr.png" alt="@shadcn" />
            <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <strong className="text-3xl mt-3">{name}</strong>
        </Card.Content>
        <Card.Footer>
          <Button variant="destructive" className="w-full" onClick={() => handleSignOut()}>
            {t('general.out')}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}
