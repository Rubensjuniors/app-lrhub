import { Avatar, AvatarFallback } from '@/components/ui/Avatar'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardFooter } from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import { AvatarImage } from '@radix-ui/react-avatar'

const name = 'Larissa Vitoria'

export default function Profile() {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-svh">
      <Card className={cn('w-[280px] md:w-[380px]')}>
        <CardContent className="flex flex-col items-center">
          <Avatar className="w-[140px] h-[140px] md:w-[150px] md:h-[150px]">
            <AvatarImage src="https://github.com/larissacesarr.png" alt="@shadcn" />
            <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <strong className="text-3xl mt-3">{name}</strong>
        </CardContent>
        <CardFooter>
          <Button variant="destructive" className="w-full">
            Sair
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
