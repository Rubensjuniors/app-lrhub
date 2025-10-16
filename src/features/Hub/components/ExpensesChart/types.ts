export interface MonthlyData {
  month: string
  income: number
  expenses: number
}

export interface ExpensesChartProps {
  data: MonthlyData[]
}
