import type { ReactNode } from 'react'

export interface ITabsConfig {
  label: string
  labelMobile?: string
  content: ReactNode | null
  className?: string
  hidden?: {
    width: number,
    className: string
  }
}
