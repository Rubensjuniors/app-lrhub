import { ArrowBigDown, ArrowBigUp, DollarSign } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/Card'

export interface CurrencyCardProps {
  type: 'entries' | 'exits' | 'leftovers'
  value: number
}

export function CurrencyCard({ type, value }: CurrencyCardProps) {
  const titlesAndIcons = {
    entries: {
      title: 'Entradas',
      icon: <ArrowBigUp color="green" />,
    },
    exits: {
      title: 'Saidas',
      icon: <ArrowBigDown color="red" />,
    },
    leftovers: {
      title: 'Sobras',
      icon: <DollarSign />,
    },
  }

  const cardConfig = titlesAndIcons[type]

  return (
    <Card className="min-w-[200px]">
      <CardHeader className="flex items-center justify-between">
        <h1>{cardConfig.title}</h1>
        <span>{cardConfig.icon}</span>
      </CardHeader>
      <CardContent>
        <span className="text-xl md:text-3xl sm:text-2xl">R$ {value}</span>
      </CardContent>
    </Card>
  )
}
