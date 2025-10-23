'use client'

import React, { useEffect, useState, useTransition } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import style from './LanguagesChanger.module.css'
import { arrowDown, flag_ukraine, flag_usa } from '@/assets/Icons'

interface Language {
  language: string
  img: string
}

const languages: Language[] = [
  {
    language: 'ua',
    img: flag_ukraine,
  },
  {
    language: 'en',
    img: flag_usa,
  },
]

const LanguagesChanger: React.FC = () => {
  const [cookieLng, setCookieLng] = useState('ru')
  const [isActive, setIsActive] = useState<boolean>(false)
  const [hasInteracted, setHasInteracted] = useState<boolean>(false)

  const router = useRouter()
  const [, startTransition] = useTransition()

  const setCookiesLanguage = () => {
    const cookieLocale = document.cookie
      .split('; ')
      .find((row) => row.startsWith('locale='))
      ?.split('=')[1]

    if (cookieLocale) {
      setCookieLng(cookieLocale)
    }
  }

  useEffect(() => {
    setCookiesLanguage()
  }, [])

  const changeLanguage = (locale: string) => {
    document.cookie = `locale=${locale}; path=/` // Оновлюємо куку
    startTransition(() => {
      router.refresh()
    })
    setCookiesLanguage()
    setIsActive(false) // Закриваємо меню після вибору мови
  }

  const currentLanguage =
    languages.find((lang) => lang.language === cookieLng) || languages[0]

  return (
    <>
      <div
        className={`${style.backdrop} ${isActive ? style.backdrop_active : ''}`}
        onClick={() => setIsActive(false)}
      ></div>
      <div
        className={`${style.wrap} ${hasInteracted ? style.interacted : ''}`}
        onClick={() => {
          setIsActive(!isActive)
          setHasInteracted(true)
        }}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <div className={style.wrap_box}>
          <Image
            src={currentLanguage.img}
            alt="flag"
            className={style.wrap_box__flag}
            width={24}
            height={24}
          />
          <div className={style.wrap_box__lang}>
            {currentLanguage.language.toUpperCase()}
          </div>
          <Image
            src={arrowDown}
            alt="arrow"
            className={`${style.wrap_box__arrow} ${
              isActive
                ? style.wrap_box__arrowActive
                : style.wrap_box__arrowDisable
            }`}
            width={24}
            height={24}
          />
        </div>

        <div
          className={`${style.wrap_add} ${
            isActive ? style.wrap_addActive : style.wrap_addDisable
          }`}
        >
          {languages.map((lang) => {
            if (lang.language !== cookieLng) {
              return (
                <div
                  key={lang.language}
                  onClick={() => changeLanguage(lang.language)}
                  className={style.wrap_add__box}
                >
                  <Image src={lang.img} alt="flag" width={24} height={24} />
                  <div>{lang.language.toUpperCase()}</div>
                </div>
              )
            } else return null
          })}
        </div>
      </div>
    </>
  )
}

export default LanguagesChanger
