'use client'

import React from 'react'
import Image from 'next/image'
import style from './VolunteerProfile.module.css'

const VolunteerProfile = () => {
  return (
    <section className={style.section}>
      <div className="customContainer">
        <div className={style.text_block}>
          <h2 className={style.title}>Volunteer Profile: Yuliia Novosilska</h2>

          <p className={style.text}>
            Yuliia Novosilska has been an active volunteer with the Lonely
            Candle Initiative, supporting elderly individuals living alone in
            Ukraine. Her contribution includes preparing humanitarian care
            packages, organizing donated goods, assisting with logistics during
            outreach missions, and participating in holiday support programs for
            seniors.
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

        <div className={style.photos}>
          <Image
            src="/images/volunteers/profile1.webp"
            alt="Volunteer activity photo 1"
            width={800}
            height={1200}
            className={style.photo}
          />

          <Image
            src="/images/volunteers/profile2.webp"
            alt="Volunteer activity photo 2"
            width={800}
            height={1200}
            className={style.photo}
          />

          <Image
            src="/images/volunteers/profile3.webp"
            alt="Volunteer activity photo 3"
            width={800}
            height={1200}
            className={style.photo}
          />
        </div>
      </div>
    </section>
  )
}

export default VolunteerProfile
