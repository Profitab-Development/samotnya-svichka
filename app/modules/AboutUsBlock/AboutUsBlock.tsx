'use client'
import React from 'react'
import Image from 'next/image'
import style from './AboutUsBlock.module.css'
// import { BtnArrow } from '@/assets/Images/MainBlock/index'

const AboutUsBlock = () => {
  const handleGoToAbout = () => {
    window.location.href = '/about'
  }

  return (
    <div className={style.wrap} id="about" suppressHydrationWarning>
      <div className={`customContainer ${style.box}`} suppressHydrationWarning>
        <div className={style.box_content} suppressHydrationWarning>
          <div className={style.box_text} suppressHydrationWarning>
            <h2 className={style.box_title}>
              ПРО НАС
            </h2>
            <p className={style.box_description}>
              Благодійний фонд «Самотня Свічка» створено на основі восьмирічного проєкту «Даруючи красу — допомагаємо», який об&apos;єднав людей, небайдужих до долі самотніх літніх осіб, що проживають у геріатричних центрах Західної України.
            </p>
            <p className={style.box_description}>
              Наша місія — не лише щомісяця надавати матеріальну підтримку, а й дарувати відчуття турботи, краси та людського тепла. Під час регулярних візитів наша команда організовує масажі, стрижки, доглядові процедури для обличчя й волосся, дерматологічні консультації та подологічне лікування.
            </p>
            <button
              className={style.box_btn}
              onClick={handleGoToAbout}
            >
              Детальніше про нас
            </button>
          </div>
          <div className={style.box_image} suppressHydrationWarning>
            <Image
              src="/images/about/DQ6B7917.jpg"
              alt="Про нас - Самотня Свічка"
              className={style.about_image}
              width={500}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { AboutUsBlock }
