export const formatCurrency = (value: number, locale = 'pt-BR') => {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}
