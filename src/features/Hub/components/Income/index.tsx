import { cn } from '@/lib/utils'
import { Card, Heading } from '@/shared/components/Atoms'

import { IncomeItem } from './IncomeItem'

const incomes = [
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dayOfReceipt: 30
  },
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dayOfReceipt: 30
  },
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dayOfReceipt: 30
  },
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dayOfReceipt: 30
  },
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dayOfReceipt: 30
  },
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dayOfReceipt: 30
  },
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dayOfReceipt: 30
  },
  {
    id: 'sdfsdf',
    name: 'Salario',
    amount: 5000.0,
    dayOfReceipt: 30
  }
]

export function Income({ className = '' }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <div>
        <Heading as="h4" level="h4">
          Entradas
        </Heading>
      </div>
      <Card className="w-full flex flex-col gap-2 p-2 mt-4 max-h-[469px] overflow-y-scroll scrollbar pr-0">
        {incomes.map((item) => (
          <IncomeItem key={item.id} {...item} />
        ))}
      </Card>
    </div>
  )
}
