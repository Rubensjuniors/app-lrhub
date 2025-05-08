import { Card, CardContent, CardHeader } from '../ui/Card'
import { AddTransactionSidebar, ITransactionSidebarTypes } from '../AddTransactionSidebar'
import { NoExpenseEmptyState } from './EmptyStates/NoExpense'

//  <Card className="lg:h-[calc(100vh-20rem)]">

interface ExpenseCardProps {
  title: string
  handleAddTransaction(): void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[]
  handleCheck?(): void
  handleDelete?(): void
  type: ITransactionSidebarTypes
}

export function ExpenseCard({ title, handleAddTransaction, items, type }: ExpenseCardProps) {
  return (
    <Card className="h-[calc(100vh-20rem)]">
      <CardHeader className="flex item-center justify-between">
        <h1 className="font-bold text-2xl">{title}</h1>
        <AddTransactionSidebar type={type} handleAddTransaction={handleAddTransaction} />
      </CardHeader>

      <CardContent className="flex flex-col items-center my-auto">
        {items?.map((item) => item)}
        {items.length <= 0 && (
          <NoExpenseEmptyState type={type} handleAddTransaction={handleAddTransaction} />
        )}
      </CardContent>
    </Card>
  )
}
