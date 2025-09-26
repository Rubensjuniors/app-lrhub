import { useTranslation } from 'react-i18next'

import { Icon, Text } from '@/shared/components/Atoms'

export function Welcome() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center gap-2">
      <Text className="text-gray-900">{t('auth.title')}</Text>
      <Icon id="logo" iconSize={180} />
    </div>
  )
}
