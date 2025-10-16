import { ExpensesChart } from '@/features/Hub/components/ExpensesChart'
import type { MonthlyData } from '@/features/Hub/components/ExpensesChart/types.ts'
import { Tabs } from '@/shared/components/Atoms'

// TODO: Consumir da API
const mockMonthlyData: MonthlyData[] = [
  {
    month: 'Jan',
    income: 2200,
    expenses: 900
  },
  {
    month: 'Fev',
    income: 5200,
    expenses: 2300
  },
  {
    month: 'Mar',
    income: 520,
    expenses: 200
  }
]

export default function Hub() {
  return (
    <Tabs defaultValue="summary" className="mb-8">
      <Tabs.List>
        <Tabs.Trigger value="summary">
          <span>Summary</span>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="summary">
        <ExpensesChart data={mockMonthlyData} />
      </Tabs.Content>
    </Tabs>
  )
}
