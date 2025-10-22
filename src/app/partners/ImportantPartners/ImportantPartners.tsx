import React from 'react'
import style from './ImportantPartners.module.css'
import Image from 'next/image'
import { ArrowMission } from '@/assets/Images/AboutPage/Mission'
import {
  Important1,
  Important2,
  Important3,
  ImportantRedMini,
} from '@/assets/Images/PartnersPage/Important/index'

const ImportantPartners = () => {
  return (
    <div className={style.mission_about_block}>
      <div className="customContainer">
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
            Чому <span>це вигідно</span>
          </h2>
          <div className={style.wrap_top__back}>вигідно</div>
          <div>
            <p className={style.mission_subtile}>
              <span className={style.mission_subtile_span}></span>Кожен
              інтернет-магазин стикається з постійними витратами: оплата
              платіжних сервісів, реклами, CRM-систем та інших інструментів для
              розвитку. Завдяки нашій партнерській програмі ви можете значно
              скоротити ці витрати, спрямовуючи зекономлені кошти на
              масштабування бізнесу.
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
              <Image src={ImportantRedMini} alt="ImportantRed" />
              <p className={style.important_text}>
                До 50% економії на e-commerce сервісах
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
              <Image src={ImportantRedMini} alt="ImportantRed" />
              <p className={style.important_text}>
                Оптимізація витрат на маркетинг
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
              <Image src={ImportantRedMini} alt="ImportantRed" />
              <p className={style.important_text}>
                Підтримка від партнерських сервісів
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

export default ImportantPartners
