interface DateCellProps {
  value: string | number | boolean
}

export const DateCell = ({ value }: DateCellProps) => {
  return new Date(String(value)).toLocaleDateString('pt-BR')
}
