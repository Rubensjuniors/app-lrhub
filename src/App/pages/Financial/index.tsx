import { CurrencyCard, CurrencyCardProps } from '@/components/CurrencyCard'
import { ExpenseCard } from '@/components/ExpenseCard'
import { SwitcherCalendar } from '@/components/SwitcherCalendar'
import { ExpenseTabs } from './TabsMobile'

const name = 'larissa Vitoria'

const currencyCards: CurrencyCardProps[] = [
  { type: 'entries', value: 1000 },
  { type: 'exits', value: 500 },
  { type: 'leftovers', value: 500 },
]

export default function Financial() {
  return (
    <div className="w-full p-5 xl:px-15">
      <header className="gap-4 flex items-center justify-center sm:justify-between flex-col sm:flex-row">
        <div className="flex items-start flex-col">
          <h1 className="text-2xl font-bold">Olá, {name}</h1>
          <small>Aqui estão todos os seus gastos.</small>
        </div>

        <SwitcherCalendar />
      </header>

      <div className="grid grid-cols-4 grid-rows-2 md:grid-rows-5 gap-4 mt-5">
        <div className="col-start-1 col-end-5 row-start-1 row-end-2 flex items-center gap-4 flex-wrap">
          {currencyCards.map((item) => {
            return (
              <div className="flex-1" key={item.type}>
                <CurrencyCard type={item.type} value={item.value} />
              </div>
            )
          })}
        </div>
        <div className="md:hidden col-start-1 col-end-5 row-start-2 row-end-4 flex mt-4">
          <ExpenseTabs />
        </div>
        <div
          className="hidden
        md:block col-start-1 col-end-5 lg:col-end-3 row-start-2 row-end-3 lg:row-end-4"
        >
          <ExpenseCard title="Gastos Fixos" handleAddTransaction={() => void 0} items={[]} type="fixedExpenses" />
        </div>
        <div
          className="hidden
        md:block lg:col-end-5 lg:col-start-3 col-start-1 col-end-5 lg:row-start-2 row-start-3 row-end-4"
        >
          <ExpenseCard
            title="Cartão de Credito (Parcelados)"
            handleAddTransaction={() => void 0}
            items={[]}
            type="creditCard"
          />
        </div>
        <div className="hidden md:block col-start-1 col-end-5 row-start-4 row-end-6">
          <ExpenseCard title="Debito ou Pix" handleAddTransaction={() => void 0} items={[]} type="pix" />
        </div>
      </div>
    </div>
  )
}
