import { Plus } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button, Card, Heading } from '@/shared/components/Atoms'

import { useIncomeContext } from '../../context/IncomeContext'
import { IncomeItem } from './IncomeItem'

const incomes = [
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dateOfReceipt: '2025/12/10'
  },
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dateOfReceipt: '2025/12/10'
  },
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dateOfReceipt: '2025/12/10'
  },
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dateOfReceipt: '2025/12/10'
  },
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dateOfReceipt: '2025/12/10'
  },
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dateOfReceipt: '2025/12/10'
  },
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dateOfReceipt: '2025/12/10'
  },
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dateOfReceipt: '2025/12/10'
  }
]

export function Income({ className = '' }: { className?: string }) {
  const { setIsOpenIncomeModal } = useIncomeContext()
  return (
    <div className={cn(className)}>
      <div className="flex justify-between items-center w-full">
        <Heading as="h4" level="h4">
          Entradas
        </Heading>
        <Button size="sm" variant="outline" onClick={() => setIsOpenIncomeModal(true)}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Card className="w-full flex flex-col gap-2 p-2 mt-4 max-h-[469px] overflow-y-scroll scrollbar pr-2 lg:pr-0">
        {incomes.map((item) => (
          <IncomeItem key={item.id} {...item} />
        ))}
      </Card>
    </div>
  )
}
