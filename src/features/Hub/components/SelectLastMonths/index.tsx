import { Trans, useTranslation } from 'react-i18next'

import { Select } from '@/shared/components/Atoms'

import type { SelectLastMonthsProps } from './types'

export function SelectLastMonths({ chartPeriod, setChartPeriod }: SelectLastMonthsProps) {
  const { t } = useTranslation()

  const months = ['3', '5', '10']

  return (
    <Select
      value={chartPeriod.toString()}
      onValueChange={(value) => {
        setChartPeriod(Number(value))
        // eslint-disable-next-line no-console
        console.log({ value }, 'aqui SelectLastMonths')
      }}
    >
      <Select.Trigger className="w-[180px]">
        <Select.Value placeholder={t('expenses_chart.select_last_months.label')} />
      </Select.Trigger>
      <Select.Content>
        {months.map((item) => (
          <Select.Item key={item} value={item}>
            <Trans i18nKey="expenses_chart.select_last_months.option" values={{ month: item }} />
          </Select.Item>
        ))}
      </Select.Content>
    </Select>
  )
}
