import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { useMonthYearStore } from '../../../store/MonthYearStore'
import { Button } from '../Button'
import { Text } from '../Text'

interface MonthYearPickerProps {
  onChange?: (value: string) => void
  initialDate?: Date
  className?: string
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const MonthYearPicker: React.FC<MonthYearPickerProps> = ({ className = '' }) => {
  const { t } = useTranslation()
  const { currentDate, nextMonth, prevMonth } = useMonthYearStore()

  const handlePrevious = React.useCallback(() => {
    prevMonth()
  }, [prevMonth])

  const handleNext = React.useCallback(() => {
    nextMonth()
  }, [nextMonth])

  const currentMonth = MONTHS[currentDate.getMonth()]
  const currentYear = currentDate.getFullYear()

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button
        variant="outline"
        size="icon"
        onClick={handlePrevious}
        className="h-8 w-8 rounded-2xl border-2 border-border hover:bg-secondary/80 transition-all duration-200"
        aria-label="Previous month"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <div className="min-w-[70px] text-center">
        <Text
          size="xs"
          weight="semibold"
          color="default"
          align="center"
          className="animate-slide-in"
        >
          {t(`months.${currentMonth}`)} {currentYear}
        </Text>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={handleNext}
        className="h-8 w-8 rounded-2xl border-2 border-border hover:bg-secondary/80 transition-all duration-200"
        aria-label="Next month"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}
