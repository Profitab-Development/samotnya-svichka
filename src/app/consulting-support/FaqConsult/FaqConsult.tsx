'use client'
import React, { useCallback } from 'react'
import style from './Faq.module.css'
import { Accordion } from '@/app/components/Accordion/Accordion'

const FaqConsult: React.FC = () => {
  const accordionItems = useCallback(
    () => [
      {
        title: 'Чи підходять ваші консультації для початківців?',
        content:
          'Так! Ми допомагаємо на будь-якому етапі розвитку вашого бізнесу.',
      },
      {
        title: 'Скільки коштує консультація?',
        content: 'Вона абсолютно безкоштовна!',
      },
      {
        title: 'Як отримати консультацію?',
        content:
          'Натисніть кнопку та залиште заявку, і наші експерти зв’яжуться з вами.',
      },
    ],
    [],
  )

  return (
    <div className={style.bg}>
      <div className={`customContainer ${style.wrap}`}>
        <div className={style.wrap_titleWrap}>
          <h2 className={style.wrap_titleWrap__title}>
            Відповіді <span>на поширені запитання:</span>
          </h2>
          <h2 className={style.wrap_titleWrap__back}>питання</h2>
        </div>

        <div className={style.wrap_accordion}>
          {accordionItems().map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  )
}

export { FaqConsult }
