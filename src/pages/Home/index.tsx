import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('bemVindo')}</h1>
      <p>{t('descricao')}</p>
    </div>
  )
}
