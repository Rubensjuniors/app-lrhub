import * as React from 'react'
import { cn } from '@/lib/utils'
import { TableHeader } from './TableHeader'
import { TableBody } from './TableBody'
import { TableFooter } from './TableFooter'
import { TableHead } from './TableHead'
import { TableRow } from './TableRow'
import { TableCell } from './TableCell'
import { TableCaption } from './TableCaption'


function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table
        data-slot="table"
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  )
}
Table.Header = TableHeader
Table.Body = TableBody
Table.Footer = TableFooter
Table.Head = TableHead
Table.Row = TableRow
Table.Cell = TableCell
Table.Caption = TableCaption

export { Table }

