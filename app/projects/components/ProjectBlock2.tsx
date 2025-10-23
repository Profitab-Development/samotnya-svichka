'use client'
import React from 'react'
import Image from 'next/image'
import style from './ProjectBlock2.module.css'

const ProjectBlock2 = () => {
  return (
    <section className={style.project}>
      <div className={`customContainer ${style.project_container}`}>
        <div className={style.project_content}>
          <div className={style.project_text}>
            <h2 className={style.project_title}>Ваша підтримка — їхня надія</h2>
            <div className={style.donation_info}>
              <h3 className={style.donation_title}>Реквізити БФ «Самотня Свічка»:</h3>
              <div className={style.donation_details}>
                <p><strong>Одержувач:</strong> Благодійний фонд «Самотня Свічка»</p>
                <p><strong>ЄДРПОУ:</strong> 45494028</p>
                <p><strong>IBAN:</strong> UA073052990000026005041047398</p>
                <p><strong>Банк:</strong> АТ КБ «ПРИВАТБАНК»</p>
              </div>
              <a 
                href="https://send.monobank.ua/jar/qbu3WGhLU"
                target="_blank"
                rel="noopener noreferrer"
                className={style.donate_button}
              >
                Донат
              </a>
              <p className={style.donate_note}>(посилання на монобанку)</p>
            </div>
          </div>
          <div className={style.project_image}>
            <Image
              src="/images/projects/support-project.jpg"
              alt="Підтримка літніх людей - тепла зустріч"
              className={style.project_img}
              width={500}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectBlock2
