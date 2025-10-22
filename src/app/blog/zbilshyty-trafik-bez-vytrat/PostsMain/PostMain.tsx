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
              Як збільшити трафік на сайт інтернет-магазину без додаткових
              витрат?
            </h1>
            <p className={style.box_main__center_subtitle}>
              У статті розказуємо про ефективні способи залучення відвідувачів
              без вкладень: SEO, контент-маркетинг, соцмережі, партнерства та
              інші безкоштовні методи.
            </p>
            <p className={style.main_text_author}>Анатолій Маліновський</p>
            <p className={style.main_text_date}>Дата публікації: 15.03.2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { PostMain }
