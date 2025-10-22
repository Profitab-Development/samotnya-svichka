import React from 'react'
import style from './offerPartners.module.css'
import Image from 'next/image'

import { ArrowOffer } from '../../../assets/Images/EducationPage/Offer/index'
const OfferPartners = () => {
  return (
    <div className={style.offer_bg}>
      <div className="customContainer">
        <div className={style.offer_content}>
          <div className={style.offer_text_block}>
            <p className={style.offer_title}>
              Приєднуйтесь та заощаджуйте на ключових сервісах для вашого
              бізнесу!
            </p>
            <p className={style.offer_subtitle}>
              Отримайте доступ до партнерських програм та ексклюзивних знижок.
            </p>
          </div>
          <a className={style.btn_link} href="#formSecond">
            <div>
              <button className={style.offer_btn}>Отримати знижку</button>
            </div>
          </a>
          <Image
            className={style.offer_arrow}
            src={ArrowOffer}
            alt="ArrowOffer"
          />
        </div>
      </div>
    </div>
  )
}

export default OfferPartners
