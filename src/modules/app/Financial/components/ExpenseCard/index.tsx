import { Card } from '@/components/Atoms'

import { AddTransactionSidebar, ITransactionSidebarTypes } from '../AddTransactionSidebar'

interface ExpenseCardProps {
  title: string
  handleAddTransaction(): void
  type: ITransactionSidebarTypes
  children: React.ReactNode
}

export function ExpenseCard({ title, handleAddTransaction, type, children }: ExpenseCardProps) {
  return (
    <Card className="h-[calc(100vh-20rem)]">
      <Card.Header className="flex item-center justify-between">
        <h1 className="font-bold text-2xl">{title}</h1>
        <AddTransactionSidebar type={type} handleAddTransaction={handleAddTransaction} />
      </Card.Header>

      <Card.Content>
        {children}
      </Card.Content>
    </Card>
  )
}
