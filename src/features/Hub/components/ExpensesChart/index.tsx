import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { Card } from '@/shared/components/Atoms'

export interface MonthlyData {
  month: string
  income: number
  expenses: number
  fixed: number
  debit: number
  installment: number
}

interface ExpensesChartProps {
  data: MonthlyData[]
}

export const ExpensesChart = ({ data }: ExpensesChartProps) => {
  return (
    <Card className="p-6 shadow-[var(--shadow-md)]">
      <h3 className="text-lg font-semibold mb-6 text-foreground">Histórico de Gastos (5 meses)</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" style={{ fontSize: '12px' }} />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `R$ ${value}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: 'var(--radius)'
            }}
            formatter={(value: number) => [`R$ ${value.toFixed(2)}`, '']}
          />
          <Legend
            wrapperStyle={{ fontSize: '12px' }}
            formatter={(value) => {
              const labels: Record<string, string> = {
                income: 'Entradas',
                expenses: 'Saídas Totais',
                fixed: 'Gastos Fixos',
                debit: 'Débito',
                installment: 'Parcelados'
              }
              return labels[value] || value
            }}
          />
          <Bar dataKey="income" fill="hsl(var(--success))" radius={[8, 8, 0, 0]} />
          <Bar dataKey="expenses" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
          <Bar dataKey="fixed" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
          <Bar dataKey="debit" fill="hsl(var(--warning))" radius={[8, 8, 0, 0]} />
          <Bar dataKey="installment" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
