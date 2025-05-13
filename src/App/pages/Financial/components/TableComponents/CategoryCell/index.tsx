import { Tag } from '@/components/shad-ui/Tag'
import { ICategory } from '@/api/queries/types'

interface CategoryCellProps {
  value: ICategory
}

export const CategoryCell = ({ value }: CategoryCellProps) => {
  return <Tag variant={'default'}>{value?.icon + ' ' + value?.name}</Tag>
}
