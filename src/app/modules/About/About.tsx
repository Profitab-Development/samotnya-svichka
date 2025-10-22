'use client'

import React from 'react'
import Image from 'next/image'
import './about.css'
import style from '@/app/modules/MainBlock/MainBlock.module.css'
import { AboutDone, AboutImage } from '@/assets/Images/About/index'
// import { popUpStore } from '@/app/modules/MainPopUp/popUpStore'

const aboutItems = [
  'Безкоштовна допомога – ми надаємо підтримку без фінансових внесків',
  'Практична допомога – лише дієва підтримка та турбота',
  'Об\'єднання добра – формуємо спільноту волонтерів та партнерів',
  'Актуальність – підтримка в найскладніші часи',
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
                Благодійна організація &quot;Самотня свічка&quot;
              </span>{' '}
              – це фонд, що об&apos;єднує людей, які хочуть допомогти похилим людям.{' '}
              <span className="about_left_text_span">Наша місія</span> –
              дарувати тепло і турботу людям похилого віку в геріатричних центрах
              України, надаючи їм підтримку та увагу.
            </p>
            <button className={style.box_main__btn} onClick={() => document.getElementById('geography')?.scrollIntoView({ behavior: 'smooth' })}>
              Дізнатися більше
            </button>
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
