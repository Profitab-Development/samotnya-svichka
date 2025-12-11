'use client'

import React from 'react'
import style from './VolunteerHero.module.css'
import Image from 'next/image'
import { logo_svichka } from '@/assets/Icons'

const VolunteerHero = () => {
  return (
    <section className={style.hero}>
      <div className={`customContainer ${style.hero_container}`}>
        <div className={style.hero_inner}>
          {/* LOGO */}
          <div className={style.hero_logo}>
            <Image src={logo_svichka} alt="logo" className={style.hero_logo} />
          </div>

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
