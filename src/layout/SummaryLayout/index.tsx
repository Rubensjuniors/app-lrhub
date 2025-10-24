import { Outlet } from '@tanstack/react-router'
import { Suspense } from 'react'

import { Summary } from '@/features/Financial/components/Summary'
import { HiddenMoneyToggleProvider } from '@/features/Financial/contexts/HiddenMoneyToggleContext'
import { Wellcome } from '@/features/Wellcome'
import { Loading } from '@/shared/components/Atoms'

export default function SummaryLayout() {
  return (
    <HiddenMoneyToggleProvider>
      <div className="w-full py-4 px-5">
        <Wellcome classNames="mb-4" />

        <Summary />
        <div className="mt-4">
          <Suspense fallback={<Loading variant="overlay" />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </HiddenMoneyToggleProvider>
  )
}
