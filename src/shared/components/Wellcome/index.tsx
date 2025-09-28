import { useUserContext } from '@/shared/contexts/UserContext'
import { Skeleton } from '../Atoms'
import { Trans, useTranslation } from 'react-i18next'
import { Heading } from '../Atoms/Heading'

export function Wellcome({ classNames }: { hasDescription?: boolean; classNames?: string }) {
  const { t } = useTranslation()
  const {
    user: { name },
    isUserLoading,
  } = useUserContext()

  return (
    <div className={`flex items-start flex-col ${classNames}`}>
      <h1 className="text-2xl font-bold">
        {isUserLoading ? (
          <Skeleton className="w-[250px] h-[30px]" />
        ) : (
          <Heading as="h3" level="h3">
            <Trans i18nKey="init.title" values={{ name }} />
          </Heading>
        )}
      </h1>

      {isUserLoading ? (
        <Skeleton className="w-[150px] h-[20px] mt-2" />
      ) : (
        <small>{t('init.description')}</small>
      )}
    </div>
  )
}
