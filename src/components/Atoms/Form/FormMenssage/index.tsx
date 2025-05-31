import { cn } from '@/lib/utils'

interface FormMenssageProps {
  children: React.ReactNode
  className?: string
}

export function FormMenssage({ children, className }: FormMenssageProps) {
  return <small className={cn('text-destructive text-sm font-medium', className)}>{children}</small>
}
