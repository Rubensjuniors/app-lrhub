import { Button } from '@/components/ui/Button'
import { ThemeProvider } from '@/context/ThemeContext'

export function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Click me</Button>
      </div>
    </ThemeProvider>
  )
}
