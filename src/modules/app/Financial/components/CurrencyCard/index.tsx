import { ArrowBigDown, ArrowBigUp, DollarSign } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Card } from '@/components/Atoms'

export interface CurrencyCardProps {
  type: 'entries' | 'exits' | 'leftovers'
  value: number
}

export function CurrencyCard({ type, value }: CurrencyCardProps) {
  const { t } = useTranslation()

  const titlesAndIcons = {
    entries: {
      title: t('currency_card.entries'),
      icon: <ArrowBigUp color="green" />,
    },
    exits: {
      title: t('currency_card.exits'),
      icon: <ArrowBigDown color="red" />,
    },
    leftovers: {
      title: t('currency_card.total'),
      icon: <DollarSign />,
    },
  }

  const cardConfig = titlesAndIcons[type]

  return (
    <Card className="min-w-[200px]">
      <Card.Header className="flex items-center justify-between">
        <h1>{cardConfig.title}</h1>
        <span>{cardConfig.icon}</span>
      </Card.Header>
      <Card.Content>
        <span className="text-xl md:text-3xl sm:text-2xl">R$ {value}</span>
      </Card.Content>
    </Card>
  )
}
