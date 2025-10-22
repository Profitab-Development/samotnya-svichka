'use client'

import React from 'react'
import CompaniesCard from '../../components/CompaniesCard/CompaniesCard'
import styles from './OurCompanies.module.css'
import {
  profitabImg,
  profitabLogo,
  tredImg,
  tredLogo,
  znaeshFirst,
  znaeshLogo,
  znaeshSecond,
} from '../../../assets/Icons/Companies/Companies'

import { StaticImageData } from 'next/image'
import style from '@/app/partners/GetPartners/GetPartners.module.css'

interface CompanyData {
  cardColor: string
  logo: StaticImageData
  title: string
  text: string
  firstImg?: StaticImageData
  secondImg: StaticImageData
  wrapItems: { text: string }[]
  markColor: string
  number: string
}

interface OurCompaniesProps {
  companiesData?: CompanyData[]
}

const MarkIcon: React.FC<{ color: string }> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M7.75356 1.95117C4.40329 1.95117 1.67322 4.68125 1.67322 8.03152C1.67322 11.3818 4.40329 14.1119 7.75356 14.1119C11.1038 14.1119 13.8339 11.3818 13.8339 8.03152C13.8339 4.68125 11.1038 1.95117 7.75356 1.95117ZM10.66 6.63304L7.21241 10.0806C7.12729 10.1657 7.01176 10.2144 6.89016 10.2144C6.76855 10.2144 6.65302 10.1657 6.5679 10.0806L4.84716 8.35986C4.67083 8.18353 4.67083 7.89167 4.84716 7.71534C5.02349 7.53901 5.31535 7.53901 5.49168 7.71534L6.89016 9.11382L10.0155 5.98852C10.1918 5.81219 10.4836 5.81219 10.66 5.98852C10.8363 6.16485 10.8363 6.45063 10.66 6.63304Z"
      fill={color}
    />
  </svg>
)

const OurCompanies: React.FC<OurCompaniesProps> = ({ companiesData }) => {
  const defaultCompaniesData: CompanyData[] = [
    {
      cardColor: styles.companies_green,
      logo: profitabLogo,
      title:
        'Мобільний застосунок для створення та управління інтернет-магазином',
      text: 'aima – це зручний інструмент для підприємців, які хочуть швидко запустити власний онлайн-магазин без складних налаштувань. Застосунок пропонує:',
      secondImg: profitabImg,
      wrapItems: [
        { text: 'Простий запуск магазину без технічних знань' },
        { text: 'Інтеграцію з платіжними системами та службами доставки' },
        {
          text: 'Мобільний застосунок для керування бізнесом з будь-якої точки',
        },
      ],
      markColor: '#0172EC',
      number: 'third',
    },
    {
      cardColor: styles.companies_yellow,
      logo: tredLogo,
      title: 'Інноваційна LMS-платформа для онлайн-навчання',
      text: 'Tred – це сучасне рішення для підприємців, які хочуть створювати та продавати власні онлайн-курси. Платформа надає:',
      secondImg: tredImg,
      wrapItems: [
        { text: 'Гнучкі інструменти для створення та управління курсами' },
        { text: 'Автоматизовані рішення для навчального процесу' },
        { text: 'Аналітику та інтеграцію з маркетинговими сервісами' },
      ],
      markColor: '#D92D20',
      number: 'second',
    },
    {
      cardColor: styles.companies_blue,
      logo: znaeshLogo,
      title: 'Агентство інтернет-маркетингу',
      text: 'Знаєш Agency допомагає підприємцям масштабувати бізнес за допомогою ефективного онлайн-просування. Спеціалізується на:',
      firstImg: znaeshFirst,
      secondImg: znaeshSecond,
      wrapItems: [
        { text: 'Таргетованій рекламі у Facebook та Instagram' },
        { text: 'Налаштуванні Google Ads, Google Shopping та аналітики' },
        { text: 'SMM-просуванні та створенні контент-стратегії' },
        { text: 'Розробці інтернет-магазинів під ключ' },
      ],
      markColor: '#442CE9',
      number: 'first',
    },
  ]

  const dataToRender = companiesData ?? defaultCompaniesData

  return (
    <div className={`customContainer ${styles.companies}`} id="ourCompanies">
      <div className={style.wrap_top}>
        <h2 className={style.wrap_top__title}>
          <span>Генеральні партнери</span>
        </h2>
        <div className={style.wrap_top__back}>партнери</div>
        <div>
          <p className={style.mission_subtile}>
            <span className={style.mission_subtile_span}></span>
            Ми об’єднали зусилля з провідними компаніями, щоб допомогти вам
            ефективно розвивати інтернет-магазин. Наші генеральні партнери
            пропонують спеціальні умови та знижки для учасників Асоціації.
          </p>
        </div>
      </div>
      <div className={styles.companies_wrap}>
        {dataToRender.map((company, index) => (
          <CompaniesCard
            key={index}
            cardColor={company.cardColor}
            companiesLogo={company.logo}
            companiesTitle={company.title}
            companiesText={company.text}
            firstImg={company.firstImg}
            secondImg={company.secondImg}
            companiesWrapItems={company.wrapItems}
            companiesMark={<MarkIcon color={company.markColor} />}
            number={company.number}
          />
        ))}
      </div>
    </div>
  )
}

export { OurCompanies }
