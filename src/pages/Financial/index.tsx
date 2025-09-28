import { ExpenseTabs } from '@/features/Financial/components/ExpenseTabs'
import { Summary } from '@/features/Financial/components/Summary'
import { HiddenMoneyToggleProvider } from '@/features/Financial/contexts/HiddenMoneyToggleContext'
import { SwitcherCalendar } from '@/shared/components/Molecules'
import { Wellcome } from '@/shared/components/Wellcome'

export default function Financial() {
  return (
    <HiddenMoneyToggleProvider>
      <div className="w-full p-5 xl:px-15">
        <header className="gap-4 flex items-center justify-between sm:justify-between flex-wrap">
          <Wellcome />

          <SwitcherCalendar className="hidden md:flex" />
        </header>

        <div className="mt-5">
          <Summary />
          <div className="mt-3">
            <ExpenseTabs />
          </div>
        </div>
      </div>
    </HiddenMoneyToggleProvider>
  )
}
