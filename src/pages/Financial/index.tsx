import { financialTabsConfig } from '@/features/Financial/components/ExpenseTabs'
import { SwitcherCalendar } from '@/features/Structor/components/SwitcherCalendar'
import { ConfigurableTabs } from '@/shared/components/Molecules'

export default function Financial() {
  return (
    <div className="mt-5">
      <div className="md:hidden py-6 w-full flex items-center justify-center">
        <SwitcherCalendar className="md:hidden w-full justify-between gap-2" />
      </div>
      <div className="mt-3">
        <ConfigurableTabs tabsConfig={financialTabsConfig} />
      </div>
    </div>
  )
}
