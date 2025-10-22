'use client'
import React, { useMemo } from 'react'
import style from './ThankPage.module.css'
import { Breadcrumbs } from '../../modules/Breadcrumbs'
import { THANK_ROUTE } from '../../../constants'

// import Image from 'next/image'

// interface StepLabelProps {
//   step: number
//   totalSteps: number
// }

const ThankPage: React.FC = () => {
  const links = useMemo(
    () => [{ name: 'Подяка', link: THANK_ROUTE, isActive: true }],
    [],
  )

  return (
    <div className={style.bg}>
      <div className={`customContainer ${style.wrap}`}>
        <Breadcrumbs links={links} />
        <div className={style.wrap_box}>
          {/*<StepLabel step={2} totalSteps={3} />*/}
          <ThankMessage />
          <TelegramInvite />
        </div>
      </div>
    </div>
  )
}

// const StepLabel: React.FC<StepLabelProps> = ({ step, totalSteps }) => (
//   <div className={style.wrap_box__label}>
//     Крок {step}/{totalSteps}
//   </div>
// )

const ThankMessage: React.FC = () => (
  <div>
    <h1 className={style.wrap_box__title}>
      <span>Дякуємо</span> за звернення
    </h1>
    <h5 className={style.wrap_box__subtitle}>
      Наш менеджер зв’яжеться з вами найближчим часом
    </h5>
  </div>
)

const TelegramInvite: React.FC = () => (
  <div className={style.wrap_box__items}>
    {/*<p className={style.wrap_box__items_txt}>*/}
    {/*  Переходьте в наші спільноти в Facebook та Telegram!*/}
    {/*</p>*/}
    {/*<Image*/}
    {/*  src={arrow}*/}
    {/*  alt="arrow"*/}
    {/*  className={style.wrap_box__items_img}*/}
    {/*  loading="lazy"*/}
    {/*/>*/}
    {/*<a*/}
    {/*  href="/bonus.pdf"*/}
    {/*  download="bonus.pdf"*/}
    {/*  target="_blank"*/}
    {/*  rel="noopener noreferrer"*/}
    {/*  className={style.wrap_box__items_btn}*/}
    {/*>*/}
    {/*  Отримати бонус*/}
    {/*</a>*/}
  </div>
)

export { ThankPage }
