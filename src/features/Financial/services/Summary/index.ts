import lrHubApi from '@/config/axios'
import type { ISummary } from './types'
import { sleep } from '@/shared/utils/sleep'

class SummaryService {
  async getSummary() {
    await sleep() // TODO: Remover essa simulação de delay
    const summary = await lrHubApi.get<ISummary>('/summary')
    return summary.data
  }
}

export const summaryService = new SummaryService()
