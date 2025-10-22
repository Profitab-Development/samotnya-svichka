import React from 'react'
import style from './ExperienceEducation.module.css'
import Image from 'next/image'
import {
  ExperienceImg,
  ExperienceIcon,
} from '@/assets/Images/EducationPage/Experience'

const ExperienceEducation = () => {
  return (
    <div className={style.mission_about_block}>
      <div className="customContainer">
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
            <span>Обмін досвідом </span>та
            <span>нетворкінг</span>
          </h2>
          <div className={style.wrap_top__back}>досвід та нетворкінг</div>
          <div>
            <p className={style.mission_subtile}>
              <span className={style.mission_subtile_span}></span>Навчання – це
              не лише теорія, а й можливість спілкування з іншими підприємцями,
              обмін ідеями та знаходження партнерів:
            </p>
          </div>
        </div>
        <div className={style.experience_content}>
          <div>
            <Image
              className={style.experience_img}
              src={ExperienceImg}
              alt=""
            />
          </div>
          <div className={style.experience_right}>
            <div className={style.experience_card}>
              <Image src={ExperienceIcon} alt="ExperienceIcon" />
              <p className={style.experience_text}>
                <span className={style.experience_span}>
                  Дискусії та розбір реальних кейсів
                </span>
                – розбираємо успішні (та не дуже) історії e-commerce бізнесів,
                аналізуємо помилки та ефективні рішення.
              </p>
            </div>
            <div className={style.experience_card}>
              <Image src={ExperienceIcon} alt="ExperienceIcon" />
              <p className={style.experience_text}>
                <span className={style.experience_span}>
                  Поради від досвідчених підприємців
                </span>
                – запрошуємо спікерів із реальним бізнес-досвідом, які діляться
                лайфхаками та секретами успіху.
              </p>
            </div>
            <div className={style.experience_card}>
              <Image src={ExperienceIcon} alt="ExperienceIcon" />
              <p className={style.experience_text}>
                <span className={style.experience_span}>
                  Закриті онлайн-зустрічі
                </span>
                – живе спілкування, знайомства, обговорення актуальних проблем
                та трендів ринку e-commerce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceEducation
