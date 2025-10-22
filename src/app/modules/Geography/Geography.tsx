'use client'

import React from 'react'
import Image from 'next/image'
import './geography.css'
import { kartaUkrainu } from '@/assets/Images/geography/index'

const Geography: React.FC = () => {
  return (
    <div className="geography_block" id="geography">
      <div className="customContainer">
        <p className="geography_title">
          Географія БО{' '}
          <span className="geography_title_span">&quot;Самотня свічка&quot;</span>
        </p>
        <div className="geography_content">
          <div className="geography_left">
            <p className="geography_text">
              Сьогодні фонд опікується понад{' '}
              <span className="geography_text_span">4 500 підопічними</span> у 48
              геріатричних та соціальних установах Західної України.
            </p>
            <p className="geography_text">
              Ми надаємо підтримку у шести областях:{' '}
              <span className="geography_text_span">
                Львівській, Волинській, Рівненській, Тернопільській,
                Івано-Франківській та Закарпатській.
              </span>
            </p>
            <p className="geography_text">
              З кожним місяцем ми розширюємо коло допомоги. У
              середньостроковій перспективі фонд планує вийти за межі Західної
              України, щоб охопити нові регіони та ще більше людей, які
              потребують нашої уваги й підтримки.
            </p>
          </div>
          <div className="geography_right">
            <Image
              src={kartaUkrainu}
              alt="Карта України"
              className="geography_image"
            />
          </div>
        </div>
        <p className="geography_bottom_text">
          Ми віримо, що світло добра не має кордонів.
        </p>
      </div>
    </div>
  )
}

export default Geography

