'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MobBurgerMenuStore } from './MobBurgerMenu/MobBurgerMenuStore'
import { MobBurgerMenu } from './MobBurgerMenu/MobBurgerMenu'
import style from './MobHeader.module.css'

// Assuming these are now imported as default exports from the Assets folder

// Assuming this is imported from a constants file
import { mobMenu, logo_svichka } from '@/assets/Icons'

const MobHeader: React.FC = () => {
  const handler = MobBurgerMenuStore((state) => state.handler)

  return (
    <div className={style.wrap} id="header">
      <div className={`customContainer ${style.header}`}>
        <Link href="/">
          <Image
            src={logo_svichka}
            alt="logo"
            className={style.header_logo}
          />
        </Link>

        <div className={style.header_right}>
          {/* <div className={style.header_right__phone}>
            <a href="tel:+380956989072" className={style.header_right__phone_link}>
              +380 95 698 90 72
            </a>
          </div> */}
          <div className={style.header_right__btns}>
            <a 
              href="https://send.monobank.ua/jar/qbu3WGhLU" 
              target="_blank" 
              rel="noopener noreferrer"
              className={style.header_right__btns_btn}
            >
              Донат
            </a>
          </div>
          <div className={style.header_right__burger} onClick={handler}>
            <Image
              src={mobMenu}
              alt="burger"
              className={style.header_right__burger_img}
              width={24}
              height={24}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <MobBurgerMenu />
    </div>
  )
}

export { MobHeader }
