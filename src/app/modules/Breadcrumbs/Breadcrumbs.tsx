'use client'

import React, { useState } from 'react'
import style from './Breadcrumbs.module.css'
import { ArrowIcon } from './ArrowIcon'
import { useRouter, usePathname } from 'next/navigation'
import { useStaticTranslations } from '@/hooks/useStaticTranslations'

interface Link {
  name: string
  isActive: boolean
  link: string
}

interface BreadcrumbsProps {
  links: Link[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links }) => {
  const { t } = useStaticTranslations()
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navigator = (link: string) => {
    if (link !== pathname) {
      router.push(link)
    }
  }

  return (
    <div className={style.wrap}>
      <div
        onClick={() => navigator('/')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${style.wrap_link} ${style.wrap_linkMain}`}
      >
        <ArrowIcon fill={isHovered ? '#D92D20' : '#FFF'} />
        <span>{t('breadcrumbs.main')}</span>
      </div>
      {links.map(({ name, isActive, link }) => (
        <div
          onClick={() => {
            if (!isActive) navigator(link)
          }}
          key={name}
          className={isActive ? style.wrap_linkActive : style.wrap_link}
        >
          {name}
        </div>
      ))}
    </div>
  )
}

export { Breadcrumbs }
