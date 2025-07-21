export interface MonthYearState {
  currentDate: Date
  setDate: (date: Date) => void
  nextMonth: () => void
  prevMonth: () => void
  formatValue: () => string
}