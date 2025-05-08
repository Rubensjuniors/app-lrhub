import { ExpenseCard } from '@/components/ExpenseCard'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import { useTranslation } from 'react-i18next'

export function ExpenseTabs() {
  const { t } = useTranslation()

  return (
    <Tabs defaultValue="fixedExpenses" className="w-full">
      <TabsList className="flex items-center flex-wrap mb-3">
        <TabsTrigger value="fixedExpenses">
          <span className="sm:hidden">{t('expense_tabs.fixed_expenses_mobile')}</span>
          <span className="hidden sm:block">{t('expense_tabs.fixed_expenses')}</span>
        </TabsTrigger>
        <TabsTrigger value="creditCard">
          <span className="sm:hidden">{t('expense_tabs.credit_card_mobile')}</span>
          <span className="hidden sm:block">{t('expense_tabs.credit_card')}</span>
        </TabsTrigger>
        <TabsTrigger value="pix">{t('expense_tabs.debit_pix')}</TabsTrigger>
      </TabsList>
      <TabsContent value="fixedExpenses">
        <ExpenseCard
          title={t('expense_table.fixed_expenses.title')}
          handleAddTransaction={() => void 0}
          items={[]}
          type="fixedExpenses"
        />
      </TabsContent>
      <TabsContent value="creditCard">
        <ExpenseCard
          title={t('expense_table.credit_card.title')}
          handleAddTransaction={() => void 0}
          items={[]}
          type="creditCard"
        />
      </TabsContent>
      <TabsContent value="pix">
        <ExpenseCard
          title={t('expense_table.debit_pix.title')}
          handleAddTransaction={() => void 0}
          items={[]}
          type="pix"
        />
      </TabsContent>
    </Tabs>
  )
}
