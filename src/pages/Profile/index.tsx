import { Avatar, AvatarFallback } from '@/components/Atoms/Avatar'
import { Button, Card } from '@/components/Atoms'
import { cn } from '@/lib/utils'
import { AvatarImage } from '@radix-ui/react-avatar'
import { useTranslation } from 'react-i18next'

const name = 'Larissa Vitoria'

export default function Profile() {
  const { t } = useTranslation()

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
          <Button variant="destructive" className="w-full">
            {t('general.out')}
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}
