import type { ITabsConfig } from '@/shared/types/tabs-types'

import { ExpensesChart } from '../ExpensesChart'

export const hubTabsConfig: Record<string, ITabsConfig> = {
  summary: {
    label: 'hub.tabs.summary',
    content: <ExpensesChart />
  }
}
