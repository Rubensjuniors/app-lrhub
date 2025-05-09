import { Table } from '@/components/shad-ui/Table'
import { ReactNode } from 'react'

interface Column {
  key: string
  label: string
  position?: 'left' | 'right' | 'center'
  render?: (value: string | number | boolean, row: Record<string, unknown>) => ReactNode
}

interface CustomTableProps {
  columns: Column[]
  data: Record<string, unknown>[]
}

export function CustomTable({ columns, data }: CustomTableProps) {
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
                  ? column.render(row[column.key] as string | number | boolean, row)
                  : String(row[column.key] ?? '')}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
