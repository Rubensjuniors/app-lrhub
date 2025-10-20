import type { TFunction } from 'i18next'
import { useMemo, useState } from 'react'

import { useLastMonth } from '../../services/LastMonth/useLastMonth'

export function useExpensesChart(t: TFunction<'translation', undefined>) {
  const [chartPeriod, setChartPeriod] = useState(5)
  const { data, isLoading } = useLastMonth()

  const formatedData = useMemo(
    () =>
      data?.map((item) => ({
        ...item,
        month: `${t(`months.${item.month}`)}/${item.year}`
      })) ?? [],
    [t, data]
  )

  return {
    chartPeriod,
    setChartPeriod,
    formatedData,
    isLoading
  }
}
