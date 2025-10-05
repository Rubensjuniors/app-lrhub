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
}

export function SummaryCard({ type, title, value, icon, isLoading }: SummaryCardProps) {
  const getIconColorClasses = () => {
    switch (type) {
      case 'income':
        return 'text-success bg-success/10'
      case 'exits':
        return 'text-danger bg-danger/10'
      case 'total':
        return 'text-white bg-white/10'
      default:
        return 'text-muted-foreground bg-muted'
    }
  }

  const getColorClasses = () => {
    switch (type) {
      case 'income':
        return 'text-success'
      case 'exits':
        return 'text-danger'
      case 'total':
        return value >= 0 ? 'text-success' : 'text-danger'
      default:
        return 'text-foreground'
    }
  }

  return (
    <Card className="min-w-[200px] flex-1" key={type}>
      <Card.Header className="flex items-center justify-between">
        <Text as="span" size="sm" color="muted" weight="medium">
          {title}
        </Text>
        <div className={cn('p-2 rounded-lg', getIconColorClasses())}>{icon}</div>
      </Card.Header>
      <Card.Content>
        <Text as="span" size="xl" className={cn(getColorClasses())} weight="bold">
          {isLoading && <Skeleton className="h-6 w-20" />}
          {!isLoading && <HiddenMoney value={value} />}
        </Text>
      </Card.Content>
    </Card>
  )
}
