import * as React from 'react'

import { cn } from '@/lib/utils'

import { TableBody } from './TableBody'
import { TableCaption } from './TableCaption'
import { TableCell } from './TableCell'
import { TableFooter } from './TableFooter'
import { TableHead } from './TableHead'
import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'


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

