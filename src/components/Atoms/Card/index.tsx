import * as React from 'react'
import { cn } from '@/lib/utils'
import { CardHeader } from './CardHeader'
import { CardFooter } from './CardFooter'
import { CardContent } from './CardContent'
import { CardTitle } from './CardTitle'
import { CardDescription } from './CardDescription'
import { CardAction } from './CardAction'


function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
        className,
      )}
      {...props}
    />
  )
}

Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Action = CardAction
Card.Content = CardContent
Card.Footer = CardFooter

export { Card }
