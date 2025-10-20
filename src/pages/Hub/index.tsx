import { hubTabsConfig } from '@/features/Hub/components/HubTabs'
import { ConfigurableTabs } from '@/shared/components/Molecules'

export default function Hub() {
  return <ConfigurableTabs tabsConfig={hubTabsConfig} />
}
