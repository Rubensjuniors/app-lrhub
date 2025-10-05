import { cn } from '@/lib/utils'
import { formatCurrency } from '@/shared/utils/money'

import { useHiddenMoneyToggle } from '../../contexts/HiddenMoneyToggleContext'

export function HiddenMoney({ value, classNames }: { value: number; classNames?: string }) {
  const { isVisible } = useHiddenMoneyToggle()

  return <p className={cn(classNames, `${isVisible ? '' : 'text-muted-foreground' }`)}>{isVisible ? formatCurrency(value) : '••••••••••'}</p>
}
