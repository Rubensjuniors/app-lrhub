import { ColumnDef } from '@tanstack/react-table'
import { PencilIcon } from 'lucide-react'

import { Button, Checkbox, CustomTable } from '@/components/common'

import { NoExpenseEmptyState } from '../EmptyStates/NoExpense'

interface ExpenseFixed {
  id: number
  paid: boolean
  name: string
  date: string
  category: string
  amount: number
}

const dataMock: ExpenseFixed[] = []

export function ExpenseFixedTable() {
  const columns: ColumnDef<ExpenseFixed>[] = [
    {
      header: 'Pago',
      accessorKey: 'paid',
      cell: ({ row }) => {
        return <Checkbox checked={row.original.paid} />
      },
    },
    {
      header: 'Nome',
      accessorKey: 'name',
      enableSorting: true,
    },
    {
      header: 'Data',
      accessorKey: 'date',
    },
    {
      header: 'Categoria',
      accessorKey: 'category',
    },
    {
      header: 'Valor',
      accessorKey: 'amount',
    },
    {
      header: 'Ações',
      accessorKey: 'actions',
      cell: ({ row }) => {
        return (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              console.log(row.original)
            }}
          >
            <PencilIcon className="w-4 h-4" />
          </Button>
        )
      },
    },
  ]

  return (
    <CustomTable
      data={dataMock}
      columns={columns}
      emptyState={
        <div className="mt-8">
          <NoExpenseEmptyState type="fixedExpenses" handleAddTransaction={() => void 0} />
        </div>
      }
    />
  )
}
