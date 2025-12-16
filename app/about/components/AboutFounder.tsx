'use client'
import React from 'react'
import Image from 'next/image'
import style from './AboutFounder.module.css'

const AboutFounder = () => {
  return (
    <section className={style.founder}>
      <div className={`customContainer ${style.founder_container}`}>
        <h2 className={style.founder_title}>Людина, з якої все почалося</h2>
        <div className={style.founder_content}>
          <div className={style.founder_text}>
            <div className={style.founder_title_block}>
              <div className={style.founder_title_badge}>
                ЗАСНОВНИЦЯ ТА КЕРІВНИК
              </div>
              <h3 className={style.founder_name}>
                Мирослава Новосільська — лікарка, науковиця, мама
              </h3>
            </div>

            <p className={style.founder_paragraph}>
              У моєму дитинстві був особливий спокій. Бабуся щочетверга пекла
              хліб, а ввечері молилася своїм Ангелам— тихо, щиро, з надією.
              Дідусь говорив мало,часто віршами,з дитинства ,але його очі завжди
              були добрі. У них було все: любов, терпіння і тиша людини, яка
              прожила гідне життя.
            </p>
            <p className={style.founder_paragraph}>
              Я виросла серед людей, які не вимагали — вони давали. І саме в них
              я навчилася турботи, що не кричить, але лікує. Сьогодні я —
              лікарка, науковиця, мама. Я допомагаю людям повертати віру в себе,
              дбати про своє здоров&apos;я, відчувати себе красивими та
              важливими. Але я ніколи не забувала про тих, хто дав нам усе — і
              залишився в самотній тиші. Так народився фонд «Самотня Свічка».
            </p>
            <p className={style.founder_paragraph}>
              Це не про жалість. Це про вдячність. Про свічку, яку ми запалюємо
              в ім&apos;я тих, хто був нашим світлом. Ми їдемо до стареньких у
              геріатричні центри, даруємо їм увагу, догляд, розмову, тепло. Бо
              вони досі палають. І заслуговують не на мовчання — а на
              пам&apos;ять і любов. Моя бабуся й мій дідусь залишили у мені
              слід. Через цей фонд — я хочу передати це світло далі.
              <br />
              <br />— Мирослава Новосільська, засновниця фонду «Самотня Свічка»,
              жінка, яка пам&apos;ятає.
            </p>

            <div className={style.founder_cta}>
              <div className={style.founder_cta_content}>
                <div className={style.founder_cta_text}>
                  <span className={style.founder_cta_label}>
                    Долучайтесь до нашої місії
                  </span>
                  <span className={style.founder_cta_name}>
                    Мирослави Новосільської
                  </span>
                </div>
              </div>
              <a
                href="https://send.monobank.ua/jar/qbu3WGhLU"
                target="_blank"
                rel="noopener noreferrer"
                className={style.founder_cta_button}
              >
                Долучитися
              </a>
            </div>
          </div>

          <div className={style.founder_image}>
            <div className={style.founder_image_frame}>
              <Image
                src="/images/founder/IMG_5490.PNG"
                alt="Мирослава Новосільська - засновниця фонду Самотня Свічка"
                className={style.founder_img}
                width={500}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutFounder
