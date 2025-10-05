import { ExpensesChart, type MonthlyData } from '@/features/Hub/components/ExpensesChart'

export const mockMonthlyData: MonthlyData[] = [
  {
    month: 'Jan',
    income: 5200,
    expenses: 2100,
    fixed: 1500,
    debit: 600,
    installment: 0
  },
  {
    month: 'Fev',
    income: 5200,
    expenses: 2300,
    fixed: 1500,
    debit: 800,
    installment: 0
  },
  {
    month: 'Mar',
    income: 5500,
    expenses: 1800,
    fixed: 1500,
    debit: 0,
    installment: 300
  },
  {
    month: 'Abr',
    income: 5500,
    expenses: 2320,
    fixed: 1500,
    debit: 520,
    installment: 300
  },
  {
    month: 'Mai',
    income: 5500,
    expenses: 2639,
    fixed: 1709,
    debit: 630,
    installment: 300
  }
]

export default function Hub() {
  return (
    <div className="mb-8">
      <ExpensesChart data={mockMonthlyData} />
    </div>
  )
}
