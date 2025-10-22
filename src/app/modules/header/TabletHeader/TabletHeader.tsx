// 'use client'
//
// import React, { useEffect, useState } from 'react'
// import { useStaticTranslations } from '@/hooks/useStaticTranslations'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import Image from 'next/image'
// import style from './TabletHeader.module.css'
//
// // Assuming these are now imported from a constants file
// // import { CLIENTS_ROUTE, CASES_ROUTE, CONTACTS_ROUTE } from '@/constants'
// interface LinkItem {
//   to: string
//   label: string
//   dropdownItems?: { to: string; label: string }[]
// }
//
// // Assuming these are now imported as default exports from the Assets folder
// import { TabletBurgerMenuStore } from '@/app/modules/header/TabletHeader/TabletBurgerMenu/TabletBurgerMenuStore'
// import { TabletBurgerMenu } from '@/app/modules/header/TabletHeader/TabletBurgerMenu/TabletBurgerMenu'
// import { header_tablet_burger, znaesh_logo } from '@/assets/Icons'
//
// const TabletHeader: React.FC = () => {
//   const { t } = useStaticTranslations()
//   const pathname = usePathname()
//
//   const [activeNavLink, setActiveNavLink] = useState<string>('')
//
//   useEffect(() => {
//     setActiveNavLink(pathname)
//   }, [pathname])
//
//   const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
//
//   useEffect(() => {
//     setActiveNavLink(pathname.substring(1))
//   }, [pathname])
//
//   const links: LinkItem[] = [
//     {
//       to: 'services',
//       label: t('header.link1'),
//       dropdownItems: [
//         { to: 'seo', label: t('header.services.seo') },
//         { to: 'smm', label: t('header.services.smm') },
//         { to: 'ads', label: t('header.services.ads') },
//       ],
//     },
//     { to: 'cases', label: t('header.link2') },
//     { to: 'results', label: t('header.link3') },
//     { to: 'contacts', label: t('header.link4') },
//   ]
//   // eslint-disable-next-line
//   const handler = TabletBurgerMenuStore((state: any) => state.handler)
//
//   return (
//     <div className={style.wrap} id="header">
//       <div className={`customContainer ${style.header}`}>
//         <Link href="/">
//           <Image src={znaesh_logo} alt="logo" className={style.header_logo} />
//         </Link>
//         <nav className={style.header_links}>
//           {links.map(({ to, label, dropdownItems }) => (
//             <div
//               key={to}
//               className={style.header_links__item}
//               onMouseEnter={() => dropdownItems && setIsDropdownOpen(true)}
//               onMouseLeave={() => dropdownItems && setIsDropdownOpen(false)}
//             >
//               <Link
//                 href={`/${to}`}
//                 className={`${style.header_links__link} ${
//                   activeNavLink === to ? style.header_links__link_active : ''
//                 }`}
//               >
//                 {label}
//               </Link>
//               {dropdownItems && (
//                 <svg
//                   className={`${style.arrow} ${isDropdownOpen ? style.arrow_active : ''}`}
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="13"
//                   height="8"
//                   viewBox="0 0 13 8"
//                   fill="none"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M11.7569 0.5C11.5143 0.5 11.2718 0.592911 11.0867 0.77937L6.7041 5.19583L2.32146 0.77937C1.95134 0.407089 1.35133 0.407089 0.981214 0.77937C0.611731 1.15229 0.611731 1.75685 0.981214 2.12976L6.03398 7.22079C6.40409 7.59307 7.00411 7.59307 7.37422 7.22079L12.427 2.12976C12.7965 1.75685 12.7965 1.15229 12.427 0.77937C12.2419 0.592911 11.9994 0.5 11.7569 0.5Z"
//                     fill="#212121"
//                   />
//                 </svg>
//               )}
//               {dropdownItems && isDropdownOpen && (
//                 <div className={style.dropdown}>
//                   {dropdownItems.map(({ to, label }) => (
//                     <Link
//                       key={to}
//                       href={`/${to}`}
//                       className={style.dropdown_item}
//                     >
//                       {label}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>
//
//         <div className={style.header_right} onClick={handler}>
//           <Image
//             src={header_tablet_burger}
//             alt="burger"
//             className={style.header_right__img}
//           />
//         </div>
//       </div>
//       <TabletBurgerMenu />
//     </div>
//   )
// }
//
// export { TabletHeader }

'use client'

import React, { useEffect, useState } from 'react'
import { useStaticTranslations } from '@/hooks/useStaticTranslations'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  const { t } = useStaticTranslations()
  const pathname = usePathname()

  const [activeNavLink, setActiveNavLink] = useState<string>('')

  useEffect(() => {
    setActiveNavLink(pathname.substring(1))
  }, [pathname])

  const links: LinkItem[] = [
    { to: '/about', label: t('header.link6') },
    { to: 'services', label: t('header.link1') },
    { to: '/blog', label: t('header.link5') },
    { to: '/contacts', label: t('header.link4') },
  ]

  const handler = TabletBurgerMenuStore((state) => state.handler)

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
              >
                {label}
              </a>
            )
          })}
        </nav>

        <div className={style.header_right} onClick={handler}>
          <Image
            src={header_tablet_burger}
            alt="burger"
            className={style.header_right__img}
          />
        </div>
      </div>
      <TabletBurgerMenu />
    </div>
  )
}

export { TabletHeader }
