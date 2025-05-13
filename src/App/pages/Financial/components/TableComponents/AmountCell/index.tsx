import { EXIT_OR_ENTRY_TYPE } from '@/api/queries/types'

interface AmountCellProps {
  value: string | number
  row: {
    exit_or_entry_type: EXIT_OR_ENTRY_TYPE
  }
}

export const AmountCell = ({ value, row }: AmountCellProps) => {
  return (
    <span
      className={`${row.exit_or_entry_type === EXIT_OR_ENTRY_TYPE.ENTRIES ? 'text-green-500' : 'text-red-500'}`}
    >{`${row.exit_or_entry_type === EXIT_OR_ENTRY_TYPE.ENTRIES ? '+' : '-'} R$ ${Number(value).toFixed(2).replace('.', ',')}`}</span>
  )
}
