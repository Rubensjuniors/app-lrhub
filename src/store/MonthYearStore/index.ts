import { create } from 'zustand'

import { MonthYearState } from './types'

const formatValue = (date: Date) => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()
  return `${month}-${year}`
}

export const useMonthYearStore = create<MonthYearState>((set, get) => ({
  currentDate: new Date(),
  setDate: (date: Date) => set({ currentDate: date }),
  nextMonth: () => {
    const newDate = new Date(get().currentDate)
    newDate.setMonth(newDate.getMonth() + 1)
    set({ currentDate: newDate })
  },
  prevMonth: () => {
    const newDate = new Date(get().currentDate)
    newDate.setMonth(newDate.getMonth() - 1)
    set({ currentDate: newDate })
  },
  formatValue: () => formatValue(get().currentDate),
}))
