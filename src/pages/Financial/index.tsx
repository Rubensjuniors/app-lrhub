import { ExpenseTabs } from '@/features/Financial/components/ExpenseTabs'
import { SwitcherCalendar } from '@/features/Structor/components/SwitcherCalendar'

export default function Financial() {
  return (
    <div className="mt-5">
      <div className="md:hidden py-6 w-full flex items-center justify-center">
        <SwitcherCalendar className="md:hidden w-full justify-between gap-2" />
      </div>
      <div className="mt-3">
        <ExpenseTabs />
      </div>
    </div>
  )
}
