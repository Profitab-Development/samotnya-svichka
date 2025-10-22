'use client'
import React, { useCallback } from 'react'
import style from './Faq.module.css'
import { Accordion } from '@/app/components/Accordion/Accordion'

const FaqEducation: React.FC = () => {
  const accordionItems = useCallback(
    () => [
      {
        title: 'Як взяти участь у вебінарах?',
        content:
          'Просто заповніть заявку – ми надішлемо вам посилання на подію.',
      },
      {
        title: 'Чи доступні матеріали після навчання?',
        content: 'Так, усі учасники отримують записи та корисні матеріали.',
      },
      {
        title: 'Це дійсно безкоштовно?',
        content:
          'Так, ми надаємо знання безкоштовно для розвитку бізнес-спільноти.',
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

export { FaqEducation }
