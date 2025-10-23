'use client'
import React from 'react'
import Image from 'next/image'
import style from './AboutBlock.module.css'
// import { BtnArrow } from '@/assets/Images/MainBlock/index'

const AboutBlock = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={style.wrap} id="about" suppressHydrationWarning>
      <div className={`customContainer ${style.box}`} suppressHydrationWarning>
        <div className={style.box_content} suppressHydrationWarning>
          <div className={style.box_image} suppressHydrationWarning>
            <Image
              src="/images/about/DQ6B7148.jpg"
              alt="Про фонд Самотня Свічка"
              className={style.about_image}
              width={500}
              height={400}
              priority
            />
          </div>
          <div className={style.box_text} suppressHydrationWarning>
            <h2 className={style.box_title}>
              ПРО ФОНД
            </h2>
            <p className={style.box_description}>
              «Самотня Свічка» — благодійний фонд, що опікується самотніми літніми людьми, які проживають у геріатричних центрах Західної України. Ми щомісяця відвідуємо підопічних, надаємо турботу, медичну допомогу та просто даруємо тепло й увагу тим, хто так цього потребує.
            </p>
            <button
              className={style.box_btn}
              onClick={handleScrollToAbout}
            >
              Дізнатися більше про нас
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { AboutBlock }
