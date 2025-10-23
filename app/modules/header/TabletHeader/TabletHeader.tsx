'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from './TabletHeader.module.css'

import { TabletBurgerMenuStore } from '@/app/modules/header/TabletHeader/TabletBurgerMenu/TabletBurgerMenuStore'
import { TabletBurgerMenu } from '@/app/modules/header/TabletHeader/TabletBurgerMenu/TabletBurgerMenu'
import { header_tablet_burger, logo_svichka } from '@/assets/Icons'

interface LinkItem {
  to: string
  label: string
}

const TabletHeader: React.FC = () => {
  const links: LinkItem[] = [
    { to: '/about/', label: 'Про нас' },
    { to: '/projects/', label: 'Проекти' },
    { to: '/events/', label: 'Події' },
    { to: '#contacts', label: 'Контакти' },
  ]

  const handler = TabletBurgerMenuStore((state) => state.handler)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={style.wrap} id="header">
      <div className={`customContainer ${style.header}`}>
        <Link href="/">
          <Image src={logo_svichka} alt="logo" className={style.header_logo} />
        </Link>
        <nav className={style.header_links}>
          {links.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              className={style.header_links__link}
              onClick={(e) => {
                e.preventDefault()
                if (to.startsWith('/')) {
                  // Перехід на іншу сторінку
                  window.location.href = to
                } else {
                  // Скрол до секції на поточній сторінці
                  scrollToSection(to.replace('#', ''))
                }
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className={style.header_right}>
          <div className={style.header_right__phone}>
            <a href="tel:+380956989072" className={style.header_right__phone_link}>
              +380 95 698 90 72
            </a>
          </div>
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
              src={header_tablet_burger}
              alt="burger"
              className={style.header_right__img}
            />
          </div>
        </div>
      </div>
      <TabletBurgerMenu />
    </div>
  )
}

export { TabletHeader }
