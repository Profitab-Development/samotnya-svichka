'use client'

import React from 'react'
import Image from 'next/image'
import './about.css'
import style from '@/app/modules/MainBlock/MainBlock.module.css'
import { AboutDone, AboutImage } from '@/assets/Images/About/index'
// import { popUpStore } from '@/app/modules/MainPopUp/popUpStore'

const aboutItems = [
  'Безкоштовна підтримка – ми допомагаємо підприємцям без фінансових внесків',
  'Практичні рішення – лише дієві поради та досвід експертів',
  'Об’єднання бізнесу – формуємо спільноту власників інтернет-магазинів',
  'Актуальність – підтримка в адаптації до нових умов ринку ',
]

const About: React.FC = () => {
  // const handleShow = popUpStore((state) => state.handleShow)

  return (
    <div className="about_block" id="about">
      <div className="customContainer">
        <div className="about_text_content">
          <div className="about_left">
            <p className="about_left_title">
              Про <span className="about_left_title_span">ФОНД</span>
            </p>
            <p className="about_left_text">
              <span className="about_left_text_span">
                Асоціація власників інтернет-магазинів
              </span>{' '}
              – це громадська організація, що об&apos;єднує підприємців, які ведуть
              онлайн-торгівлю.{' '}
              <span className="about_left_text_span">Наша місія</span> –
              допомогти малому бізнесу розвиватися в умовах війни, надаючи
              безкоштовні консультації, освітні матеріали та можливості для
              співпраці.
            </p>
            <a href="/about">
              <button className={style.box_main__btn}>
                Детальніше про нас
              </button>
            </a>
          </div>
          <div className="about_center_block">
            <Image className="about_block_image" src={AboutImage} alt="AboutImage" />
          </div>
          <div className="about_right_block">
            <p className="about_left_text_span">
              Ключові цінності та принципи роботи:
            </p>
            {aboutItems.map((text, index) => (
              <div key={index} className="about_done_block">
                <Image src={AboutDone} alt="AboutDone" width={20} height={20} />
                <p className="about_done_text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
