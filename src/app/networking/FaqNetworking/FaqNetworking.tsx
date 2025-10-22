'use client'
import React, { useCallback } from 'react'
import style from './Faq.module.css'
import { Accordion } from '@/app/components/Accordion/Accordion'

const FaqNetworking: React.FC = () => {
  const accordionItems = useCallback(
    () => [
      {
        title:
          'Як я можу приєднатися до спільноти власників інтернет-магазинів?',
        content:
          'Ви можете приєднатися через наші відкриті спільноти у Facebook та Telegram. Посилання доступні на сторінках «Контакти» та «Про нас».',
      },
      {
        title: 'Хто може брати участь у нетворкінгових подіях?',
        content:
          'Будь-хто, хто має або планує запустити інтернет-магазин. Ми відкриті до підприємців на різних етапах розвитку.',
      },
      {
        title: 'Яку користь я отримаю від участі в таких подіях?',
        content:
          'Ви зможете знайти нових партнерів, обмінятися досвідом, дізнатися про реальні кейси від інших власників бізнесу, а також отримати нові ідеї для розвитку.',
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

export { FaqNetworking }
