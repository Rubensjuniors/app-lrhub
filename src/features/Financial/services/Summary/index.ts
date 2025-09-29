// import lrHubApi from '@/config/axios'
import type { ISummary } from './types'
import { sleep } from '@/shared/utils/sleep'

class SummaryService {
  async getSummary() {
    await sleep() // TODO: Remover essa simulação de delay
    // const { data } = await lrHubApi.get<ISummary>('/summary')
    return new Promise<ISummary>((resolve) =>
      resolve({
        entries: 3000,
        exits: 3133,
        total: -133,
      }),
    )
  }
}

export const summaryService = new SummaryService()
