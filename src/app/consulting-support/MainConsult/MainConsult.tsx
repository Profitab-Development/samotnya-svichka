'use client'
import React, { useEffect, useState, useCallback } from 'react'
import style from './MainConsult.module.css'
import { popUpStore } from '@/app/modules/MainPopUp/popUpStore'

const MainConsult = () => {
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

  if (windowWidth === null) return null

  return (
    <div className={style.wrap}>
      <div className={`customContainer ${style.box}`}>
        <div className={style.box_main}>
          <div className={style.box_main__center}>
            <h1 className={style.box_main__center_title}>
              Консультаційна підтримка <span>для вашого інтернет-магазину</span>
            </h1>
            <p className={style.box_main__center_subtitle}>
              Отримайте експертні поради щодо вибору платформи, налаштування
              інтеграцій та безпеки вашого бізнесу.
            </p>
          </div>
          <div className={style.block_btn}>
            <button className={style.box_main__btn} onClick={handleShow}>
              Отримати консультацію
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MainConsult }
