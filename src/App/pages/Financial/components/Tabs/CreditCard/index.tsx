import useGetExpensesCredit from '@/api/queries/useGetExpensesCredit'
import { CustomTable } from '@/components/commons/CustomTable'
import { ICategory } from '@/api/queries/types'
import {
  PaidButton,
  NameCell,
  DateCell,
  CategoryCell,
  PaymentMethodCell,
  AmountCell,
  ActionsCell,
} from '../../TableComponents'
import Loader from '@/components/commons/Loader'

const CreditCard = () => {
  const { data: expensesCredit, isLoading } = useGetExpensesCredit()

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-[400px]">
        <Loader />
      </div>
      ) : (
        <CustomTable
          columns={[
            {
              key: 'paid',
              label: 'Pago',
              className: 'w-[16px]',
              render: (value: string | number | boolean, row) => (
                <PaidButton value={value} rowId={row.id} />
              ),
            },
            {
              key: 'name',
              label: 'Nome',
              className: 'w-[200px]',
              render: (value: string | number | boolean) => <NameCell value={value} />,
            },
            {
              key: 'date_of_purchase',
              label: 'Data',
              className: 'w-[150px]',
              render: (value: string | number | boolean) => <DateCell value={value} />,
            },
            {
              key: 'category',
              label: 'Categoria',
              className: 'w-[150px]',
              render: (value: ICategory) => <CategoryCell value={value} />,
            },
            {
              key: 'payment_method',
              label: 'Método de pagamento',
              className: 'w-[150px]',
              render: (value) => <PaymentMethodCell value={value} />,
            },
            {
              key: 'total_amount',
              label: 'Valor',
              className: 'w-[150px]',
              render: (value, row) => <AmountCell value={value} row={row} />,
            },
            {
              key: 'actions',
              label: 'Ações',
              position: 'right',
              className: 'w-[50px]',
              render: () => <ActionsCell />,
            },
          ]}
          data={expensesCredit || []}
        />
      )}
    </>
  )
}

export default CreditCard
