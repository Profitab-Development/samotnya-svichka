'use client'
import React from 'react'
import style from './PricesInstagram.module.css'
import classNames from 'classnames'
import Image from 'next/image'
import { useStaticTranslations } from '@/hooks/useStaticTranslations'
import { prices_arrow } from '@/assets/Images/Prices/Index'
import { facebookLink, telegramLink } from '@/constants'

const Prices: React.FC = () => {
  const { t } = useStaticTranslations()

  return (
    <div className={style.bg} id={'assoc'}>
      <div className={classNames(style.wrap, 'customContainer')}>
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
            <span>{t('prices.title.first')}</span> {t('prices.title.second')}
          </h2>
          <div className={style.wrap_top__back}>{t('prices.title.back')}</div>
          <p className={style.subtitle}>
            {t('prices.subtitle')} <span>{t('prices.subtitleBolt')}</span>
          </p>
        </div>

        <div className={style.wrap_bottom}>
          {/* Box 1 */}
          <div className={style.wrap_bottom__box}>
            <div className={style.wrap_bottom__box_main}>
              <p className={style.wrap_bottom__box_main__title}>
                {t('prices.box1.title')}
              </p>
              <p className={style.wrap_bottom__box_main__subtitle}>
                {t('prices.box1.subtitle')}
              </p>
              <a
                target="_blank"
                rel="noopener"
                href={facebookLink}
                className={style.button}
              >
                Долучитися
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    d="M7.2536 7.934L5.0486 5.7095M19.0121 7.934L21.2171 5.7095M5.0471 22.0295L7.2521 19.8035M13.1321 4.9685V2M4.3121 13.8695H1.3736M22.1861 22.754L27.9071 20.495C28.0451 20.4398 28.1635 20.3444 28.2468 20.2213C28.3301 20.0982 28.3747 19.9529 28.3747 19.8043C28.3747 19.6556 28.3301 19.5103 28.2468 19.3872C28.1635 19.2641 28.0451 19.1687 27.9071 19.1135L14.1596 13.691C14.0258 13.6392 13.8797 13.6276 13.7394 13.6575C13.599 13.6874 13.4704 13.7576 13.3694 13.8595C13.2683 13.9613 13.1991 14.0905 13.1703 14.2311C13.1415 14.3716 13.1543 14.5176 13.2071 14.651L18.5801 28.5275C18.8231 29.1575 19.7051 29.1575 19.9481 28.5275L22.1861 22.754Z"
                    className={style.buttonSvg}
                    stroke-width="2.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Box 2 */}
          <div className={style.wrap_bottom__boxSecond}>
            <div className={style.wrap_bottom__boxSecond_main}>
              <p className={style.wrap_bottom__boxSecond_main__title}>
                {t('prices.box2.title')}
              </p>
              <p className={style.wrap_bottom__box_main__subtitle}>
                {t('prices.box2.subtitle')}
              </p>
              <a
                target="_blank"
                rel="noopener"
                href={telegramLink}
                className={style.button}
              >
                Долучитися
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                >
                  <path
                    d="M7.2536 7.934L5.0486 5.7095M19.0121 7.934L21.2171 5.7095M5.0471 22.0295L7.2521 19.8035M13.1321 4.9685V2M4.3121 13.8695H1.3736M22.1861 22.754L27.9071 20.495C28.0451 20.4398 28.1635 20.3444 28.2468 20.2213C28.3301 20.0982 28.3747 19.9529 28.3747 19.8043C28.3747 19.6556 28.3301 19.5103 28.2468 19.3872C28.1635 19.2641 28.0451 19.1687 27.9071 19.1135L14.1596 13.691C14.0258 13.6392 13.8797 13.6276 13.7394 13.6575C13.599 13.6874 13.4704 13.7576 13.3694 13.8595C13.2683 13.9613 13.1991 14.0905 13.1703 14.2311C13.1415 14.3716 13.1543 14.5176 13.2071 14.651L18.5801 28.5275C18.8231 29.1575 19.7051 29.1575 19.9481 28.5275L22.1861 22.754Z"
                    className={style.buttonSvg}
                    stroke-width="2.25"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Box 3 */}
          <div className={style.wrap_bottom__boxThird}>
            <div className={style.wrap_bottom__boxThird_bg}></div>
            <div className={style.wrap_bottom__boxThird_main}>
              <Image
                src={prices_arrow}
                alt="arrow"
                className={style.wrap_bottom__boxThird_bg__arrow}
              />
              <div className={style.wrap_bottom__boxThird_main__title}>
                {t('prices.box3.title')}
              </div>
              <div className={style.wrap_bottom__boxThird_main__subtitle}>
                {t('prices.box3.subtitle')}
              </div>
            </div>
          </div>

          {/* Box 4 */}
        </div>
      </div>
    </div>
  )
}

export { Prices }
