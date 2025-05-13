import { AddTransactionSidebar, ITransactionSidebarTypes } from '@/components/AddTransactionSidebar'
import { LayoutList } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface NoExpenseProps {
  type: ITransactionSidebarTypes
  handleAddTransaction(): void
}

export function NoExpenseEmptyState({ type, handleAddTransaction }: NoExpenseProps) {
  const { t } = useTranslation()

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <LayoutList size={34} />
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-sm ">{t('empty_states.no_expenses.title')}</h1>
        <p className="text-sm text-center">{t('empty_states.no_expenses.description')}</p>
      </div>
      <AddTransactionSidebar type={type} handleAddTransaction={handleAddTransaction} isEmptyState />
    </div>
  )
}
