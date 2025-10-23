'use client'
import React from 'react'
import style from './AboutIntro.module.css'

const AboutIntro = () => {
  const handleDonate = () => {
    window.open('https://send.monobank.ua/jar/qbu3WGhLU', '_blank')
  }

  return (
    <section className={style.intro}>
      <div className={`customContainer ${style.intro_container}`}>
        <div className={style.intro_content}>
          <div className={style.intro_text}>
            <p className={style.intro_paragraph}>
              Щороку в Україні зростає кількість людей поважного віку. Та разом із цим дедалі більше тих, хто зустрічає старість на самоті. Фізичні труднощі, фінансова нестабільність, емоційна ізоляція — це щоденна реальність тисяч літніх людей, які залишилися без підтримки.
            </p>
            <p className={style.intro_paragraph}>
              У таких умовах допомога стає не розкішшю, а життєвою необхідністю. Піклуючись про самотніх пенсіонерів, ми не просто ділимося матеріальними благами — ми даруємо їм надію, увагу, тепло й відчуття, що про них не забули.
            </p>
            <p className={style.intro_paragraph}>
              Це маленькі кроки, які повертають гідність і віру в людей. І разом ми можемо зробити їхнє життя трохи світлішим.
            </p>
          </div>
          <div className={style.intro_action}>
            <button 
              className={style.donate_button}
              onClick={handleDonate}
            >
              <span className={style.donate_text}>Донат</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro
