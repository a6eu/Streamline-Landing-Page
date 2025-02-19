'use client'

import { useParams } from 'next/navigation'
import en from '../locales/en.json'
import ru from '../locales/ru.json'
import kz from '../locales/kz.json'

const translations = { en, ru, kz }

type NestedKeyOf<ObjectType extends object> = {
    [Key in keyof ObjectType &
        (string | number)]: ObjectType[Key] extends object
        ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
        : `${Key}`
}[keyof ObjectType & (string | number)]

export function useTranslation() {
    const params = useParams()
    const locale = (params?.locale as keyof typeof translations) || 'en'

    const t = <T = string>(
        key: NestedKeyOf<typeof en>,
        params?: Record<string, string>
    ): T => {
        try {
            const keys = key.split('.') as (keyof (typeof translations)['en'])[]

            let translation = keys.reduce<any>(
                (obj, k) => (obj && obj[k] !== undefined ? obj[k] : null),
                translations[locale]
            )

            if (typeof translation === 'string' && params) {
                Object.entries(params).forEach(([paramKey, value]) => {
                    translation = translation.replace(`{${paramKey}}`, value)
                })
            }

            return (translation !== null ? translation : key) as unknown as T
        } catch (error) {
            console.error(`Translation error for key "${key}":`, error)
            return key as unknown as T
        }
    }

    return { t, locale }
}
