import { useTranslation } from 'react-i18next'

import { useHiddenMoneyToggle } from '../../contexts/HiddenMoneyToggleContext'
import { useSummaryQuery } from '../../services/Summary/useSummaryQuery'
import { HiddenMoneyButton } from '../HiddenValue/HiddenMoneyButton'
import { getSummaryItems } from './contants'
import { IncomeExpenseSummary } from './IncomeExpenseSummary'
import { SummaryCard } from './SummaryCards'
import { TotalOverview } from './TotalOverview'

export function Summary() {
  const { t } = useTranslation()
  const { data: summary, isLoading } = useSummaryQuery()
  const { isVisible } = useHiddenMoneyToggle()

  const summaryItems = getSummaryItems(summary ?? { entries: 0, exits: 0, total: 0 }, t)

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 sm:hidden">
        <TotalOverview balance={summary?.total ?? 0} isLoading={isLoading} />
        <IncomeExpenseSummary
          income={summary?.entries ?? 0}
          expenses={summary?.exits ?? 0}
          isLoading={isLoading}
        />
      </div>

      <div className="hidden sm:flex flex-col w-full">
        {!isLoading && <HiddenMoneyButton className="mb-1" />}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {summaryItems.map((item) => {
            const negativeTotal =
              item.value <= 0 && item.type === 'total' && isVisible ? 'text-red-500' : 'text-foreground'
            return (
              <SummaryCard
                key={item.type}
                type={item.type}
                title={item.title}
                value={item.value}
                icon={item.icon}
                negativeTotal={negativeTotal}
                isLoading={isLoading}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
