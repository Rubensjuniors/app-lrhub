import { Trans, useTranslation } from 'react-i18next'

import { SwitcherCalendar } from '@/components/Molecules'
import { CurrencyCard, CurrencyCardProps } from '@/modules/app/Financial/components/CurrencyCard'
import { ExpenseTabs } from '@/modules/app/Financial/components/ExpenseTabs'

const name = 'larissa Vitoria'

const currencyCards: CurrencyCardProps[] = [
  { type: 'entries', value: 1000 },
  { type: 'exits', value: 500 },
  { type: 'leftovers', value: 500 },
]

export default function Financial() {
  const { t } = useTranslation()

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
                <CurrencyCard type={item.type} value={item.value} />
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
