import { ExpenseTabs } from '@/features/Financial/components/ExpenseTabs'
import { Summary } from '@/features/Financial/components/Summary'
import { Skeleton } from '@/shared/components/Atoms'
import { SwitcherCalendar } from '@/shared/components/Molecules'
import { useUserContext } from '@/shared/contexts/UserContext'
import { Trans, useTranslation } from 'react-i18next'

export default function Financial() {
  const { t } = useTranslation()
  const { user: { name }, isUserLoading } = useUserContext()

  return (
    <div className="w-full p-5 xl:px-15">
      <header className="gap-4 flex items-center justify-center sm:justify-between flex-col sm:flex-row">
        <div className="flex items-start flex-col">
          <h1 className="text-2xl font-bold">
            {isUserLoading ? <Skeleton className="w-[250px] h-[30px]" /> : <Trans i18nKey="init.title" values={{ name }} />}
          </h1>

          {isUserLoading ? <Skeleton className="w-[150px] h-[20px] mt-2" /> : <small>{t('init.description')}</small>}
        </div>

        <SwitcherCalendar />
      </header>

      <div className="mt-5">
        <Summary />
        <div className="mt-3">
          <ExpenseTabs />
        </div>
      </div>
    </div>
  )
}
