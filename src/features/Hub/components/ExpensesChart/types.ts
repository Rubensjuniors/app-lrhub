export interface MonthlyData {
  month:  number
  income: number
  expenses: number
}

export interface ExpensesChartProps {
  data: MonthlyData[]
}
