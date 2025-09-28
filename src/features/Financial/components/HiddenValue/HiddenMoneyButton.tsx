import { Button } from '@/shared/components/Atoms'
import { Eye, EyeOff } from 'lucide-react'
import { useHiddenMoneyToggle } from '../../contexts/HiddenMoneyToggleContext'
import { cn } from '@/lib/utils'

export function HiddenMoneyButton({ className }: { className?: string }) {
  const { isVisible, toggleVisibility } = useHiddenMoneyToggle()
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleVisibility}
      className={cn('h-10 w-10 text-muted-foreground hover:text-foreground transition-colors', className)}
    >
      {isVisible ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
    </Button>
  )
}
