import { hubTabsConfig } from '@/features/Hub/components/HubTabs'
import { Income } from '@/features/Hub/components/Income'
import { IncomeProvider } from '@/features/Hub/context/IncomeContext'
import { ConfigurableTabs } from '@/shared/components/Molecules'

export default function Hub() {
  return (
    <IncomeProvider>
      <div className="flex items-start gap-4">
        <ConfigurableTabs tabsConfig={hubTabsConfig} className="flex-2 gap-0" />

        <Income className="hidden lg:block flex-1" />
      </div>
    </IncomeProvider>
  )
}
