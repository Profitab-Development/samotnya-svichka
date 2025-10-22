'use client'
import React, { useEffect, useState, useCallback } from 'react'
import style from './PostMain.module.css'

const PostMain = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null)

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
              Стратегії електронної комерції: як побудувати успішний
              інтернет-магазин
            </h1>
            <p className={style.box_main__center_subtitle}>
              Дізнайтеся, як вибрати нішу, налаштувати платформу, автоматизувати
              процеси та масштабувати інтернет-магазин. Практичні поради для
              розвитку e-commerce бізнесу.
            </p>
            <p className={style.main_text_author}>Анатолій Маліновський</p>
            <p className={style.main_text_date}>Дата публікації: 9.03.2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { PostMain }
