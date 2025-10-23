'use client'
import React from 'react'
import Image from 'next/image'
import style from './AboutStory.module.css'

const AboutStory = () => {
  return (
    <section className={style.story}>
      <div className={`customContainer ${style.story_container}`}>
        <div className={style.story_content}>
          <div className={style.story_image}>
            <Image
              src="/images/about-story/IMG_3467.JPEG"
              alt="Історія фонду Самотня Свічка"
              className={style.story_img}
              width={500}
              height={400}
              priority
            />
          </div>
          <div className={style.story_text}>
                <p className={style.story_paragraph}>
                  Благодійний фонд «Самотня Свічка» створено на основі восьмирічного проєкту «Даруючи красу — допомагаємо», який об&apos;єднав людей, небайдужих до долі самотніх літніх осіб, що проживають у геріатричних центрах Західної України.
                </p>
            <p className={style.story_paragraph}>
              Наша місія — не лише щомісяця надавати матеріальну підтримку, а й дарувати відчуття турботи, краси та людського тепла. Під час регулярних візитів наша команда організовує масажі, стрижки, доглядові процедури для обличчя й волосся, дерматологічні консультації та подологічне лікування.
            </p>
            <p className={style.story_paragraph}>
              Ми віримо, що увага й турбота — це найцінніший подарунок. Тому, окрім медичної допомоги, ми приносимо подарунки, добрі слова й час, які повертають віру, гідність і радість життя тим, хто так потребує людського тепла.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStory
