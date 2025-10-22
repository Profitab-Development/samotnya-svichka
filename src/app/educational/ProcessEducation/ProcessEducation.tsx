'use client'
import React from 'react'
import style from './ProcessEducation.module.css'
import {
  proces1,
  proces2,
  proces3,
  proces4,
  proces5,
  proces6,
  ArrowProcess,
} from '@/assets/Images/EducationPage/Process/index'

import Image, { StaticImageData } from 'next/image'

interface ProcessItem {
  number: number
  image: StaticImageData
  alt: string
  titleKey: string
  subtitleKey?: string
}

const processItems: ProcessItem[] = [
  {
    number: 1,
    image: proces1,
    alt: 'process_smm',
    titleKey: 'Вебінари та тренінги ',
    subtitleKey:
      'Наші онлайн-заняття допоможуть вам отримати найактуальніші знання для розвитку вашого інтернет-магазину:',
  },
  {
    number: 2,
    image: proces2,
    alt: 'process_page',
    titleKey: 'Маркетинг та просування ',
    subtitleKey:
      'Як залучати нових клієнтів, створювати ефективні рекламні кампанії та будувати лояльність до бренду.',
  },
  {
    number: 3,
    image: proces3,
    alt: 'process_note',
    titleKey: 'SEO та оптимізація сайту',
    subtitleKey:
      'Покрокові інструкції щодо покращення позицій у пошукових системах, збільшення органічного трафіку та конверсії.',
  },
  {
    number: 4,
    image: proces4,
    alt: 'process_gift',
    titleKey: 'Реклама',
    subtitleKey:
      'Навчимо налаштовувати рекламні кампанії у Google Ads, Facebook Ads, TikTok Ads, аналізувати їхню ефективність і мінімізувати витрати.',
  },
  {
    number: 5,
    image: proces5,
    alt: 'process_target',
    titleKey: 'SMM (соціальні мережі)',
    subtitleKey:
      'Розробка контент-стратегії, створення візуального контенту, налаштування таргетованої реклами та робота з аудиторією.',
  },
  {
    number: 6,
    image: proces6,
    alt: 'process_dollar',
    titleKey: 'Контент-маркетинг',
    subtitleKey:
      'Як писати тексти, що продають, розробляти блоги, створювати відеоогляди та ефективно використовувати email-маркетинг.',
  },
]

const ProcessEducation: React.FC = () => {
  return (
    <div className={style.bg}>
      <div className={`customContainer ${style.wrap}`}>
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
            Що <span> ми пропонуємо</span>
          </h2>
          <div className={style.wrap_top__back}>ми пропонуємо</div>
          <div>
            <p className={style.mission_subtile}>
              Розвиток інтернет-магазину вимагає знань і навичок у маркетингу,
              SEO, рекламі та продажах. Ми створили навчальні програми, які
              допоможуть вам швидко освоїти ключові інструменти та впровадити їх
              у ваш бізнес. Наші освітні заходи безкоштовні, а матеріали –
              практичні та адаптовані до реалій українського e-commerce.
            </p>
          </div>
        </div>
        <div className={style.wrap_boxes}>
          {processItems.map(({ number, image, alt, titleKey, subtitleKey }) => (
            <div
              key={number}
              className={
                number === 1 ? style.wrap_boxes__mainBox : style.wrap_boxes__box
              }
            >
              <Image
                src={image}
                alt={alt}
                className={
                  number === 1
                    ? style.wrap_boxes__mainBox_img
                    : style.wrap_boxes__box_img
                }
                loading="lazy"
              />
              <p
                className={
                  number === 1
                    ? style.wrap_boxes__mainBox_title
                    : style.wrap_boxes__box_title
                }
              >
                {titleKey}
              </p>
              {subtitleKey && (
                <p
                  className={
                    number === 1
                      ? style.wrap_boxes__mainBox_subtitle
                      : style.wrap_boxes__box_subtitle
                  }
                >
                  {subtitleKey}
                </p>
              )}
            </div>
          ))}
        </div>
        <Image
          className={style.arrow_process}
          src={ArrowProcess}
          alt="ArrowProcess"
        />
      </div>
    </div>
  )
}

export { ProcessEducation }
