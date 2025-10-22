'use client'
import React, { useState, useMemo } from 'react'
import style from './Footer.module.css'
import * as Icons from '../../../assets/Icons'
import {
  facebookLink,
  // instagramLink,
  mail,
  mobTel,
  telegramLink,
  // tiktokLink,
} from '@/constants'
import { Link } from 'react-scroll'
import { useTranslations } from 'next-intl'
import Image, { StaticImageData } from 'next/image'

const Footer: React.FC = () => {
  const t = useTranslations()

  const date = new Date().getFullYear()

  const links = useMemo(
    () => [
      // { to: '/services', label: t('header.link1') }, // Зміна для абсолютних шляхів
      // { to: '/cases', label: t('header.link2') },
      // { to: '/results', label: t('header.link3') },
      // { to: '/contacts', label: t('header.link4') },
      { to: '/privacy', label: t('header.link7') },
    ],
    [t],
  )

  const socialsData = useMemo(
    () => [
      // { normal: Icons.MobInstS, hover: Icons.MobInstH, link: instagramLink },
      { normal: Icons.MobFbS, hover: Icons.MobFbH, link: facebookLink },
      { normal: Icons.MobTgS, hover: Icons.MobTgH, link: telegramLink },
      // { normal: Icons.MobTikS, hover: Icons.MobTikH, link: tiktokLink },
    ],
    [],
  )

  return (
    <div className={style.bg} id="contacts">
      <div className={`customContainer ${style.wrap}`}>
        <Image
          src={Icons.logo_svichka}
          alt="logo"
          className={style.wrap_logo}
          loading="lazy"
        />
        <nav className={style.wrap_links}>
          {links.map(({ to, label }) => (
            <a key={to} href={to} className={style.wrap_links__link}>
              {label} {/* Заміна Link на <a> для звичайного переходу */}
            </a>
          ))}
        </nav>
        <AddressSection />
        <OffertaSection date={date} />
        <ContactSection />
        <div className={style.wrap_socials}>
          {socialsData.map((soc, index) => (
            <SocialMediaIcon
              key={index}
              normal={soc.normal}
              hover={soc.hover}
              link={soc.link}
            />
          ))}
        </div>
        <ScrollToTop />
      </div>
    </div>
  )
}

const SocialMediaIcon: React.FC<{
  normal: StaticImageData
  hover: StaticImageData
  link: string
}> = ({ normal, hover, link }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image
        src={isHovered ? hover : normal}
        alt="social-icon"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={style.wrap_socials__img}
        loading="lazy"
      />
    </a>
  )
}

const AddressSection: React.FC = () => {
  const t = useTranslations()
  return (
    <div className={style.wrap_address}>
      <div className={style.wrap_address__item}>
        <a
          target={'_blank'}
          className={style.wrap_address__item}
          href="https://maps.app.goo.gl/RGoCenuNxLYihjsY7"
        >
          {t('footer.address.lviv.first')} <br />
          {t('footer.address.lviv.second')}
        </a>
      </div>
    </div>
  )
}

const OffertaSection: React.FC<{ date: number }> = ({}) => {
  const t = useTranslations()
  return (
    <div className={style.wrap_offerta}>
      © 2025 Усі права захищені
      <br />
      {t('footer.offerta.first')} <br />
      {t('footer.offerta.second')}
    </div>
  )
}

const ContactSection: React.FC = () => {
  const t = useTranslations()
  return (
    <div className={style.wrap_contacts}>
      <div className={style.wrap_contacts__txt}>{t('footer.contacts')}</div>
      <a href={`tel:${mobTel}`} className={style.wrap_contacts__link}>
        {mobTel}
      </a>
      <a href={`mailto:${mail}`} className={style.wrap_contacts__link}>
        {mail}
      </a>
    </div>
  )
}

const ScrollToTop: React.FC = () => {
  const t = useTranslations()
  return (
    <Link to="header" smooth duration={500} className={style.wrap_scroll}>
      <div className={style.wrap_scroll__txt}>{t('footer.scroll')}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        className={style.wrap_scroll__arrow}
      >
        <path
          d="M1.06154 8.28143C1.19489 8.42188 1.37799 8.50446 1.57154 8.51143C1.77901 8.51527 1.97856 8.43182 2.12154 8.28143L7.82153 2.58144V15.8015C7.82692 16.2135 8.15957 16.5461 8.57153 16.5515C8.9835 16.5461 9.31615 16.2135 9.32153 15.8015V2.58142L15.0215 8.28143C15.2127 8.47793 15.4941 8.55753 15.7599 8.49024C16.0256 8.42296 16.2353 8.21902 16.3099 7.95524C16.3845 7.69147 16.3127 7.40793 16.1215 7.21143L9.12154 0.21143C8.82444 -0.0704768 8.35864 -0.0704768 8.06154 0.21143L1.06154 7.21143C0.918008 7.35245 0.837158 7.54522 0.837158 7.74643C0.837158 7.94764 0.918008 8.14042 1.06154 8.28143Z"
          fill="#C0C0C0"
        />
      </svg>
    </Link>
  )
}

export { Footer }
