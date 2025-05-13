import { CurrencyCard, CurrencyCardType } from '@/components/CurrencyCard'
import { SwitcherCalendar } from '@/components/SwitcherCalendar'
import { ExpenseTabs } from './components/ExpenseTabs'
import { Trans, useTranslation } from 'react-i18next'
import { useGetBalance } from '@/api/queries/useGetBalance'

const name = 'larissa Vitoria'

export default function Financial() {
  const { t } = useTranslation()

  const { data: balance, isLoading } = useGetBalance()
  const currencyCards = [
    { type: CurrencyCardType.entries, value: balance?.entry || 0 },
    { type: CurrencyCardType.exits, value: balance?.exits || 0 },
    { type: CurrencyCardType.leftovers, value: balance?.total || 0 },
  ]

  return (
    <div className="w-full p-5 xl:px-15">
      <header className="gap-4 flex items-center justify-center sm:justify-between flex-col sm:flex-row">
        <div className="flex items-start flex-col">
          <h1 className="text-2xl font-bold">
            <Trans i18nKey="init.title" values={{ name }} />
          </h1>
          <small>{t('init.description')}</small>
        </div>

        <SwitcherCalendar />
      </header>

      <div className="mt-5">
        <div className="flex items-center gap-4 flex-wrap">
          {currencyCards.map((item) => {
            return (
              <div className="flex-1" key={item.type}>
                <CurrencyCard type={item.type} value={item.value} isLoading={isLoading} />
              </div>
            )
          })}
        </div>
        <div className="mt-3">
          <ExpenseTabs />
        </div>
      </div>
    </div>
  )
}
