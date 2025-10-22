import React from 'react'
import style from './formatsNetworking.module.css'
import Image from 'next/image'
import {
  MaterialArrow,
  FormatsNetworkingImg,
} from '@/assets/Images/EducationPage/Material'

const FormatsNetworking = () => {
  return (
    <div className={style.mission_about_block}>
      <div className="customContainer">
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
            <span>Формати нетворкінгу</span>
          </h2>
          <div className={style.wrap_top__back}>Формати нетворкінгу</div>
          <div>
            <p className={style.mission_subtile}>
              <span className={style.mission_subtile_span}></span>Ми створюємо
              середовище, де власники інтернет-магазинів можуть ділитися
              досвідом, знаходити партнерів і отримувати корисні контакти. Наші
              формати нетворкінгу адаптовані для різних потреб бізнесу – від
              неформального спілкування до стратегічних партнерств.
            </p>
          </div>
        </div>
        <div className={style.material_content}>
          <div className={style.material_content_left}>
            <div className={style.material_card}>
              <div className={style.material_card_top}>
                <p className={style.material_card_icon}>📈</p>
                <p className={style.material_card_title}>Клуб підприємців</p>
              </div>
              <p className={style.material_card_text}>
                Об’єднання власників e-commerce бізнесів у закритих Facebook і
                Telegram-спільнотах.
              </p>
            </div>

            <div className={style.material_card}>
              <div className={style.material_card_top}>
                <p className={style.material_card_icon}>🤝</p>
                <p className={style.material_card_title}>Офлайн-зустрічі</p>
              </div>
              <p className={style.material_card_text}>
                Регулярні зустрічі для налагодження корисних зв’язків та
                розвитку та просування бізнесу.
              </p>
            </div>

            <div className={style.material_card}>
              <div className={style.material_card_top}>
                <p className={style.material_card_icon}>🔍</p>
                <p className={style.material_card_title}>Пошук партнерів</p>
              </div>
              <p className={style.material_card_text}>
                Можливість знайти партнерів для масштабування бізнесу або
                залучення фінансування.
              </p>
            </div>
          </div>
          <div>
            <Image
              className={style.material_img}
              src={FormatsNetworkingImg}
              alt="FormatsNetworkingImg"
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

export default FormatsNetworking
