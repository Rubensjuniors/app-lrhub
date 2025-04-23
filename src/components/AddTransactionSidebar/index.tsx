import { SquarePlus } from 'lucide-react'
import { Button } from '../ui/Button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/Sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs'

export type ITransactionSidebarTypes = 'fixedExpenses' | 'creditCard' | 'pix'
interface AddTransactionSidebarProps {
  type: ITransactionSidebarTypes
  handleAddTransaction(): void
  isEmptyState?: boolean
}

export function AddTransactionSidebar({
  type,
  handleAddTransaction,
  isEmptyState = false,
}: AddTransactionSidebarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {isEmptyState ? (
          <Button onClick={() => handleAddTransaction()}>Cadastrar um Gasto</Button>
        ) : (
          <Button variant="outline" onClick={() => handleAddTransaction()}>
            <SquarePlus />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="min-w-[600px]">
        <SheetHeader>
          <SheetTitle>Novo gasto</SheetTitle>
          <SheetDescription>
            Escolha o tipo e preencha os dados para adicionar à sua lista.
          </SheetDescription>
        </SheetHeader>

        <div>
          <Tabs defaultValue={type} className="w-full items-center justify-center">
            <TabsList className="flex items-center flex-wrap mb-3">
              <TabsTrigger value="fixedExpenses">Gastos Fixos</TabsTrigger>
              <TabsTrigger value="creditCard">Parcelados (Creditos)</TabsTrigger>
              <TabsTrigger value="pix">Debito</TabsTrigger>
            </TabsList>
            <TabsContent value="fixedExpenses">Gastos Fixos</TabsContent>
            <TabsContent value="creditCard">Parcelados (Creditos)</TabsContent>
            <TabsContent value="pix">Debito</TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  )
}
