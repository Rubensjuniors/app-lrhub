import { Tabs } from '@/components/shad-ui/Tabs'
import { useTranslation } from 'react-i18next'
import { lazy, Suspense } from 'react'
import { ExpenseCard } from '@/components/ExpenseCard'
import { ITransactionSidebarTypes } from '@/components/AddTransactionSidebar'

const Fixed = lazy(() => import('../Tabs/Fixed'))
const CreditCard = lazy(() => import('../Tabs/CreditCard'))
const DebitPix = lazy(() => import('../Tabs/DebitPix'))

export function ExpenseTabs() {
  const { t } = useTranslation()
  const contentTabs = [
    {
      type: 'fixed',
      title: t('expense_table.fixed_expenses.title'),
      value: 'fixedExpenses',
      component: <Fixed />,
    },
    {
      type: 'credit',
      title: t('expense_table.credit_card.title'),
      value: 'creditCard',
      component: <CreditCard />,
    },
    {
      title: t('expense_table.debit_pix.title'),
      type: 'debit',
      value: 'pix',
      component: <DebitPix />,
    },
  ]

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
      {contentTabs.map((tab) => (
        <Tabs.Content key={tab.value} value={tab.value}>
          <ExpenseCard
            title={tab.title}
            handleAddTransaction={() => void 0}
            type={tab.type as ITransactionSidebarTypes}
          >
            <Suspense fallback={<div></div>}>{tab.component}</Suspense>
          </ExpenseCard>
        </Tabs.Content>
      ))}
    </Tabs>
  )
}
