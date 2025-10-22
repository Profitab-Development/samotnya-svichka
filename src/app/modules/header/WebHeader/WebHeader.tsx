// 'use client'
// import React, { useEffect, useState } from 'react'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// import Image from 'next/image'
// import { useStaticTranslations } from '@/hooks/useStaticTranslations'
// import style from './WebHeader.module.css'
// import { TelDropdown } from '../TelDropdawn/TelDropdown'
// import { HeaderForm } from '../HeaderForm/HeaderForm'
// import { headerFormStore } from '../HeaderForm/headerFormStore'
// import { backCall, HeaderLogo } from '@/assets/Icons'
//
// interface LinkItem {
//   to: string
//   label: string
//   dropdownItems?: { to: string; label: string }[]
// }
//
// const WebHeader: React.FC = () => {
//   const { t } = useStaticTranslations()
//   const pathname = usePathname()
//
//   const [activeNavLink, setActiveNavLink] = useState<string>('')
//   const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
//
//   useEffect(() => {
//     setActiveNavLink(pathname.substring(1))
//   }, [pathname])
//
//   // const links: LinkItem[] = [
//   //   {
//   //     to: 'services',
//   //     label: t('header.link1'),
//   //     dropdownItems: [
//   //       { to: 'seo', label: t('header.services.seo') },
//   //       { to: 'smm', label: t('header.services.smm') },
//   //       { to: 'ads', label: t('header.services.ads') },
//   //     ],
//   //   },
//   //   { to: 'cases', label: t('header.link2') },
//   //   { to: 'results', label: t('header.link3') },
//   //   { to: 'contacts', label: t('header.link4') },
//   // ]
//
//   const links: LinkItem[] = [
//     { to: 'services', label: t('header.link1') },
//     // { to: 'cases', label: t('header.link2') },
//     // { to: 'results', label: t('header.link3') },
//     { to: 'contacts', label: t('header.link4') },
//   ]
//
//   // eslint-disable-next-line
//   const handler = headerFormStore((state: any) => state.handler)
//
//   return (
//     <div className={style.wrap} id="header">
//       <div className={`customContainer ${style.header}`}>
//         <Link href="/">
//           <Image src={HeaderLogo} alt="logo" className={style.header_logo} />
//         </Link>
//         {/*<nav className={style.header_links}>*/}
//         {/*  {links.map(({ to, label, dropdownItems }) => (*/}
//         {/*    <div*/}
//         {/*      key={to}*/}
//         {/*      className={style.header_links__item}*/}
//         {/*      onMouseEnter={() => dropdownItems && setIsDropdownOpen(true)}*/}
//         {/*      onMouseLeave={() => dropdownItems && setIsDropdownOpen(false)}*/}
//         {/*    >*/}
//         {/*      <Link*/}
//         {/*        href={`/${to}`}*/}
//         {/*        className={`${style.header_links__link} ${*/}
//         {/*          activeNavLink === to ? style.header_links__link_active : ''*/}
//         {/*        }`}*/}
//         {/*      >*/}
//         {/*        {label}*/}
//         {/*      </Link>*/}
//         {/*      {dropdownItems && (*/}
//         {/*        <svg*/}
//         {/*          className={`${style.arrow} ${isDropdownOpen ? style.arrow_active : ''}`}*/}
//         {/*          xmlns="http://www.w3.org/2000/svg"*/}
//         {/*          width="13"*/}
//         {/*          height="8"*/}
//         {/*          viewBox="0 0 13 8"*/}
//         {/*          fill="none"*/}
//         {/*        >*/}
//         {/*          <path*/}
//         {/*            fillRule="evenodd"*/}
//         {/*            clipRule="evenodd"*/}
//         {/*            d="M11.7569 0.5C11.5143 0.5 11.2718 0.592911 11.0867 0.77937L6.7041 5.19583L2.32146 0.77937C1.95134 0.407089 1.35133 0.407089 0.981214 0.77937C0.611731 1.15229 0.611731 1.75685 0.981214 2.12976L6.03398 7.22079C6.40409 7.59307 7.00411 7.59307 7.37422 7.22079L12.427 2.12976C12.7965 1.75685 12.7965 1.15229 12.427 0.77937C12.2419 0.592911 11.9994 0.5 11.7569 0.5Z"*/}
//         {/*            fill="#212121"*/}
//         {/*          />*/}
//         {/*        </svg>*/}
//         {/*      )}*/}
//         {/*      {dropdownItems && isDropdownOpen && (*/}
//         {/*        <div className={style.dropdown}>*/}
//         {/*          {dropdownItems.map(({ to, label }) => (*/}
//         {/*            <Link*/}
//         {/*              key={to}*/}
//         {/*              href={`/${to}`}*/}
//         {/*              className={style.dropdown_item}*/}
//         {/*            >*/}
//         {/*              {label}*/}
//         {/*            </Link>*/}
//         {/*          ))}*/}
//         {/*        </div>*/}
//         {/*      )}*/}
//         {/*    </div>*/}
//         {/*  ))}*/}
//         {/*</nav>*/}
//
//         <nav className={style.header_links}>
//           {links.map(({ to, label }) => (
//             <Link
//               key={to}
//               href={`/${to}`}
//               className={`${style.header_links__link} ${
//                 activeNavLink === to ? style.header_links__link_active : ''
//               }`}
//             >
//               {label}
//             </Link>
//           ))}
//         </nav>
//         <div className={style.header_right}>
//           <div className={style.header_right__dropdowns}>
//             <TelDropdown />
//           </div>
//           <div className={style.header_right__btns}>
//             <button className={style.header_right__btns_btn} onClick={handler}>
//               <span>{t('header.feedback')}</span>
//               <Image src={backCall} alt="backCall" width={24} height={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//       <HeaderForm />
//     </div>
//   )
// }
//
// export { WebHeader }

// ЦЕ РОБОЧИЙ ХЕДЕР БУВ НА ЛІНКИ

// 'use client'
// import React, { useEffect, useState } from 'react'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// import Image from 'next/image'
// import { useStaticTranslations } from '@/hooks/useStaticTranslations'
// import style from './WebHeader.module.css'
// import { TelDropdown } from '../TelDropdawn/TelDropdown'
// import { HeaderForm } from '../HeaderForm/HeaderForm'
// import { headerFormStore } from '../HeaderForm/headerFormStore'
// import { backCall, HeaderLogo } from '@/assets/Icons'
//
// interface LinkItem {
//   to: string
//   label: string
// }
//
// const WebHeader: React.FC = () => {
//   const { t } = useStaticTranslations()
//   const pathname = usePathname()
//
//   const [activeNavLink, setActiveNavLink] = useState<string>('')
//
//   useEffect(() => {
//     setActiveNavLink(pathname.substring(1))
//   }, [pathname])
//
//   const links: LinkItem[] = [
//     { to: 'about', label: t('header.link6') },
//     { to: 'services', label: t('header.link1') },
//     { to: 'assoc', label: t('header.link5') },
//     { to: '/contacts', label: t('header.link4') },
//   ]
//
//   // eslint-disable-next-line
//   const handler = headerFormStore((state: any) => state.handler)
//
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id)
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' })
//     }
//   }
//
//   return (
//     <div className={style.wrap} id="header">
//       <div className={`customContainer ${style.header}`}>
//         <Link href="/">
//           <Image src={HeaderLogo} alt="logo" className={style.header_logo} />
//         </Link>
//         <nav className={style.header_links}>
//           {links.map(({ to, label }) => (
//             <a
//               key={to}
//               href={`#${to}`}
//               className={`${style.header_links__link} ${
//                 activeNavLink === to ? style.header_links__link_active : ''
//               }`}
//               onClick={(e) => {
//                 e.preventDefault()
//                 scrollToSection(to)
//               }}
//             >
//               {label}
//             </a>
//           ))}
//         </nav>
//         <div className={style.header_right}>
//           <div className={style.header_right__dropdowns}>
//             <TelDropdown />
//           </div>
//           <div className={style.header_right__btns}>
//             <button className={style.header_right__btns_btn} onClick={handler}>
//               <span>{t('header.feedback')}</span>
//               <Image src={backCall} alt="backCall" width={24} height={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//       <HeaderForm />
//     </div>
//   )
// }
//
// export { WebHeader }

// ЦЕ РОБОЧИЙ ХЕДЕР БУВ НА ЛІНКИ

'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useStaticTranslations } from '@/hooks/useStaticTranslations'
import style from './WebHeader.module.css'
import { HeaderForm } from '../HeaderForm/HeaderForm'
import { backCall, logo_svichka } from '@/assets/Icons'

interface LinkItem {
  to: string
  label: string
}

const WebHeader: React.FC = () => {
  const { t } = useStaticTranslations()
  const pathname = usePathname()
  const router = useRouter()

  const [activeNavLink, setActiveNavLink] = useState<string>('')

  useEffect(() => {
    setActiveNavLink(pathname.substring(1))
  }, [pathname])

  useEffect(() => {
    // Скрол до секції при переході з іншої сторінки через #hash
    const hash = window.location.hash
    if (hash) {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100) // невелика затримка, щоб DOM встиг завантажитись
      }
    }
  }, [])

  const links: LinkItem[] = [
    { to: '/about', label: t('header.link6') },
    { to: 'services', label: t('header.link1') },
    { to: '/blog', label: t('header.link5') },
    { to: '/contacts', label: t('header.link4') },
  ]

  const isHome = pathname === '/'

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
          {links.map(({ to, label }) => {
            const isPage = to.startsWith('/')

            if (isPage) {
              return (
                <Link
                  key={to}
                  href={to}
                  className={`${style.header_links__link} ${
                    pathname === to ? style.header_links__link_active : ''
                  }`}
                >
                  {label}
                </Link>
              )
            }

            return (
              <a
                key={to}
                href={`/#${to}`}
                className={`${style.header_links__link} ${
                  activeNavLink === to ? style.header_links__link_active : ''
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  if (isHome) {
                    scrollToSection(to)
                  } else {
                    router.push(`/#${to}`)
                  }
                }}
              >
                {label}
              </a>
            )
          })}
        </nav>
        <div className={style.header_right}>
          <div className={style.header_right__btns}>
            <a href="tel:+380555555555" className={style.header_right__btns_btn}>
              <span>+38 055 555 55 55</span>
              <Image src={backCall} alt="phone" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
      <HeaderForm />
    </div>
  )
}

export { WebHeader }
