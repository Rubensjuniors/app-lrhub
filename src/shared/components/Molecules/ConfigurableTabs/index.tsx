import { useTranslation } from 'react-i18next'

import { cn } from '@/lib/utils'
import type { ITabsConfig } from '@/shared/types/tabs-types'

import { Tabs } from '../../Atoms'

interface ConfigurableTabsProps {
  tabsConfig: Record<string, ITabsConfig>
  className?: string
}

export function ConfigurableTabs({ tabsConfig, className }: ConfigurableTabsProps) {
  const { t } = useTranslation()

  const tabsKeys = Object.keys(tabsConfig)
  const defaultTab = tabsKeys[0]

  const renderTabTrigger = (tabKey: string) => {
    const config = tabsConfig[tabKey]

    return (
      <Tabs.Trigger key={tabKey} value={tabKey}>
        {config.labelMobile ? (
          <>
            <span className="sm:hidden">{t(config.labelMobile)}</span>
            <span className="hidden sm:block">{t(config.label)}</span>
          </>
        ) : (
          <span>{t(config.label)}</span>
        )}
      </Tabs.Trigger>
    )
  }

  const renderTabContent = (tabKey: string) => {
    const config = tabsConfig[tabKey]

    return (
      <Tabs.Content key={tabKey} value={tabKey}>
        {config.content}
      </Tabs.Content>
    )
  }

  return (
    <Tabs defaultValue={defaultTab} className={cn('w-full', className)}>
      <Tabs.List className="flex items-center flex-wrap mb-3">{tabsKeys.map(renderTabTrigger)}</Tabs.List>

      {tabsKeys.map(renderTabContent)}
    </Tabs>
  )
}
