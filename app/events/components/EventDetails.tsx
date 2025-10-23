'use client'
import React from 'react'
import style from './EventDetails.module.css'

const EventDetails = () => {
  return (
    <section className={style.details}>
      <div className={`customContainer ${style.details_container}`}>
        <div className={style.details_content}>
          <div className={style.details_text}>
            <p className={style.details_paragraph}>
              Пропонуємо вам стати спонсором благодійного вечора, підтримавши його придбанням квитка. Ваша участь допоможе забезпечити гідну старість літніх людей, спрямовуючи кошти на закупівлю засобів догляду — підгузків, пелюшок та засобів гігієни.
            </p>
          </div>
          
          <div className={style.event_info}>
            <h3 className={style.event_info_title}>Деталі події</h3>
            <div className={style.event_info_item}>
              <span className={style.event_info_label}>Дата проведення:</span>
              <span className={style.event_info_value}>14 листопада 2025</span>
            </div>
            <div className={style.event_info_item}>
              <span className={style.event_info_label}>Час:</span>
              <span className={style.event_info_value}>19:00–21:00</span>
            </div>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSe7fEWfbaP7XwLYCs8aDum3rX65ydBGN51KJYP3HV6xI2SuRA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className={style.register_button}
            >
              Заповнити форму
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventDetails
