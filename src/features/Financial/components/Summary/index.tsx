import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'
import { Card, Skeleton } from '@/shared/components/Atoms'
import { Text } from '@/shared/components/Atoms/Text'

import { useHiddenMoneyToggle } from '../../contexts/HiddenMoneyToggleContext'
import { useSummaryQuery } from '../../services/Summary/useSummaryQuery'
import { HiddenMoney } from '../HiddenValue'
import { HiddenMoneyButton } from '../HiddenValue/HiddenMoneyButton'
import { IncomeExpenseSummary } from './IncomeExpenseSummary'
import { TotalOverview } from './TotalOverview'

export function Summary() {
  const { t } = useTranslation()
  const { data: summary, isLoading } = useSummaryQuery()
  const { isVisible } = useHiddenMoneyToggle()

  const summaryItems = [
    {
      type: 'income',
      title: t('financial.summary.entries'),
      value: summary?.entries ?? 0,
      icon: <TrendingUp className="h-5 w-5" color="green" />
    },
    {
      type: 'exits',
      title: t('financial.summary.exits'),
      value: summary?.exits ?? 0,
      icon: <TrendingDown className="h-5 w-5" color="red" />
    },
    {
      type: 'total',
      title: t('financial.summary.total'),
      value: summary?.total ?? 0,
      icon: <DollarSign />
    }
  ]

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
              <Card className="min-w-[200px] flex-1" key={item.type}>
                <Card.Header className="flex items-center justify-between">
                  <Text as="span" size="xs" color="muted" weight="medium">
                    {item.title}
                  </Text>
                  <span>{item.icon}</span>
                </Card.Header>
                <Card.Content>
                  <Text as="span" size="xl" className={cn(negativeTotal)} weight="bold">
                    {isLoading && <Skeleton className="h-6 w-20" />}
                    {!isLoading && <HiddenMoney value={item.value} />}
                  </Text>
                </Card.Content>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}
