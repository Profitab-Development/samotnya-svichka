'use client'

import React from 'react'
import Image from 'next/image'
import style from './VolunteerProfile.module.css'

const VolunteerProfile = () => {
  return (
    <section className={style.section}>
      <div className="customContainer">
        <div className={style.columns}>
          <div className={style.text_block}>
            <h2 className={style.title}>
              Volunteer Profile: Yuliia Novosilska
            </h2>
            <p className={style.text}>
              Yuliia Novosilska has been an active volunteer with the Lonely
              Candle Initiative, supporting elderly individuals living alone in
              Ukraine. Her contribution includes preparing humanitarian care
              packages, organizing donated goods, assisting with logistics
              during outreach missions, and participating in holiday support
              programs for seniors.
            </p>
            <p className={style.text}>
              Her service has been continuous and meaningful, demonstrating
              reliability, compassion, and a strong sense of social
              responsibility.
            </p>
            <p className={style.text_last}>
              This service corresponds to the certificate ID LC–2024–018, signed
              by Foundation Director Maria Lozynska.
            </p>
          </div>

          <div className={style.photo_block}>
            <div className={style.photo_wrapper}>
              <Image
                src="/images/volunteers/yuliia-novosilska.jpg"
                alt="Volunteer Yuliia Novosilska"
                fill
                className={style.photo}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VolunteerProfile
