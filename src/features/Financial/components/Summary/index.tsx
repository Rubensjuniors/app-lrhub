import { Skeleton } from '@/shared/components/Atoms'
import { useSummaryQuery } from '../../services/Summary/useSummaryQuery'
import { CurrencyCard } from '../CurrencyCard'

export function Summary() {
  const { data: summary, isLoading } = useSummaryQuery()

  return (
    <div className="flex items-center gap-4 flex-wrap">
      {isLoading && (
        <>
          <Skeleton className="w-[200px] h-[130px] flex-1" />
          <Skeleton className="w-[200px] h-[130px] flex-1" />
          <Skeleton className="w-[200px] h-[130px] flex-1" />
        </>
      )}
      {!isLoading &&
        summary?.map((item) => {
          return (
            <div className="flex-1" key={item.type}>
              <CurrencyCard type={item.type} value={item.value} />
            </div>
          )
        })}
    </div>
  )
}
