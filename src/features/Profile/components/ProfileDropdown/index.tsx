import { Avatar, Skeleton, Text } from '@/shared/components/Atoms'
import { AvatarFallback, AvatarImage } from '@/shared/components/Atoms/Avatar'
import { Dropdown } from '@/shared/components/Molecules'
import { useAuthContext } from '@/shared/contexts/AuthContext'
import { useUserContext } from '@/shared/contexts/UserContext'

export function ProfileDropdown() {
  const { signOut } = useAuthContext()
  const { user } = useUserContext()
  const { avatar, name, email } = user

  const profile = () => {
    if (!user) {
      return <Skeleton className="rounded-full w-20 h-20" />
    }

    return (
      <Avatar>
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name?.charAt(2)}</AvatarFallback>
      </Avatar>
    )
  }

  return (
    <Dropdown>
      <Dropdown.Trigger className="outline-none cursor-pointer">{profile()}</Dropdown.Trigger>
      <Dropdown.Content className="w-70 md:w-80 mr-4 md:mr-10 mt-8" align="start">
        <div className="p-2 flex items-center gap-3">
          {profile()}
          <div>
            {!user?.name && !user?.email ? (
              <>
                <Skeleton className="w-40 h-4" />
                <Skeleton className="w-30 h-4 mt-1" />
              </>
            ) : (
              <>
                <Text weight="bold" as="p">
                  {name}
                </Text>
                <Text size="xs" className="text-muted-foreground" as="span">
                  {email}
                </Text>
              </>
            )}
          </div>
        </div>
        <Dropdown.Separator />
        <Dropdown.Item className="text-destructive" onClick={() => signOut()}>
          Sair
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  )
}
