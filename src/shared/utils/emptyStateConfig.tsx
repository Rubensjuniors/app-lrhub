import { FileQuestion, TrendingUp } from 'lucide-react'

import { EMPTY_STATE_TYPE, type IEmptyStateContent } from '@/shared/components/Molecules/EmptyState/types.ts'

export const emptyStateContent: Record<EMPTY_STATE_TYPE, IEmptyStateContent> = {
  chart: {
    icon: TrendingUp,
    title: 'Sem dados para exibir',
    description: 'Complete 2 meses de transações para visualizar o histórico financeiro.'
  },
  general: {
    icon: FileQuestion,
    title: 'Bem-vindo!',
    description:
      'Você ainda não tem dados financeiros. Complete seu primeiro mês para começar a visualizar análises.'
  }
}
