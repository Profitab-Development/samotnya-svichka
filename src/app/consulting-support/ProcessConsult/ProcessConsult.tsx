'use client'
import React from 'react'
import style from './Process.module.css'
import {
  proces1,
  proces2,
  proces3,
  proces4,
  proces5,
  proces6,
  ArrowProcess,
} from '@/assets/Images/ConsultPage/Process'

import Image, { StaticImageData } from 'next/image'

interface ProcessItem {
  number: number
  image: StaticImageData
  alt: string
  titleKey: string
  subtitleKey?: string
}

const processItems: ProcessItem[] = [
  {
    number: 1,
    image: proces1,
    alt: 'process_smm',
    titleKey: 'Технічні консультації ',
    subtitleKey:
      'Щоб ваш інтернет-магазин працював безперебійно, важливо правильно обрати платформу, інтегрувати потрібні сервіси та подбати про безпеку. \n' +
      'Ми допоможемо вам з такими питаннями:',
  },
  {
    number: 2,
    image: proces2,
    alt: 'process_page',
    titleKey: 'Вибір платформи ',
    subtitleKey:
      'Проаналізуємо ваші потреби та підберемо оптимальну CMS сайту (aima, Shopify, OpenCart, WooCommerce, PrestaShop та ін.).',
  },
  {
    number: 3,
    image: proces3,
    alt: 'process_note',
    titleKey: 'Налаштування інтеграцій',
    subtitleKey:
      'Допоможемо підключити платіжні системи (LiqPay, WayForPay, PayPal) та CRM \n' +
      'для автоматизації бізнес-процесів.',
  },
  {
    number: 4,
    image: proces4,
    alt: 'process_gift',
    titleKey: 'Вибір хостингу',
    subtitleKey:
      'Порекомендуємо надійний хостинг \n' +
      'для стабільної роботи сайту, швидкого завантаження сторінок і захисту від збоїв.',
  },
  {
    number: 5,
    image: proces5,
    alt: 'process_target',
    titleKey: 'Оптимізація сайту',
    subtitleKey:
      'Порекомендуємо надійний хостинг \n' +
      'для стабільної роботи сайту, швидкого завантаження сторінок і захисту від збоїв.',
  },
  {
    number: 6,
    image: proces6,
    alt: 'process_dollar',
    titleKey: 'Забезпечення безпеки',
    subtitleKey:
      'Розповімо, як захистити сайт \n' +
      'від хакерських атак, витоків даних \n' +
      'і шахрайських операцій.',
  },
]

const ProcessConsult: React.FC = () => {
  return (
    <div className={style.bg}>
      <div className={`customContainer ${style.wrap}`}>
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
            Що <span> ми пропонуємо</span>
          </h2>
          <div className={style.wrap_top__back}>ми пропонуємо</div>
          <div>
            <p className={style.mission_subtile}>
              Ми знаємо, як складно інтернет-магазинам підібрати правильні
              технічні рішення: обрати платформу, налаштувати інтеграції,
              забезпечити безпеку даних та ефективну роботу сайту. Наша команда
              експертів допоможе вам ухвалити обґрунтовані рішення, які
              забезпечать стаб ільність, безпеку та результативність вашого
              бізнесу.
            </p>
          </div>
        </div>
        <div className={style.wrap_boxes}>
          {processItems.map(({ number, image, alt, titleKey, subtitleKey }) => (
            <div
              key={number}
              className={
                number === 1 ? style.wrap_boxes__mainBox : style.wrap_boxes__box
              }
            >
              <Image
                src={image}
                alt={alt}
                className={
                  number === 1
                    ? style.wrap_boxes__mainBox_img
                    : style.wrap_boxes__box_img
                }
                loading="lazy"
              />
              <p
                className={
                  number === 1
                    ? style.wrap_boxes__mainBox_title
                    : style.wrap_boxes__box_title
                }
              >
                {titleKey}
              </p>
              {subtitleKey && (
                <p
                  className={
                    number === 1
                      ? style.wrap_boxes__mainBox_subtitle
                      : style.wrap_boxes__box_subtitle
                  }
                >
                  {subtitleKey}
                </p>
              )}
            </div>
          ))}
        </div>
        <Image
          className={style.arrow_process}
          src={ArrowProcess}
          alt="ArrowProcess"
        />
      </div>
    </div>
  )
}

export { ProcessConsult }
