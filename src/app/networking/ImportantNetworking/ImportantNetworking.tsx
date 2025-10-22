import React from 'react'
import style from './ImportantNetworking.module.css'
import Image from 'next/image'
import { ArrowMission } from '@/assets/Images/AboutPage/Mission'
import {
  Important1,
  Important2,
  Important3,
  ImportantRed,
} from '@/assets/Images/NetworkingPage/Important/index'

const ImportantNetworking = () => {
  return (
    <div className={style.mission_about_block}>
      <div className="customContainer">
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
            Чому <span> це важливо</span>
          </h2>
          <div className={style.wrap_top__back}>важливо</div>
          <div>
            <p className={style.mission_subtile}>
              <span className={style.mission_subtile_span}></span>У бізнесі
              зв’язки вирішують усе! Саме через партнерство, спільний обмін
              досвідом і колаборації підприємці знаходять нові можливості для
              розвитку. Нетворкінг дозволяє не лише розширити свою аудиторію, а
              й уникнути типових помилок, оптимізувати процеси та знайти
              надійних партнерів.
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
                80% успішних бізнесів будуються на правильних зв’язках
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
                Нетворкінг допомагає знайти партнерів та прискорити розвиток
                бізнесу
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
                Обмін досвідом дозволяє уникати помилок і масштабувати проєкти
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

export default ImportantNetworking
