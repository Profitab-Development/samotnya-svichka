import React from 'react'
import style from './ImportantConsult.module.css'
import Image from 'next/image'
import { ArrowMission } from '@/assets/Images/AboutPage/Mission'
import '../../../assets/Images/ConsultPage/Important/index'
import {
  Important1,
  Important2,
  Important3,
  ImportantRed,
} from '@/assets/Images/ConsultPage/Important'

const ImportantConsult = () => {
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
              <span className={style.mission_subtile_span}>
                Правильний вибір платформи{' '}
              </span>
              - це основа успішного інтернет-магазину. Помилки на початковому
              етапі можуть призвести до втрати клієнтів, зайвих витрат і навіть
              загрози безпеці бізнесу.
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
                70% власників магазинів стикаються з труднощами через
                неправильно обрану платформу
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
                Оптимізована технічна інфраструктура підвищує продуктивність та
                зменшує витрати
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
                Безпека сайту – надійний захист вашого бізнесу від кібератак,
                витоків даних і шахрайства.
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

export default ImportantConsult
