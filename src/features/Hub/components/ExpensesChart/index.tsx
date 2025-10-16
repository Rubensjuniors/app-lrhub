import { TrendingDown, TrendingUp } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import type { MonthlyData } from '@/features/Hub/components/ExpensesChart/types.ts'
import { Card } from '@/shared/components/Atoms'
import { EmptyState } from '@/shared/components/Molecules/EmptyState'
import { EMPTY_STATE_TYPE } from '@/shared/components/Molecules/EmptyState/types.ts'
import { formatCurrency } from '@/shared/utils/money'

import { SelectLastMonths } from '../SelectLastMonths'

const data: MonthlyData[] = [
  {
    month: 1,
    income: 2200,
    expenses: 900,
    year: 25
  },
  {
    month: 2,
    income: 5200,
    expenses: 2300,
    year: 25
  },
  {
    month: 3,
    income: 520,
    expenses: 200,
    year: 25
  },
  {
    month: 4,
    income: 2200,
    expenses: 900,
    year: 25
  },
  {
    month: 5,
    income: 5200,
    expenses: 2300,
    year: 25
  }
]

export const ExpensesChart = () => {
  const { t } = useTranslation()
  const [chartPeriod, setChartPeriod] = useState(5)

  const formatedData = useMemo(
    () =>
      data.map((item) => ({
        ...item,
        month: `${t(`months.${item.month}`)}/${item.year}`
      })),
    [t]
  )

  if (formatedData.length <= 1) {
    return <EmptyState type={EMPTY_STATE_TYPE.CHART} />
  }

  return (
    <Card className="p-6 shadow-[var(--shadow-md)]">
      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
        <h3 className="text-lg font-semibold text-foreground">{t('expenses_chart.title')}</h3>

        <SelectLastMonths chartPeriod={chartPeriod} setChartPeriod={setChartPeriod} />
      </div>
      <ResponsiveContainer width="100%" height={350} className="hidden md:block">
        <AreaChart data={formatedData} className="outline-none">
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
                income: t('expenses_chart.entries'),
                expenses: t('expenses_chart.exits')
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

      <div className="md:hidden flex gap-2 flex-col">
        {formatedData.map((item) => (
          <Card key={item.month} className="p-6 flex flex-row items-center justify-between">
            <div>{item.month}</div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" color="green" />

                <span>{formatCurrency(item.income)}</span>
              </div>

              <span className="border h-10" />
              <div className="flex items-center gap-2">
                <span>{formatCurrency(item.expenses)}</span>
                <TrendingDown className="h-5 w-5" color="red" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  )
}
