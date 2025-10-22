import React from 'react'
import style from './ImportantEducation.module.css'
import Image from 'next/image'
import { ArrowMission } from '@/assets/Images/AboutPage/Mission'
import {
  Important1,
  Important2,
  Important3,
  ImportantRed,
} from '@/assets/Images/EducationPage/Important/index'

const ImportantEducation = () => {
  return (
    <div className={style.mission_about_block}>
      <div className="customContainer">
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
            Чому<span>це важливо </span>
          </h2>
          <div className={style.wrap_top__back}>важливо</div>
          <div>
            <p className={style.mission_subtile}>
              <span className={style.mission_subtile_span}></span>У світі
              e-commerce недостатньо просто створити інтернет-магазин – важливо
              вміти його ефективно просувати, залучати клієнтів і масштабувати
              бізнес. Освітні заходи допомагають власникам магазинів отримати
              практичні знання, уникнути типових помилок і впевнено розвиватися.
            </p>
          </div>
        </div>
        <div className={style.important_content}>
          <div className={style.important_img_block}>
            <Image
              className={style.important_img}
              src={Important1}
              alt="Important1"
            />
            <div className={style.important_text_block}>
              <Image src={ImportantRed} alt="ImportantRed" />
              <p className={style.important_text}>
                85% підприємців визнають, що маркетинг є ключовим фактором
                успіху
              </p>
            </div>
          </div>
          <div className={style.important_img_block}>
            <Image
              className={style.important_img}
              src={Important2}
              alt="Important2"
            />
            <div className={style.important_text_block}>
              <Image src={ImportantRed} alt="ImportantRed" />
              <p className={style.important_text}>
                Грамотне SEO може збільшити трафік магазину в 2-3 рази
              </p>
            </div>
          </div>
          <div className={style.important_img_block}>
            <Image
              className={style.important_img}
              src={Important3}
              alt="Important3"
            />
            <div className={style.important_text_block}>
              <Image src={ImportantRed} alt="ImportantRed" />
              <p className={style.important_text}>
                Нетворкінг допомагає знайти партнерів та ідеї для зростання
              </p>
            </div>
          </div>
        </div>
        <Image
          className={style.mission_arrow}
          src={ArrowMission}
          alt="ArrowMission"
        />
      </div>
    </div>
  )
}

export default ImportantEducation
