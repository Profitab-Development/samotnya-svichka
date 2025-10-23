'use client'
import React from 'react'
import style from './AboutCare.module.css'

const AboutCare = () => {
const careItems = [
  {
    title: 'Забезпечуємо необхідні препарати згідно з призначенням лікарів'
  },
  {
    title: 'Допомагаємо з гігієною та комфортом'
  },
  {
    title: 'Дбаємо про здоров\'я стоп, особливо у лежачих пацієнтів'
  },
  {
    title: 'Повертаємо віру в себе, долаємо самотність'
  },
  {
    title: 'Відновлюємо відчуття гідності та уваги'
  }
]

  return (
    <section className={style.care}>
      <div className={`customContainer ${style.care_container}`}>
        <h2 className={style.care_title}>Наша постійна турбота</h2>
        <div className={style.care_grid}>
          {careItems.map((item, index) => (
            <div key={index} className={style.care_card}>
              <p className={style.care_text}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutCare
