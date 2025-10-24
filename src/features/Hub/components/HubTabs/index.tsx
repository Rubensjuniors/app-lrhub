import type { ITabsConfig } from '@/shared/types/tabs-types'

import { ExpensesChart } from '../ExpensesChart'
import { Income } from '../Income'

export const hubTabsConfig: Record<string, ITabsConfig> = {
  summary: {
    label: 'hub.tabs.summary',
    content: <ExpensesChart />
  },
  income: {
    label: 'hub.tabs.income',
    content: <Income />,
    hidden: {
      width: 1024,
      className: 'lg:hidden'
    }
  }
}
