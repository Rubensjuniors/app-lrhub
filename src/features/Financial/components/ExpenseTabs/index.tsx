import type { ITabsConfig } from '@/shared/types/tabs-types'

export const financialTabsConfig: Record<string, ITabsConfig> = {
  fixedExpenses: {
    label: 'expense_tabs.fixed_expenses',
    labelMobile: 'expense_tabs.fixed_expenses_mobile',
    content: <>fixedExpenses</>
  },
  creditExpenses: {
    label: 'expense_tabs.credit_card',
    labelMobile: 'expense_tabs.credit_card_mobile',
    content: <>creditExpenses</>
  },
  debitExpenses: { label: 'expense_tabs.debit_pix', content: <>debitExpenses</> }
}
