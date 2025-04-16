import { LayoutList, SquarePlus } from 'lucide-react'
import { Button } from '../ui/Button'
import { Card, CardContent, CardHeader } from '../ui/Card'

interface ExpenseCardProps {
  title: string
  handleAddExpense(): void
  items: any[]
  handleCheck?(): void
  handleDelete?(): void
}

export function ExpenseCard({ title, handleAddExpense, items }: ExpenseCardProps) {
  return (
    <Card className="min-h-[350px]">
      <CardHeader className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">{title}</h1>
        <Button variant="outline" onClick={() => handleAddExpense()}>
          <SquarePlus />
        </Button>
      </CardHeader>
      <CardContent>
        {items?.map((item) => item)}
        {items.length <= 0 && (
          <div className="flex items-center justify-center flex-col gap-4">
            <LayoutList size={34} />
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-sm ">Você ainda não cadastrou nenhum gasto</h1>
              <p className="text-sm text-center">Adicione um agora para começar a acompanhar seus registros!</p>
            </div>
            <Button onClick={() => handleAddExpense()}>Cadastrar um Gasto</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
