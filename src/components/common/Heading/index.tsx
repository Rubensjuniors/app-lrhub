import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const headingVariants = cva('font-semibold leading-tight tracking-tight text-foreground', {
  variants: {
    size: {
      h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
      h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
      h3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
      h4: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
      h5: 'text-base sm:text-lg md:text-xl lg:text-2xl',
      h6: 'text-sm sm:text-base md:text-lg lg:text-xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
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
    },
  },
  defaultVariants: {
    size: 'h1',
    weight: 'semibold',
    color: 'default',
    align: 'left',
  },
})

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  color?: 'default' | 'muted' | 'accent' | 'destructive' | 'success' | 'warning'
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, weight, color, align, asChild = false, as = 'h1', ...props }, ref) => {
    const Comp = asChild ? Slot : as
    return (
      <Comp
        className={cn(headingVariants({ size, weight, color, align, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Heading.displayName = 'Heading'

export { Heading, headingVariants }
