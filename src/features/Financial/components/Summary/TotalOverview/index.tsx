import { useHiddenMoneyToggle } from '@/features/Financial/contexts/HiddenMoneyToggleContext'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/shared/components/Atoms'
import { Heading } from '@/shared/components/Atoms/Heading'
import { Text } from '@/shared/components/Atoms/Text'
import { useTranslation } from 'react-i18next'
import { HiddenMoney } from '../../HiddenValue'
import { HiddenMoneyButton } from '../../HiddenValue/HiddenMoneyButton'

interface BalanceOverviewProps {
  balance: number
  className?: string
  isLoading: boolean
}

export function TotalOverview({ balance, className, isLoading }: BalanceOverviewProps) {
  const { t } = useTranslation()
  const { isVisible } = useHiddenMoneyToggle()

  return (
    <div className={cn('mb-1 p-0', className)}>
      <div className="p-0 text-center space-y-4">
        <div className="space-y-2">
          <Text as="span" size="sm" color="muted" weight="medium">
            {t('financial.summary.total')}
          </Text>

          <div className="flex items-center justify-center space-x-3">
            {isLoading && <Skeleton className="h-8 w-32" />}
            {!isLoading && (
              <>
                <Heading
                  as="h2"
                  weight="bold"
                  className={cn('text-3xl', balance <= 0 && isVisible ? 'text-red-500' : 'text-foreground')}
                >
                  <HiddenMoney value={balance} />
                </Heading>
                <HiddenMoneyButton />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
