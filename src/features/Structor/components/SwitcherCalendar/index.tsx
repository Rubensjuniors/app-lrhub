import { addMonths, format, subMonths } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/shared/components/Atoms'
import { Text } from '@/shared/components/Atoms/Text'

function getMonthStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function getMonthFilterValue(date: Date) {
  return format(date, 'yyyy-MM')
}

export function SwitcherCalendar({ className }: { className?: string }) {
  const [currentMonth, setCurrentMonth] = useState<Date>(getMonthStart(new Date()))

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => getMonthStart(subMonths(prev, 1)))
  }

  const handleNextMonth = () => {
    setCurrentMonth((prev) => getMonthStart(addMonths(prev, 1)))
  }

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log({
      filterValue: getMonthFilterValue(currentMonth)
    })
  }, [currentMonth])

  return (
    <div className={cn('flex items-center gap-4', className)}>
      <Button variant="outline" onClick={handlePrevMonth} size="sm">
        <ChevronLeft />
      </Button>
      <Text as="span" size="base" weight="medium" className="truncate">
        {format(currentMonth, 'MMMM yyyy', { locale: ptBR })}
      </Text>
      <Button variant="outline" onClick={handleNextMonth} size="sm">
        <ChevronRight />
      </Button>
    </div>
  )
}
