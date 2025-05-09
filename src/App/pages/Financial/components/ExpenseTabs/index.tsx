import { ExpenseCard } from '@/components/ExpenseCard'
import { Tabs } from '@/components/shad-ui/Tabs'
import { useTranslation } from 'react-i18next'

export function ExpenseTabs() {
  const { t } = useTranslation()

  return (
    <Tabs defaultValue="fixedExpenses" className="w-full">
      <Tabs.List className="flex items-center flex-wrap mb-3">
        <Tabs.Trigger value="fixedExpenses">
          <span className="sm:hidden">{t('expense_tabs.fixed_expenses_mobile')}</span>
          <span className="hidden sm:block">{t('expense_tabs.fixed_expenses')}</span>
        </Tabs.Trigger>
        <Tabs.Trigger value="creditCard">
          <span className="sm:hidden">{t('expense_tabs.credit_card_mobile')}</span>
          <span className="hidden sm:block">{t('expense_tabs.credit_card')}</span>
        </Tabs.Trigger>
        <Tabs.Trigger value="pix">{t('expense_tabs.debit_pix')}</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="fixedExpenses">
        <ExpenseCard
          title={t('expense_table.fixed_expenses.title')}
          handleAddTransaction={() => void 0}
          items={[]}
          type="fixedExpenses"
        />
      </Tabs.Content>
      <Tabs.Content value="creditCard">
        <ExpenseCard
          title={t('expense_table.credit_card.title')}
          handleAddTransaction={() => void 0}
          items={[]}
          type="creditCard"
        />
      </Tabs.Content>
      <Tabs.Content value="pix">
        <ExpenseCard
          title={t('expense_table.debit_pix.title')}
          handleAddTransaction={() => void 0}
          items={[]}
          type="pix"
        />
      </Tabs.Content>
    </Tabs>
  )
}
