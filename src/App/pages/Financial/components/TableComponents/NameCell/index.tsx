interface NameCellProps {
  value: string | number | boolean
}

export const NameCell = ({ value }: NameCellProps) => {
  return (
    <span className="text-sm truncate overflow-hidden text-ellipsis max-w-[150px] md:max-w-[240px] block">
      {value}
    </span>
  )
}
