import { Card } from '../shad-ui/Card'
import { AddTransactionSidebar, ITransactionSidebarTypes } from '../AddTransactionSidebar'
import { NoExpenseEmptyState } from './EmptyStates/NoExpense'
import { CustomTable } from '../Commons/CustomTable'
import { Checkbox } from '../shad-ui/Checkbox'

interface ExpenseCardProps {
  title: string
  handleAddTransaction(): void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[]
  handleCheck?(): void
  handleDelete?(): void
  type: ITransactionSidebarTypes
}

const dataMock = [
  {
    id: 1,
    paid: true,
    name: 'Pagamento de Aluguel',
    date: '2024-07-10',
    category: 'Moradia',
    amount: 1500,
  },
  {
    id: 2,
    paid: false,
    name: 'Conta de Energia',
    date: '2024-07-15',
    category: 'Utilidades',
    amount: 250.75,
  },
  {
    id: 3,
    paid: true,
    name: 'Supermercado Mensal',
    date: '2024-07-05',
    category: 'Alimentação',
    amount: 850.32,
  },
  {
    id: 4,
    paid: false,
    name: 'Parcela do Cartão',
    date: '2024-07-20',
    category: 'Dívidas',
    amount: 1200,
  },
  {
    id: 5,
    paid: true,
    name: 'Assinatura Netflix',
    date: '2024-07-08',
    category: 'Entretenimento',
    amount: 55.9,
  },
]

export function ExpenseCard({ title, handleAddTransaction, items, type }: ExpenseCardProps) {
  return (
    <Card className="h-[calc(100vh-20rem)]">
      <Card.Header className="flex item-center justify-between">
        <h1 className="font-bold text-2xl">{title}</h1>
        <AddTransactionSidebar type={type} handleAddTransaction={handleAddTransaction} />
      </Card.Header>

      {/* <Card.Content className="flex flex-col items-center my-auto"> */}
      <Card.Content className="">
        {items?.map((item) => item)}
        <CustomTable
          columns={[
            {
              key: 'paid',
              label: 'Pago',
              render: (value: string | number | boolean) => (
                <span>
                  <Checkbox checked={Boolean(value)} />
                </span>
              ),
            },
            {
              key: 'name',
              label: 'Nome',
            },
            {
              key: 'date',
              label: 'Data',
              render: (value: string | number | boolean) =>
                new Date(String(value)).toLocaleDateString('pt-BR'),
            },
            {
              key: 'category',
              label: 'Categoria',
            },
            {
              key: 'amount',
              label: 'Valor',
              render: (value: string | number | boolean) =>
                `R$ ${Number(value).toFixed(2).replace('.', ',')}`,
            },
            {
              key: 'actions',
              label: 'Ações',
              position: 'right',
              render: () => {
                return (
                  <div className="flex gap-2 justify-end">
                    <button className="p-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                      Editar
                    </button>
                    <button className="p-1 bg-red-100 text-red-600 rounded hover:bg-red-200">
                      Excluir
                    </button>
                  </div>
                )
              },
            },
          ]}
          data={dataMock}
        />
        {items.length > 10 && (
          <NoExpenseEmptyState type={type} handleAddTransaction={handleAddTransaction} />
        )}
      </Card.Content>
    </Card>
  )
}
