import i18n from '@/lib/i18n'

export const changeLanguage = (language: string) => {
  i18n.changeLanguage(language)

  localStorage.setItem('i18nextLng', language)
}

export const getCurrentLanguage = () => {
  return i18n.language || 'en'
}

export const availableLanguages = ['pt-br', 'en']
