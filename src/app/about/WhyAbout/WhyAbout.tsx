import React from 'react'
import style from './WhyAbout.module.css'
import Image from 'next/image'
import { WhyImage } from '@/assets/Images/AboutPage/Why'

const WhyAbout = () => {
  return (
    <div className={style.why_block} id={'why'}>
      <div className="customContainer">
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
            <span>Чому була створена</span>
            {'\u00A0'}Асоціація
          </h2>

          <div className={style.wrap_top__back}>Заснування</div>
        </div>
        <div className={style.why_content_block}>
          <div className={style.why_left}>
            <div className={style.why_left_top}>
              <div className={style.why_position_block}>
                <p className={style.why_position_text}>
                  Співзасновник та керівник
                </p>
              </div>
              <div>
                <p className={style.why_anatoliy_text}>
                  <span className={style.why_anatoliy_span}>
                    Анатолій Маліновський{' '}
                  </span>
                  — підприємець, експерт у сфері e-commerce та засновник
                  громадської організації
                </p>
                <p className={style.why_anatoliy_text}>
                  «Асоціація власників інтернет-магазинів»{' '}
                </p>
              </div>
            </div>
            <div>
              <p className={style.why_left_bottom_text}>
                Асоціація була створена у відповідь на виклики з якими
                стикаються власники інтернет-магазинів під час війни. Ми зібрали
                команду експертів, готових допомагати бізнесу виживати та
                зростати.
              </p>{' '}
              <br />
              <p className={style.why_left_bottom_text}>
                В умовах безпрецедентних викликів, з якими зіткнулись власники
                інтернет-магазинів під час війни. Виникла нагальна потреба у
                створенні дієвої підтримки та об&#39;єднання зусиль.
              </p>
            </div>
            <div className={style.left_btn_block}>
              <p className={style.left_btn_block_text}>
                Підписуйтесь на Instagram <br />{' '}
                <span className={style.left_btn_block_span}>
                  Анатолія Маліновського
                </span>
              </p>
              <a
                className={style.left_btn_link}
                target="_blank"
                rel="noopener"
                href="https://www.instagram.com/malinovskyi_anatolii/"
              >
                <button className={style.left_btn}>Підписатися</button>
              </a>
            </div>
          </div>
          <div>
            <Image className={style.why_image} src={WhyImage} alt="WhyImage" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyAbout
