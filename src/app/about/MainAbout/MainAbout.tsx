'use client'
import React, { useEffect, useState, useCallback } from 'react'
import style from './MainAbout.module.css'
import { popUpStore } from '@/app/modules/MainPopUp/popUpStore'
import Image from 'next/image'
import { BtnArrow } from '@/assets/Images/MainBlock/index'

const MainAbout = () => {
  const handleShow = popUpStore((state) => state.handleShow)

  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  // const aboutSectionRef = useRef<HTMLElement | null>(null)

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [handleResize])

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('why')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (windowWidth === null) return null

  return (
    <div className={style.wrap}>
      <div className={`customContainer ${style.box}`}>
        <div className={style.box_main}>
          <div className={style.box_main__center}>
            <h1 className={style.box_main__center_title}>
              Хто ми <span>та чому допомагаємо бізнесу?</span>
            </h1>
            <p className={style.box_main__center_subtitle}>
              Асоціація власників інтернет-магазинів – це громадська
              організація, що допомагає підприємцям розвивати свій бізнес
              безкоштовно.
            </p>
          </div>
          <div className={style.block_btn}>
            <button className={style.box_main__btn} onClick={handleShow}>
              Отримати консультацію
            </button>
            <button
              className={style.box_main__btn_more}
              onClick={handleScrollToAbout}
            >
              Дізнатися більше
              <Image
                className={style.main_arrow_btn}
                src={BtnArrow}
                alt="BtnArrow"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MainAbout }
