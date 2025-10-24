import { format } from 'date-fns'
import { TrendingUp } from 'lucide-react'

import type { IIncome } from '@/features/Hub/context/IncomeContext/types'
import { Button, Text } from '@/shared/components/Atoms'
import { formatCurrency } from '@/shared/utils/money'

export function IncomeItem({ id, name, amount, dateOfReceipt }: IIncome) {
  return (
    <Button
      variant="outline"
      className="flex items-center py-7 px-2 gap-2 rounded-lg"
      // eslint-disable-next-line no-console
      onClick={() => console.log({ id })}
    >
      <div className="p-2 rounded-full text-success bg-success/10">
        <TrendingUp className="h-5 w-5 text-success" />
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <Text as="p" size="sm" weight="semibold">
            {name}
          </Text>
          {dateOfReceipt && (
            <Text as="span" size="xs" weight="light" color="muted">
              {format(dateOfReceipt, 'dd/MM/yyyy')}
            </Text>
          )}
        </div>

        <Text as="span" size="sm" weight="bold" className="text-success">
          {formatCurrency(amount)}
        </Text>
      </div>
    </Button>
  )
}
