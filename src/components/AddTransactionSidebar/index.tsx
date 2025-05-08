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
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  return (
    <Sheet>
      <SheetTrigger asChild>
        {isEmptyState ? (
          <Button onClick={() => handleAddTransaction()}>{t('general.add_expense')}</Button>
        ) : (
          <Button variant="outline" onClick={() => handleAddTransaction()}>
            <SquarePlus />
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="min-w-[370px] md:min-w-[600px]">
        <SheetHeader>
          <SheetTitle>{t('add_transaction_sidebar.new_expense')}</SheetTitle>
          <SheetDescription>
            {t('add_transaction_sidebar.choose_type_and_fill_data')}
          </SheetDescription>
        </SheetHeader>

        <div>
          <Tabs defaultValue={type} className="w-full items-center justify-center">
            <TabsList className="flex items-center flex-wrap mb-3">
              <TabsTrigger value="fixedExpenses">{t('add_transaction_sidebar.fixed_expenses')}</TabsTrigger>
              <TabsTrigger value="creditCard">{t('add_transaction_sidebar.credit_card')}</TabsTrigger>
              <TabsTrigger value="pix">{t('add_transaction_sidebar.pix')}</TabsTrigger>
            </TabsList>
            <TabsContent value="fixedExpenses">{t('add_transaction_sidebar.fixed_expenses')}</TabsContent>
            <TabsContent value="creditCard">{t('add_transaction_sidebar.credit_card')}</TabsContent>
            <TabsContent value="pix">{t('add_transaction_sidebar.pix')}</TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  )
}
