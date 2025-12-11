'use client'

import React from 'react'
import style from './VolunteerHero.module.css'

const VolunteerHero = () => {
  return (
    <section className={style.hero}>
      <div className={`customContainer ${style.hero_container}`}>
        <div className={style.hero_inner}>
          <p className={style.hero_brand}>Lonely Candle Initiative</p>
          <h1 className={style.hero_title}>Volunteer Service Verification</h1>
          <p className={style.hero_subtitle}>
            We provide official confirmation of volunteer service for students
            and young leaders who have contributed to our humanitarian work.
          </p>
        </div>
      </div>
    </section>
  )
}

export default VolunteerHero
