import React from 'react'
import Translation from 'src/containers/Translation'

export const DEFAULT_USER = { name: 'It is me', role: 'guest' }

export const GENERATE_TRANSLATIONS = (apiTranslations) => {
  let translations = {}
  Object.keys(apiTranslations).forEach((value, key) => {
    translations[value] =
      <Translation
        transKey={value}
        key={key}
      >
        {apiTranslations[value]}
      </Translation>
  })

  return translations
}
