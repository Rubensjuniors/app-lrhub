import { AddTransactionSidebar, ITransactionSidebarTypes } from '@/components/AddTransactionSidebar'
import { LayoutList } from 'lucide-react'

interface NoExpenseProps {
  type: ITransactionSidebarTypes
  handleAddTransaction(): void
}

export function NoExpenseEmptyState({ type, handleAddTransaction }: NoExpenseProps) {
  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <LayoutList size={34} />
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-sm ">Você ainda não cadastrou nenhum gasto</h1>
        <p className="text-sm text-center">
          Adicione um agora para começar a acompanhar seus registros!
        </p>
      </div>
      <AddTransactionSidebar type={type} handleAddTransaction={handleAddTransaction} isEmptyState />
    </div>
  )
}
