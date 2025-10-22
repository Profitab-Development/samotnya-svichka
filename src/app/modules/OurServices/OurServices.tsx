'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useStaticTranslations } from '@/hooks/useStaticTranslations'
import { StaticImageData } from 'next/image'
import style from './OurServices.module.css'
import ServiceCard from './ServiceCard/ServiceCard'

import {
  service1,
  service2,
  service3,
  service4,
} from '@/assets/Images/Services/Index'

interface ServiceInfo {
  photo: StaticImageData
  titleFirst: string
  titleSecond: string
  text: string
  fn?: () => void
}

const OurServices: React.FC = () => {
  const { t } = useStaticTranslations()
  const router = useRouter()

  const ourServicesText: ServiceInfo[] = [
    {
      photo: service1,
      titleFirst: t('ourServices.card1.titleFirst'),
      titleSecond: t('ourServices.card1.titleSecond'),
      text: t('ourServices.card1.text'),
      fn: () => router.push('/consulting-support'),
    },
    {
      photo: service2,
      titleFirst: t('ourServices.card2.titleFirst'),
      titleSecond: t('ourServices.card2.titleSecond'),
      text: t('ourServices.card2.text'),
      fn: () => router.push('/educational'),
    },
    {
      photo: service3,
      titleFirst: t('ourServices.card3.titleFirst'),
      titleSecond: t('ourServices.card3.titleSecond'),
      text: t('ourServices.card3.text'),
      fn: () => router.push('/partners'),
    },
    {
      photo: service4,
      titleFirst: t('ourServices.card4.titleFirst'),
      titleSecond: t('ourServices.card4.titleSecond'),
      text: t('ourServices.card4.text'),
      fn: () => router.push('/networking'),
    },
  ]

  return (
    <div className={`customContainer ${style.ourServices}`} id="services">
      <div className={style.titleBox}>
        <h2 className={style.titleBox_title}>
          {t('ourServices.titleFirst')}{' '}
          <span>{t('ourServices.titleSecond')}</span>
        </h2>
        <div className={style.titleBox_back}>
          {t('ourServices.titleSecond')}
        </div>
        <p className={style.titleBox_subtitle}>
          {t('ourServices.titleSubtitle')}
        </p>
      </div>
      <div>
        <div className={`mb-4 ${style.customRow}`}>
          {ourServicesText.map((el, index) => (
            <ServiceCard info={el} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { OurServices }
