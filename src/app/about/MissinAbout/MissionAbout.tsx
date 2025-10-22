import React from 'react'
import style from './missionAbout.module.css'
import Image from 'next/image'
import { ArrowMission } from '@/assets/Images/AboutPage/Mission'

const MissionAbout = () => {
  return (
    <div className={style.mission_about_block}>
      <div className="customContainer">
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
            <span>Місія та цінності</span>
          </h2>
          <div className={style.wrap_top__back}>місія</div>
          <div>
            <p className={style.mission_subtile}>
              <span className={style.mission_subtile_span}>Місія: </span>
              Допомогти малому бізнесу розвиватися в умовах війни, надаючи
              безкоштовні <br /> консультації, освіту та можливості для
              співпраці.
            </p>
          </div>
        </div>
        <div className={style.mission_cards_content}>
          <div className={style.mission_card}>
            <p className={style.mission_card_icon}>🙋‍♂️</p>
            <p className={style.mission_card_text}>Безкоштовна підтримка</p>
          </div>
          <div className={style.mission_card}>
            <p className={style.mission_card_icon}>📝</p>
            <p className={style.mission_card_text}>Практичні рішення</p>
          </div>
          <div className={style.mission_card}>
            <p className={style.mission_card_icon}>🤝</p>
            <p className={style.mission_card_text}>Об’єднання бізнесу</p>
          </div>
          <div className={style.mission_card}>
            <p className={style.mission_card_icon}>💡</p>
            <p className={style.mission_card_text}>Актуальність рішень</p>
          </div>
        </div>
      </div>
      <Image
        className={style.mission_arrow}
        src={ArrowMission}
        alt="ArrowMission"
      />
    </div>
  )
}

export default MissionAbout
