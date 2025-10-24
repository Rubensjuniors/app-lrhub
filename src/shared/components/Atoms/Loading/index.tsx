import { cn } from '@/lib/utils'

import type { LoadingProps } from './types'

const Loading = ({
  variant = 'inline',
  size = 'md',
  className
}: LoadingProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }

  const containerClasses = {
    fullscreen: 'fixed inset-0 z-50 flex flex-col items-center justify-center bg-background',
    overlay: 'fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm',
    inline: 'flex flex-col items-center justify-center'
  }

  return (
    <div className={cn(containerClasses[variant], className)}>
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 animate-spin opacity-30" style={{ animationDuration: '3s' }}>
          <div className={cn(
            sizeClasses[size],
            'mx-auto rounded-full bg-gradient-to-r from-primary via-accent to-primary blur-2xl'
          )} />
        </div>

        <div className={cn(
          sizeClasses[size],
          'relative animate-pulse flex justify-center items-center'
        )}
        style={{ animationDuration: '2s' }}
        >
          <img src='/icons/logo.svg' alt='logo' className={cn(sizeClasses[size])} />
        </div>
      </div>
    </div>
  )
}

export default Loading
