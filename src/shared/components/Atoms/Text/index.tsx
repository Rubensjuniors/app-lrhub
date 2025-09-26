import * as React from 'react'

import { cn } from '@/lib/utils'

// Size variants
const sizeVariants = {
  xs: 'text-xs sm:text-sm',
  sm: 'text-sm sm:text-base',
  base: 'text-base sm:text-lg',
  lg: 'text-lg sm:text-xl',
  xl: 'text-xl sm:text-2xl',
} as const

// Weight variants
const weightVariants = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
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
  justify: 'text-justify',
} as const

export interface TextProps extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'> {
  size?: keyof typeof sizeVariants
  weight?: keyof typeof weightVariants
  color?: keyof typeof colorVariants
  align?: keyof typeof alignVariants
  as?: 'p' | 'span' | 'div'
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      className,
      size = 'base',
      weight = 'normal',
      color = 'default',
      align = 'left',
      as: Component = 'p',
      ...props
    },
    ref,
  ) => {
    const classes = cn(
      'text-foreground',
      sizeVariants[size],
      weightVariants[weight],
      colorVariants[color],
      alignVariants[align],
      className,
    )

    return <Component ref={ref} className={classes} {...props} />
  },
)

Text.displayName = 'Text'

export { Text }
