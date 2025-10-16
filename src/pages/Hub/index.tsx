import { ExpensesChart } from '@/features/Hub/components/ExpensesChart'
import { Tabs } from '@/shared/components/Atoms'

export default function Hub() {
  return (
    <Tabs defaultValue="summary" className="mb-8">
      <Tabs.List>
        <Tabs.Trigger value="summary">
          <span>Summary</span>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="summary">
        <ExpensesChart />
      </Tabs.Content>
    </Tabs>
  )
}
