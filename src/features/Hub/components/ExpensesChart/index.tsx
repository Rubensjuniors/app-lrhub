import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import type { ExpensesChartProps } from '@/features/Hub/components/ExpensesChart/types.ts'
import { Card } from '@/shared/components/Atoms'
import { EmptyState } from '@/shared/components/Molecules/EmptyState'
import { EMPTY_STATE_TYPE } from '@/shared/components/Molecules/EmptyState/types.ts'
import { formatCurrency } from '@/shared/utils/money'

export const ExpensesChart = ({ data }: ExpensesChartProps) => {
  if (data.length <= 1) {
    return <EmptyState type={EMPTY_STATE_TYPE.CHART} />
  }

  return (
    <Card className="p-6 shadow-[var(--shadow-md)]">
      <h3 className="text-lg font-semibold mb-6 text-foreground">Evolução Financeira (5 meses)</h3>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--success)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--success)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--danger)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--danger)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="month" stroke="var(--muted-foreground)" className="text-sm" />
          <YAxis
            stroke="var(--muted-foreground)"
            className="text-sm"
            tickFormatter={(value) => formatCurrency(value)}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '12px'
            }}
            formatter={(value: number) => [formatCurrency(value), '']}
          />
          <Legend
            wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }}
            formatter={(value) => {
              const labels: Record<string, string> = {
                income: 'Entradas',
                expenses: 'Saídas Totais'
              }
              return labels[value] || value
            }}
          />
          <Area
            type="monotone"
            dataKey="income"
            stroke="var(--success)"
            strokeWidth={3}
            fill="url(#colorIncome)"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="var(--danger)"
            strokeWidth={3}
            fill="url(#colorExpenses)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
