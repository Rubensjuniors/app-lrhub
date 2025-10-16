export interface MonthlyData {
  month:  number
  income: number
  expenses: number
  year: number
}

export interface ExpensesChartProps {
  data: MonthlyData[]
}
