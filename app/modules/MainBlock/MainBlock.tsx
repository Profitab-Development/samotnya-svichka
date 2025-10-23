'use client'
import React, { useEffect, useState, useCallback } from 'react'
import style from './MainBlock.module.css'
// import { popUpStore } from '@/app/modules/MainPopUp/popUpStore'
import Image from 'next/image'
import { MainImage } from '@/assets/Images/MainBlock/index'

const MainBlock = () => {
  // const handleShow = popUpStore((state) => state.handleShow)

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

  // const handleScrollToAbout = () => {
  //   const aboutSection = document.getElementById('about')
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  if (windowWidth === null) return null

  return (
    <div className={style.wrap}>
      <div className={style.wrap_img}>
        <Image
          src={MainImage}
          alt="Elderly woman"
          fill
          className={style.background_image}
          priority
        />
      </div>
      <div className={`customContainer ${style.box}`}>
        <div className={style.box_main}>
          <div className={style.box_main__center}>
            <h1 className={style.box_main__center_title}>
            СВІТЛО, <span>ЯКЕ НЕ ЗГАСАЄ</span>
            </h1>
            <p className={style.box_main__center_subtitle}>
            Фонд, який щодня дарує тепло і турботу людям похилого віку в геріатричних центрах України.
            </p>
          </div>
          <div className={style.block_btn}>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfScWHcnDDobtWhdhFYUVJ6Yw0OpxUvoB6mf0z16wpginkR3w/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className={style.box_main__btn}
            >
              Стати партнером
            </a>
            {/* <button
              className={style.box_main__btn_more}
              onClick={handleScrollToAbout}
            >
              Дізнатися більше
              <Image
                className={style.main_arrow_btn}
                src={BtnArrow}
                alt="BtnArrow"
              />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export { MainBlock }
