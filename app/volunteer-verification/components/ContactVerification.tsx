'use client'

import React from 'react'
import style from './ContactVerification.module.css'

const ContactVerification = () => {
  return (
    <section className={style.section}>
      <div className={`customContainer ${style.container}`}>
        <h2 className={style.title}>Contact for Official Verification</h2>
        <p className={style.text}>
          For official verification of volunteer service or additional
          documentation, please contact:
        </p>

        <div className={style.card}>
          <p className={style.name}>Maria Lozynska</p>
          <p className={style.role}>Director, Lonely Candle Initiative</p>
          <p className={style.email}>Email: ms.mary95@ukr.net</p>
        </div>

        <p className={style.text_bottom}>
          We will be happy to confirm the details of Yuliia’s service upon
          request.
        </p>

        <div className={style.footer_line}>
          <span className={style.footer_logo}>Lonely Candle Initiative</span>
          <span className={style.footer_copy}>
            © Lonely Candle Initiative – Humanitarian Support for Elderly
            Individuals
          </span>
        </div>
      </div>
    </section>
  )
}

export default ContactVerification
