'use client'
import React, { useEffect, useState, useCallback } from 'react'
import style from './BlogMain.module.css'

const BlogMain = () => {
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
              <span>новини </span> асоціації власників інтернет-магазинів
            </h1>
            <p className={style.box_main__center_subtitle}>
              Актуальні статті, аналітика та поради для власників
              інтернет-магазинів. Дізнавайтеся про нові тренди, інструменти та
              стратегії для розвитку бізнесу.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { BlogMain }
