import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table'

import { Table } from '@/components/Atoms/Table'
import { TableBody } from '@/components/Atoms/Table/TableBody'
import { TableCell } from '@/components/Atoms/Table/TableCell'
import { TableHead } from '@/components/Atoms/Table/TableHead'
import { TableHeader } from '@/components/Atoms/Table/TableHeader'
import { TableRow } from '@/components/Atoms/Table/TableRow'

interface CustomTableProps<TData>
  extends Omit<TableOptions<TData>, 'data' | 'columns' | 'getCoreRowModel'> {
  data: TData[]
  columns: ColumnDef<TData>[]
  emptyState: React.ReactNode
}

export function CustomTable<TData>({
  data,
  columns,
  emptyState,
  ...reactTableProps
}: CustomTableProps<TData>) {
  const table = useReactTable({
    data: data,
    columns: columns,
    ...reactTableProps,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length}>{emptyState}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
