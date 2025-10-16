import { FileQuestion, TrendingUp } from 'lucide-react'

import { EMPTY_STATE_TYPE, type IEmptyStateContent } from '@/shared/components/Molecules/EmptyState/types.ts'

export const emptyStateContent: Record<EMPTY_STATE_TYPE, IEmptyStateContent> = {
  chart: {
    icon: TrendingUp
  },
  general: {
    icon: FileQuestion
  }
}
