import React from 'react'
import style from './GetPartners.module.css'

const GetPartners = () => {
  return (
    <div className={style.mission_about_block}>
      <div className="customContainer">
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
            Що
            <span> ви отримаєте</span>
          </h2>
          <div className={style.wrap_top__back}>ви отримаєте</div>
          <div>
            <p className={style.mission_subtile}>
              <span className={style.mission_subtile_span}></span>
              Розвиток інтернет-магазину потребує значних інвестицій – від
              налаштування платіжних систем до маркетингових кампаній та
              програмного забезпечення. Ми допомагаємо вам зменшити ці витрати,
              домовляючись про спеціальні умови з провідними сервісами для
              e-commerce. Ми домовилися про вигідні умови для нашої спільноти,
              щоб ви могли використовувати найкращі сервіси за зниженими цінами:
            </p>
          </div>
        </div>
        <div className={style.mission_cards_content}>
          <div className={style.mission_card}>
            <p className={style.mission_card_icon}>💻</p>
            <p className={style.mission_card_text}>
              Знижки на CRM, платформи для магазинів і маркетингові послуги
            </p>
          </div>
          <div className={style.mission_card}>
            <p className={style.mission_card_icon}>📣</p>
            <p className={style.mission_card_text}>
              Ексклюзивні тарифи на рекламу та аналітику
            </p>
          </div>
          <div className={style.mission_card}>
            <p className={style.mission_card_icon}>🚀</p>
            <p className={style.mission_card_text}>
              Пріоритетне обслуговування від наших партнерів
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetPartners
