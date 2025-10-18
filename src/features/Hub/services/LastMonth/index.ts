// import lrHubApi from '@/config/axios'
import { sleep } from '@/shared/utils/sleep'

import type { MonthlyData } from './types'

class LastMonthService {
  async getLastMonth() {
    await sleep() // TODO: Remover essa simulação de delay
    // const { data } = await lrHubApi.get<MonthlyData>('/expenses/last-month')
    return new Promise<MonthlyData[]>((resolve) =>
      resolve([
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
      ])
    )
  }
}

export const lastMonthService = new LastMonthService()
