import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { useTranslations } from 'next-intl'
import style from './TelDropdown.module.css'

import {
  mobTel,
  mail as eMail,
  // instagramLink,
  facebookLink,
  telegramLink,
  // tiktokLink,
} from '@/constants'
import {
  facebook_gray,
  facebook_hover,
  mail,
  phone,
  telegram_gray,
  telegram_hover,
} from '@/assets/Icons'

interface SocialData {
  normal: string | StaticImageData
  hover: string | StaticImageData
  link: string
}

const socialsData: SocialData[] = [
  // { normal: instagram_gray, hover: instagram_hover, link: instagramLink },
  { normal: facebook_gray, hover: facebook_hover, link: facebookLink },
  { normal: telegram_gray, hover: telegram_hover, link: telegramLink },
  // {normal: tiktok_gray, hover: tiktok_hover, link: tiktokLink},
]

const TelDropdown: React.FC = () => {
  const t = useTranslations()
  const [isActive, setIsActive] = useState<boolean>(false)
  const [hasInteracted, setHasInteracted] = useState<boolean>(false)

  const toggleActive = (active: boolean) => {
    setIsActive(active)
    setHasInteracted(true)
  }

  return (
    <>
      <div
        className={`${style.backdrop} ${isActive ? style.backdrop_active : ''}`}
        onClick={() => toggleActive(false)}
      ></div>
      <div
        className={`${style.wrap} ${hasInteracted ? style.interacted : ''}`}
        onClick={() => toggleActive(!isActive)}
        onMouseEnter={() => toggleActive(true)}
        onMouseLeave={() => toggleActive(false)}
      >
        <div className={style.wrap_box}>
          <Image
            src={phone}
            alt="phone"
            className={style.wrap_box__img}
            width={24}
            height={24}
          />
          <span className={style.wrap_box__number}>{mobTel}</span>
          <svg
            className={`${style.wrap_box__arrow} ${
              isActive
                ? style.wrap_box__arrowActive
                : style.wrap_box__arrowDisable
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.7569 0.5C11.5143 0.5 11.2718 0.592911 11.0867 0.77937L6.7041 5.19583L2.32146 0.77937C1.95134 0.407089 1.35133 0.407089 0.981214 0.77937C0.611731 1.15229 0.611731 1.75685 0.981214 2.12976L6.03398 7.22079C6.40409 7.59307 7.00411 7.59307 7.37422 7.22079L12.427 2.12976C12.7965 1.75685 12.7965 1.15229 12.427 0.77937C12.2419 0.592911 11.9994 0.5 11.7569 0.5Z"
              fill="#212121"
            />
          </svg>
        </div>

        <div
          className={`${style.wrap_add} ${
            isActive ? style.wrap_addActive : style.wrap_addDisable
          }`}
        >
          <div className={style.wrap_add__top}>
            <ContactItem
              icon={mail}
              text={eMail}
              subText={t('header.telDropdown.mailSubText')}
              link={`mailto:${eMail}`}
            />
            <ContactItem
              icon={phone}
              text={mobTel}
              subText={t('header.telDropdown.telSubText')}
              link={`tel:${mobTel}`}
            />
          </div>

          <div className={style.wrap_add__bottom}>
            <p className={style.wrap_add__bottom_txt}>
              {t('header.telDropdown.bottomText')}
            </p>
            <div className={style.wrap_add__bottom_imgWrap}>
              {socialsData.map((soc, index) => (
                <SocialMediaIcon
                  key={index}
                  normal={soc.normal}
                  hover={soc.hover}
                  link={soc.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface ContactItemProps {
  icon: string | StaticImageData
  text: string
  subText: string
  link: string
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  text,
  subText,
  link,
}) => (
  <a href={link} className={style.wrap_add__top_box}>
    <Image
      src={icon}
      alt="contact-icon"
      className={style.wrap_add__top_box__img}
      width={24}
      height={24}
    />
    <div className={style.wrap_add__top_box__wrap}>
      <div className={style.wrap_add__top_box__wrap_txt}>{text}</div>
      <div className={style.wrap_add__top_box__wrap_time}>{subText}</div>
    </div>
  </a>
)

interface SocialMediaIconProps {
  normal: string | StaticImageData
  hover: string | StaticImageData
  link: string
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({
  normal,
  hover,
  link,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image
        src={isHovered ? hover : normal}
        alt="social-icon"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={style.wrap_add__bottom_imgWrap__img}
        width={24}
        height={24}
      />
    </a>
  )
}

export { TelDropdown }
