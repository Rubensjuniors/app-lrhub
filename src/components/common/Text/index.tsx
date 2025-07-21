import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const textVariants = cva('leading-relaxed text-foreground', {
  variants: {
    size: {
      xs: 'text-xs sm:text-sm md:text-base',
      sm: 'text-sm sm:text-base md:text-lg',
      base: 'text-base sm:text-lg md:text-xl',
      lg: 'text-lg sm:text-xl md:text-2xl',
      xl: 'text-xl sm:text-2xl md:text-3xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      accent: 'text-accent-foreground',
      destructive: 'text-destructive',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    color: 'default',
    align: 'left',
  },
})

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof textVariants> {
  asChild?: boolean
  as?: 'p' | 'span'
  color?: 'default' | 'muted' | 'accent' | 'destructive' | 'success' | 'warning'
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, size, weight, color, align, asChild = false, as = 'p', ...props }, ref) => {
    const Comp = asChild ? Slot : as
    return (
      <Comp
        className={cn(textVariants({ size, weight, color, align, className }))}
        ref={ref as React.Ref<HTMLParagraphElement>}
        {...props}
      />
    )
  },
)
Text.displayName = 'Text'

export { Text, textVariants }
