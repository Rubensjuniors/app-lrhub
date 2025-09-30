import { Moon, Sun } from 'lucide-react'
import { useMemo } from 'react'

import { cn } from '@/lib/utils'
import { useTheme } from '@/shared/contexts/ThemeContext'

import { Button } from '../../Atoms'

export function ButtonToggleTheme({ className }: React.HTMLAttributes<HTMLButtonElement>) {
  const { setTheme, theme } = useTheme()

  const currentThem = useMemo(() => (theme === 'dark' ? 'light' : 'dark'), [theme])

  return (
    <Button className={cn(className)} variant="outline" size="icon" onClick={() => setTheme(currentThem)}>
      <Sun
        data-testid="sun-icon"
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        data-testid="moon-icon"
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
    </Button>
  )
}
