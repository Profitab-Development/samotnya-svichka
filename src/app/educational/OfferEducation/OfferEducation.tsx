import React from 'react'
import style from './offerEducation.module.css'
import Image from 'next/image'

import { ArrowOffer } from '../../../assets/Images/EducationPage/Offer/index'
const OfferEducation = () => {
  return (
    <div className={style.offer_bg}>
      <div className="customContainer">
        <div className={style.offer_content}>
          <div className={style.offer_text_block}>
            <p className={style.offer_title}>
              Готові отримати нові знання та розвивати свій бізнес?
            </p>
            <p className={style.offer_subtitle}>
              Приєднуйтесь до наших освітніх заходів уже сьогодні!
            </p>
          </div>
          <a className={style.btn_link} href="#assoc">
            <div>
              <button className={style.offer_btn}>Залишайте заявку</button>
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

export default OfferEducation
