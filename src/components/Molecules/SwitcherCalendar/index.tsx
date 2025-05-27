import { addMonths, format, subMonths } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/Atoms'

function getMonthStart(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function getMonthFilterValue(date: Date) {
  return format(date, 'yyyy-MM')
}

export function SwitcherCalendar() {
  const [currentMonth, setCurrentMonth] = useState<Date>(getMonthStart(new Date()))

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => getMonthStart(subMonths(prev, 1)))
  }

  const handleNextMonth = () => {
    setCurrentMonth((prev) => getMonthStart(addMonths(prev, 1)))
  }

  useEffect(() => {
    console.log({
      filterValue: getMonthFilterValue(currentMonth),
    })
  }, [currentMonth])

  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" onClick={handlePrevMonth} size="sm">
        <ChevronLeft />
      </Button>
      <span className="text-lg font-medium">
        {format(currentMonth, 'MMMM yyyy', { locale: ptBR })}
      </span>
      <Button variant="outline" onClick={handleNextMonth} size="sm">
        <ChevronRight />
      </Button>
    </div>
  )
}
