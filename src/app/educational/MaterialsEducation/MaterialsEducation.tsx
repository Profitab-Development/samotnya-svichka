import React from 'react'
import style from './MaterialsEducation.module.css'
import Image from 'next/image'
import {
  MaterialImg,
  MaterialArrow,
} from '@/assets/Images/EducationPage/Material'

const MaterialsEducation = () => {
  return (
    <div className={style.mission_about_block}>
      <div className="customContainer">
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
            <span>навчальні матеріали</span>
          </h2>
          <div className={style.wrap_top__back}>навчальні матеріали</div>
          <div>
            <p className={style.mission_subtile}>
              <span className={style.mission_subtile_span}></span>Наші освітні
              заходи безкоштовні, а матеріали – практичні та адаптовані до
              реалій українського e-commerce. Для самостійного навчання ми
              підготували корисні ресурси, які допоможуть вам систематизувати
              знання та впроваджувати їх у бізнес:
            </p>
          </div>
        </div>
        <div className={style.material_content}>
          <div className={style.material_content_left}>
            <div className={style.material_card}>
              <div className={style.material_card_top}>
                <p className={style.material_card_icon}>📝</p>
                <p className={style.material_card_title}>Гайди та чек-листи</p>
              </div>
              <p className={style.material_card_text}>
                Покрокові інструкції щодо створення, налаштування та просування
                інтернет-магазину.
              </p>
            </div>

            <div className={style.material_card}>
              <div className={style.material_card_top}>
                <p className={style.material_card_icon}>💻</p>
                <p className={style.material_card_title}>Відеоуроки</p>
              </div>
              <p className={style.material_card_text}>
                Практичні пояснення з реальними кейсами та рекомендаціями від
                експертів.
              </p>
            </div>

            <div className={style.material_card}>
              <div className={style.material_card_top}>
                <p className={style.material_card_icon}>📈</p>
                <p className={style.material_card_title}>
                  Статті та інструкції
                </p>
              </div>
              <p className={style.material_card_text}>
                Детальні розбори рекламних стратегій, SEO-оптимізації та
                управління контентом.
              </p>
            </div>
          </div>
          <div>
            <Image
              className={style.material_img}
              src={MaterialImg}
              alt="MaterialImg"
            />
          </div>
          <Image
            className={style.material_arrow}
            src={MaterialArrow}
            alt="MaterialArrow"
          />
        </div>
      </div>
    </div>
  )
}

export default MaterialsEducation
