import type { LucideIcon } from 'lucide-react'

export enum EMPTY_STATE_TYPE {
  CHART = 'chart',
  GENERAL = 'general'
}

export interface EmptyStateProps {
  type: EMPTY_STATE_TYPE
  onAction?: () => void
}

export interface IEmptyStateContent {
  icon: LucideIcon
  actionLabel?: string
}
