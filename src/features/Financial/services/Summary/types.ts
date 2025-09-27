export type ITypeSummary = 'entries' | 'exits' | 'total'

type ISummaryItem = { type: ITypeSummary, value: number }

export type ISummary = ISummaryItem[]