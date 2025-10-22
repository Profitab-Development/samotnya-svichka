'use client'
import React, { useCallback } from 'react'
import style from './Faq.module.css'
import { Accordion } from '@/app/components/Accordion/Accordion'

const FaqPartners: React.FC = () => {
  const accordionItems = useCallback(
    () => [
      {
        title: 'Як отримати знижку?',
        content: 'Просто зареєструйтесь у нашій спільноті та подайте заявку.',
      },
      {
        title: 'Які сервіси доступні в партнерській програмі?',
        content:
          'Наша партнерська програма включає ексклюзивні знижки та спеціальні умови від провідних e-commerce сервісів:\n' +
          '\n' +
          'Aima – мобільний застосунок для створення та управління інтернет-магазином\n' +
          'Знаєш Agency – агентство інтернет-маркетингу (таргетована реклама, Google Ads, Google Shopping, SMM, створення інтернет-магазинів)\n' +
          'Tred – LMS-платформа для створення, управління та продажу онлайн-курсів\n' +
          '\n',
      },
      {
        title: 'Чи є приховані платежі або зобов’язання?',
        content: 'Ні, всі пропозиції прозорі та вигідні для власників бізнесу.',
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

export { FaqPartners }
