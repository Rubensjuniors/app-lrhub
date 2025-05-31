import { ColumnDef } from '@tanstack/react-table'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { CustomTable } from './index'

interface TestData {
  id: number
  name: string
  email: string
}

describe('CustomTable', () => {
  const mockColumns = [
    {
      accessorKey: 'name',
      header: 'Nome',
    },
    {
      accessorKey: 'email',
      header: 'Email',
    },
  ]

  const mockData: TestData[] = [
    { id: 1, name: 'João Silva', email: 'joao@email.com' },
    { id: 2, name: 'Maria Santos', email: 'maria@email.com' },
  ]

  const emptyState = <div>Nenhum dado encontrado</div>

  it('deve renderizar a tabela corretamente', () => {
    render(<CustomTable data={mockData} columns={mockColumns} emptyState={emptyState} />)

    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('deve renderizar os cabeçalhos corretamente', () => {
    render(<CustomTable data={mockData} columns={mockColumns} emptyState={emptyState} />)

    expect(screen.getByText('Nome')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('deve renderizar os dados corretamente', () => {
    render(<CustomTable data={mockData} columns={mockColumns} emptyState={emptyState} />)

    expect(screen.getByText('João Silva')).toBeInTheDocument()
    expect(screen.getByText('joao@email.com')).toBeInTheDocument()
    expect(screen.getByText('Maria Santos')).toBeInTheDocument()
    expect(screen.getByText('maria@email.com')).toBeInTheDocument()
  })

  it('deve renderizar o estado vazio quando não houver dados', () => {
    render(<CustomTable data={[]} columns={mockColumns} emptyState={emptyState} />)

    expect(screen.getByText('Nenhum dado encontrado')).toBeInTheDocument()
  })

  it('deve aplicar o estado selected quando a linha estiver selecionada', () => {
    const columnsWithSelection: ColumnDef<TestData>[] = [
      ...mockColumns,
      {
        id: 'select',
        header: 'Selecionar',
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      },
    ]

    render(
      <CustomTable
        data={mockData}
        columns={columnsWithSelection}
        emptyState={emptyState}
        enableRowSelection
      />,
    )

    const checkbox = screen.getAllByRole('checkbox')[0]
    checkbox.click()

    const selectedRow = screen.getByText('João Silva').closest('tr')
    expect(selectedRow).toHaveAttribute('data-state', 'selected')
  })
})
