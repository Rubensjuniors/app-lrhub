import { ExpenseCard } from '@/components/ExpenseCard'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import { TabsContent } from '@radix-ui/react-tabs'

export function ExpenseTabs() {
  return (
    <Tabs defaultValue="fixedExpenses" className="w-full">
      <TabsList className="flex items-center flex-wrap mb-3">
        <TabsTrigger value="fixedExpenses">
          <span className="sm:hidden">Fixos</span>
          <span className="hidden sm:block">Gastos Fixos</span>
        </TabsTrigger>
        <TabsTrigger value="creditCard">
          <span className="sm:hidden">Crédito</span>
          <span className="hidden sm:block">Cartão de Crédito</span>
        </TabsTrigger>
        <TabsTrigger value="pix">Débito/PIX</TabsTrigger>
      </TabsList>
      <TabsContent value="fixedExpenses">
        <ExpenseCard
          title="Gastos Fixos"
          handleAddTransaction={() => void 0}
          items={[]}
          type="fixedExpenses"
        />
      </TabsContent>
      <TabsContent value="creditCard">
        <ExpenseCard
          title="Cartão de Credito (Parcelados)"
          handleAddTransaction={() => void 0}
          items={[]}
          type="creditCard"
        />
      </TabsContent>
      <TabsContent value="pix">
        <ExpenseCard
          title="Debito ou Pix"
          handleAddTransaction={() => void 0}
          items={[]}
          type="pix"
        />
      </TabsContent>
    </Tabs>
  )
}
