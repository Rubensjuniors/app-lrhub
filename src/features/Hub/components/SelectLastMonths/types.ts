import type { Dispatch, SetStateAction } from 'react'

export interface SelectLastMonthsProps {
  chartPeriod: number
  setChartPeriod: Dispatch<SetStateAction<number>>
}
