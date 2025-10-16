import { useTranslation } from 'react-i18next'

import { ExpensesChart } from '@/features/Hub/components/ExpensesChart'
import { Tabs } from '@/shared/components/Atoms'

export default function Hub() {
  const { t } = useTranslation()
  return (
    <Tabs defaultValue="summary" className="mb-8">
      <Tabs.List>
        <Tabs.Trigger value="summary">
          <span>{t('hub.tabs.summary')}</span>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="summary">
        <ExpensesChart />
      </Tabs.Content>
    </Tabs>
  )
}
