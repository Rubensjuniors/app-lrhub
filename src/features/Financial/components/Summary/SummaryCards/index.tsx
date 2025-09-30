import { cn } from '@/lib/utils'
import { Card, Skeleton } from '@/shared/components/Atoms'
import { Text } from '@/shared/components/Atoms/Text'

import { HiddenMoney } from '../../HiddenValue'

interface SummaryCardProps {
  type: string
  title: string
  value: number
  icon: React.ReactNode
  isLoading: boolean
  negativeTotal: string
}

export function SummaryCard({ type, title, value, icon, isLoading, negativeTotal }: SummaryCardProps) {
  return (
    <Card className="min-w-[200px] flex-1" key={type}>
      <Card.Header className="flex items-center justify-between">
        <Text as="span" size="xs" color="muted" weight="medium">
          {title}
        </Text>
        <span>{icon}</span>
      </Card.Header>
      <Card.Content>
        <Text as="span" size="xl" className={cn(negativeTotal)} weight="bold">
          {isLoading && <Skeleton className="h-6 w-20" />}
          {!isLoading && <HiddenMoney value={value} />}
        </Text>
      </Card.Content>
    </Card>
  )
}
