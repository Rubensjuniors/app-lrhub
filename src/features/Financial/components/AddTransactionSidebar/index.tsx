import { Button, Sheet, Tabs } from '@/shared/components/Atoms'
import { SquarePlus } from 'lucide-react'
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
      <Sheet.Trigger asChild>
        {isEmptyState ? (
          <Button onClick={() => handleAddTransaction()}>{t('general.add_expense')}</Button>
        ) : (
          <Button variant="outline" onClick={() => handleAddTransaction()}>
            <SquarePlus />
          </Button>
        )}
      </Sheet.Trigger>
      <Sheet.Content className="min-w-[370px] md:min-w-[600px]">
        <Sheet.Header>
          <Sheet.Title>{t('add_transaction_sidebar.new_expense')}</Sheet.Title>
          <Sheet.Description>
            {t('add_transaction_sidebar.choose_type_and_fill_data')}
          </Sheet.Description>
        </Sheet.Header>

        <div>
          <Tabs defaultValue={type} className="w-full items-center justify-center">
            <Tabs.List className="flex items-center flex-wrap mb-3">
              <Tabs.Trigger value="fixedExpenses">
                {t('add_transaction_sidebar.fixed_expenses')}
              </Tabs.Trigger>
              <Tabs.Trigger value="creditCard">
                {t('add_transaction_sidebar.credit_card')}
              </Tabs.Trigger>
              <Tabs.Trigger value="pix">{t('add_transaction_sidebar.pix')}</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="fixedExpenses">
              {t('add_transaction_sidebar.fixed_expenses')}
            </Tabs.Content>
            <Tabs.Content value="creditCard">
              {t('add_transaction_sidebar.credit_card')}
            </Tabs.Content>
            <Tabs.Content value="pix">{t('add_transaction_sidebar.pix')}</Tabs.Content>
          </Tabs>
        </div>
      </Sheet.Content>
    </Sheet>
  )
}
