import { cn } from '@/lib/utils'
import { useHiddenMoneyToggle } from '../../contexts/HiddenMoneyToggleContext'
import { formatCurrency } from '@/shared/utils/money';

export function HiddenMoney({ value, classNames }: { value: number; classNames?: string }) {
  const { isVisible } = useHiddenMoneyToggle()

  return <p className={cn(classNames)}>{isVisible ? formatCurrency(value) : '••••••••••'}</p>
}
