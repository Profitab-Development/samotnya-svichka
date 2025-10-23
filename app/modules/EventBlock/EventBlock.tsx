'use client'
import React from 'react'
import Image from 'next/image'
import style from './EventBlock.module.css'
// import { BtnArrow } from '@/assets/Images/MainBlock/index'

const EventBlock = () => {
  const handleGoToEvents = () => {
    window.location.href = '/events/'
  }

  return (
    <div className={style.wrap} id="events">
      <div className={`customContainer ${style.box}`}>
        <div className={style.box_content}>
          <div className={style.box_text}>
            <h2 className={style.box_title}>
              ПЕРШИЙ БЛАГОДІЙНИЙ ВЕЧІР МЕЦЕНАТІВ
            </h2>
            <h3 className={style.box_subtitle}>
              &quot;РІДНІ, ХОЧ НЕЗНАЙОМІ&quot;
            </h3>
            <p className={style.box_description}>
              Благодійний фонд «Самотня Свічка» організовує благодійний вечір, мета якого — залучити доброчинців, меценатів і партнерів до підтримки людей, яких суспільство часто не помічає — літніх мешканців геріатричних пансіонатів.
            </p>
            <button
              className={style.box_btn}
              onClick={handleGoToEvents}
            >
              Дізнатися більше
            </button>
          </div>
          <div className={style.box_image}>
            <Image
              src="/images/event/IMG_8808.JPG"
              alt="Благодійний вечір меценатів"
              className={style.event_image}
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

export { EventBlock }
