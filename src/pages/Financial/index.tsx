import { ExpenseTabs } from '@/features/Financial/components/ExpenseTabs'
import { Summary } from '@/features/Financial/components/Summary'
import { HiddenMoneyToggleProvider } from '@/features/Financial/contexts/HiddenMoneyToggleContext'
import { SwitcherCalendar } from '@/features/Structor/components/SwitcherCalendar'
import { Wellcome } from '@/features/Wellcome'

export default function Financial() {
  return (
    <HiddenMoneyToggleProvider>
      <div className="w-full py-5 px-5">
        <header className="gap-4 flex items-center justify-between sm:justify-between flex-wrap">
          <Wellcome />

          <SwitcherCalendar className="hidden md:flex" />
        </header>

        <div className="mt-5">
          <Summary />

          <div className="md:hidden py-6 w-full flex items-center justify-center">
            <SwitcherCalendar className="md:hidden w-full justify-between gap-2" />
          </div>
          <div className="mt-3">
            <ExpenseTabs />
          </div>
        </div>

      </div>
    </HiddenMoneyToggleProvider>
  )
}

