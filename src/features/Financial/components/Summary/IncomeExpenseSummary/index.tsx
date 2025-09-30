import { TrendingDown, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'
import { Card, Skeleton } from '@/shared/components/Atoms'
import { CardContent } from '@/shared/components/Atoms/Card/CardContent'
import { Text } from '@/shared/components/Atoms/Text'

import { HiddenMoney } from '../../HiddenValue'

interface IncomeExpenseSummaryProps {
  income: number
  expenses: number
  className?: string
  isLoading: boolean
}

export function IncomeExpenseSummary({ income, expenses, className, isLoading }: IncomeExpenseSummaryProps) {
  const { t } = useTranslation()

  return (
    <div className={cn('flex items-center flex-wrap gap-4 w-full', className)}>
      <Card className="flex-1 p-0">
        <Card.Content className="px-2 py-3">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-income/20 rounded-full">
              <TrendingUp className="h-5 w-5" color="green" />
            </div>
            <div className="flex-1 min-w-0">
              <Text as="span" size="xs" color="muted" weight="medium">
                {t('financial.summary.entries')}
              </Text>
              {isLoading && <Skeleton className="h-6 w-20" />}
              {!isLoading && <HiddenMoney value={income} classNames="text-lg font-bold truncate" />}
            </div>
          </div>
        </Card.Content>
      </Card>

      <Card className="flex-1 p-0">
        <CardContent className="px-2 py-3">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-expense/20 rounded-full">
              <TrendingDown className="h-5 w-5" color="red" />
            </div>
            <div className="flex-1 min-w-0">
              <Text as="span" size="xs" color="muted" weight="medium">
                {t('financial.summary.exits')}
              </Text>
              {isLoading && <Skeleton className="h-6 w-20" />}
              {!isLoading && <HiddenMoney value={expenses} classNames="text-lg font-bold truncate" />}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
