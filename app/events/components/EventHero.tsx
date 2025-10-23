'use client'
import React from 'react'
import Image from 'next/image'
import style from './EventHero.module.css'

const EventHero = () => {
  return (
    <section className={style.hero}>
      <div className={`customContainer ${style.hero_container}`}>
        <div className={style.hero_content}>
          <div className={style.hero_text}>
            <h1 className={style.hero_title}>
              ПЕРШИЙ БЛАГОДІЙНИЙ <span className={style.hero_title_span}>ВЕЧІР МЕЦЕНАТІВ</span>
            </h1>
            <h2 className={style.hero_subtitle}>&quot;РІДНІ, ХОЧ НЕЗНАЙОМІ&quot;</h2>
            
            <div className={style.hero_description}>
              <p className={style.hero_paragraph}>
                Благодійний фонд «Самотня Свічка» організовує благодійний вечір, мета якого — залучити доброчинців, меценатів і партнерів до підтримки людей, яких суспільство часто не помічає — літніх мешканців геріатричних пансіонатів.
              </p>
              
              <p className={style.hero_paragraph}>
                Чому підтримка фонду «Самотня свічка» така важлива? Тисячі людей поважного віку залишаються без родини, підтримки й уваги, проводячи свої останні роки в самотності.
              </p>
              
              <p className={style.hero_paragraph}>
                Фонд не лише забезпечує матеріальну допомогу, а й дарує турботу, людське тепло та відчуття гідності. За 9 років діяльності фонд підтримав понад 4500 підопічних у 49 пансіонатах шести регіонів Західної України.
              </p>
            </div>
          </div>
          <div className={style.hero_image}>
            <Image
              src="/images/event/IMG_8808.JPG"
              alt="Благодійний вечір меценатів"
              className={style.hero_img}
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventHero
