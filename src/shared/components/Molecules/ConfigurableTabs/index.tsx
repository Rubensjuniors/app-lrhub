import { useEffect, useState } from 'react'
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
  const [activeTab, setActiveTab] = useState(defaultTab)

  useEffect(() => {
    const isTabVisible = (tabKey: string) => {
      const config = tabsConfig[tabKey]
      if (!config?.hidden?.width || !config?.hidden.className) return true

      if (config?.hidden.className.includes('lg:hidden')) {
        return window.innerWidth < config?.hidden.width
      }

      return true
    }

    const handleResize = () => {
      if (!isTabVisible(activeTab)) {
        setActiveTab(defaultTab)
      }
    }

    window.addEventListener('resize', handleResize)
    // Verifica imediatamente ao montar
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [activeTab, defaultTab, tabsConfig])

  const renderTabTrigger = (tabKey: string) => {
    const config = tabsConfig[tabKey]

    return (
      <Tabs.Trigger
        key={tabKey}
        value={tabKey}
        className={cn(`${config?.hidden?.className ? config.hidden.className : ''}`)}
      >
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
      <Tabs.Content
        key={tabKey}
        value={tabKey}
        className={cn(`${config?.hidden?.className ? config.hidden.className : ''}`)}
      >
        {config.content}
      </Tabs.Content>
    )
  }

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className={cn('w-full', className)}>
      <Tabs.List className="flex items-center flex-wrap mb-3">{tabsKeys.map(renderTabTrigger)}</Tabs.List>

      {tabsKeys.map(renderTabContent)}
    </Tabs>
  )
}
