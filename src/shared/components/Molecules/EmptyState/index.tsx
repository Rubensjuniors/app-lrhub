import { useTranslation } from 'react-i18next'

import { Button, Card } from '@/shared/components/Atoms'
import { EMPTY_STATE_TYPE, type EmptyStateProps } from '@/shared/components/Molecules/EmptyState/types.ts'
import { emptyStateContent } from '@/shared/utils/emptyStateConfig.tsx'

export const EmptyState = ({ type = EMPTY_STATE_TYPE.GENERAL, onAction }: EmptyStateProps) => {
  const { t } = useTranslation()
  const selected = emptyStateContent[type]
  const Icon = selected.icon

  return (
    <Card className="p-12 text-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="rounded-full bg-muted p-6">
          <Icon className="h-12 w-12 text-muted-foreground" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{t(selected.title)}</h3>
          <p className="text-muted-foreground max-w-md">{t(selected.description)}</p>
        </div>
        {selected.actionLabel && onAction && (
          <Button onClick={onAction} className="mt-4">
            {t(selected.actionLabel)}
          </Button>
        )}
      </div>
    </Card>
  )
}
