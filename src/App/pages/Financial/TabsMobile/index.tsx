import { ExpenseCard } from '@/components/ExpenseCard'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import { TabsContent } from '@radix-ui/react-tabs'

export function ExpenseTabs() {
  return (
    <Tabs defaultValue="fixedExpenses" className="w-[700px]">
      <TabsList className="flex items-center flex-wrap mb-3">
        <TabsTrigger value="fixedExpenses">Fixos</TabsTrigger>
        <TabsTrigger value="creditCard">Credito</TabsTrigger>
        <TabsTrigger value="pix">Debito</TabsTrigger>
      </TabsList>
      <TabsContent value="fixedExpenses">
        <ExpenseCard title="Gastos Fixos" handleAddExpense={() => void 0} items={[]} />
      </TabsContent>
      <TabsContent value="creditCard">
        <ExpenseCard
          title="Cartão de Credito (Parcelados)"
          handleAddExpense={() => void 0}
          items={[]}
        />
      </TabsContent>
      <TabsContent value="pix">
        <ExpenseCard title="Debito ou Pix" handleAddExpense={() => void 0} items={[]} />
      </TabsContent>
    </Tabs>
  )
}
