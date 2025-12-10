'use client'

import React from 'react'
import style from './CandleVideoBlock.module.css'

const CandleVideoBlock = () => {
  return (
    <section className={style.wrap} id="candle">
      <div className={`customContainer ${style.box}`}>
        <div className={style.box_content}>
          {/* LEFT TEXT */}
          <div className={style.box_text}>
            <p className={style.text_line}>
              Старість, яку не побачать діти. Погляди, яких ніхто не чекає.
              Тиша, що звучить гучніше за біль.
            </p>
            <p className={style.text_line}>
              Колись ці руки тримали життя країни. Сьогодні вони тримають лише
              спогади.
            </p>
            <p className={style.text_line}>
              Купи «Самотню Свічку» — і ти запалиш вогник там, де давно згасло
              тепло.
            </p>
            <p className={style.text_line}>
              Кожна свічка — це день світла, турботи й пам’яті.
            </p>
            <p className={style.text_line}>
              Світло твого серця може зігріти чиюсь самотність.
            </p>
          </div>

          {/* RIGHT VIDEO */}
          <div className={style.box_video}>
            <div className={style.video_wrapper}>
              <iframe
                className={style.video_iframe}
                src="https://drive.google.com/file/d/1s5uAxcD52RrATRJA3CLdukgkjkDG7T54/preview"
                allow="autoplay"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { CandleVideoBlock }
