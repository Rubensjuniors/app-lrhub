import { Button } from '@/components/shad-ui/Button'
import { BanknoteArrowUp } from 'lucide-react'

interface PaidButtonProps {
  value: string | number | boolean
  rowId: string | number
}

export const PaidButton = ({ value, rowId }: PaidButtonProps) => {
  return (
    <Button variant="ghost" size="icon" onClick={() => console.log(value, rowId)}>
      <BanknoteArrowUp color={`${value ? 'green' : 'red'}`} />
    </Button>
  )
}
