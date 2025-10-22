'use client'

import React from 'react'
import Image from 'next/image'
import { useStaticTranslations } from '@/hooks/useStaticTranslations'
import { TabletBurgerMenuStore } from './TabletBurgerMenuStore'
import style from './TabletBurgerMenu.module.css'
import { tg_white, MobTelIcon } from '@/assets/Icons'
// import LanguagesChanger from '@/app/modules/header/LanguagesChanger/LanguagesChanger'

const TabletBurgerMenu: React.FC = () => {
  const { t } = useStaticTranslations()
  const show = TabletBurgerMenuStore((state) => state.show)
  const handleClose = TabletBurgerMenuStore((state) => state.handleClose)

  return (
    <>
      <div
        className={`${style.backdrop} ${show ? style.backdrop_active : ''}`}
        onClick={handleClose}
      ></div>
      <div className={`${style.wrap} ${show ? style.wrap_active : ''}`}>
        <div className={`customContainer ${style.wrap_right}`}>
          <div className={style.wrap_right__btns}>
            <a
              href="https://t.me/aoso_org_ua"
              target="_blank"
              rel="noopener noreferrer"
              className={style.wrap_right__btns_btnTg}
            >
              {t('telegram')}
              <Image src={tg_white} alt="tgIcon" width={24} height={24} />
            </a>
            <a href="tel:+380555555555" className={style.wrap_right__btns_btn}>
              +38 055 555 55 55
              <Image src={MobTelIcon} alt="phone" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export { TabletBurgerMenu }
