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
          <a href="tel:+380555555555" className={style.header_right__phone}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="34"
              viewBox="0 0 40 34"
              fill="none"
            >
              <path
                d="M8.99976 12H30.8664"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8.99976 18H30.8664"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8.99976 24H30.8664"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M29.9998 20.8456L24.1437 20.1678L21.3434 22.9681C18.1889 21.3637 15.6249 18.7997 14.0206 15.6452L16.8319 12.8338L16.1541 7H10.0314C9.38686 18.3121 18.6877 27.6129 29.9998 26.9684V20.8456Z"
                fill="#D92D20"
              />
            </svg>
          </a>
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
