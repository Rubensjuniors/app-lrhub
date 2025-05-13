import { Table } from '@/components/shad-ui/Table'
import { ReactNode } from 'react'

interface Column<T = Record<string, unknown>> {
  key: string
  label: string
  position?: 'left' | 'right' | 'center'
  render?: (value: string | number | boolean, row: T) => ReactNode
}

interface CustomTableProps<T = Record<string, unknown>> {
  columns: Column<T>[]
  data: T[]
}

export function CustomTable<T = Record<string, unknown>>({ columns, data }: CustomTableProps<T>) {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.Head
              key={column.key}
              className={`text-${column?.position ? column?.position : 'left'}`}
            >
              {column.label}
            </Table.Head>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((row, rowIndex) => (
          <Table.Row key={rowIndex}>
            {columns.map((column) => (
              <Table.Cell key={column.key}>
                {column.render
                  ? column.render(row[column.key as keyof T] as string | number | boolean, row)
                  : String(row[column.key as keyof T] ?? '')}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
