import type { TFunction } from 'i18next'
import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react'

import type { ISummary } from '../../services/Summary/types'

export const getSummaryItems = (summary: ISummary, t: TFunction<'translation', undefined>) => {
  return [
    {
      type: 'income',
      title: t('financial.summary.entries'),
      value: summary?.entries ?? 0,
      icon: <TrendingUp className="h-5 w-5" color="green" />
    },
    {
      type: 'exits',
      title: t('financial.summary.exits'),
      value: summary?.exits ?? 0,
      icon: <TrendingDown className="h-5 w-5" color="red" />
    },
    {
      type: 'total',
      title: t('financial.summary.total'),
      value: summary?.total ?? 0,
      icon: <DollarSign />
    }
  ]
}
