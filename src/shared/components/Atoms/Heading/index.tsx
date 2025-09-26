import * as React from 'react'

import { cn } from '@/lib/utils'

// Level variants
const levelVariants = {
  h1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
  h2: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
  h3: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
  h4: 'text-base sm:text-lg md:text-xl lg:text-2xl',
  h5: 'text-sm sm:text-base md:text-lg lg:text-xl',
  h6: 'text-xs sm:text-sm md:text-base lg:text-lg',
} as const

// Weight variants
const weightVariants = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
} as const

// Color variants
const colorVariants = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary-foreground',
  destructive: 'text-destructive',
  accent: 'text-accent-foreground',
} as const

// Align variants
const alignVariants = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
} as const

export interface HeadingProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'> {
  level?: keyof typeof levelVariants
  weight?: keyof typeof weightVariants
  color?: keyof typeof colorVariants
  align?: keyof typeof alignVariants
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { className, level = 'h1', weight = 'semibold', color = 'default', align = 'left', as, ...props },
    ref,
  ) => {
    const Component = as || level || 'h1'

    const classes = cn(
      'text-foreground font-semibold tracking-tight',
      levelVariants[level],
      weightVariants[weight],
      colorVariants[color],
      alignVariants[align],
      className,
    )

    return <Component ref={ref} className={classes} {...props} />
  },
)

Heading.displayName = 'Heading'

export { Heading }
