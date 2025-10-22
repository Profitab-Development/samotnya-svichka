'use client'

import React, { useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { PhoneInput } from 'react-international-phone'
import { toast } from 'react-toastify'
import { MobBurgerMenuStore } from './MobBurgerMenuStore'
import style from './MobBurgerMenu.module.css'
import 'react-international-phone/style.css'

import {
  facebookLink,
  // instagramLink,
  mail as eMail,
  mobTel,
  sendInTg,
  telegramLink,
  THANK_ROUTE,
  // tiktokLink,
} from '@/constants'
import {
  MobFbH,
  MobFbS,
  MobMailIcon,
  mobMenuCloseBtn,
  MobTelIcon,
  MobTgH,
  MobTgS,
  // tg_blue,
  logo_svichka,
} from '@/assets/Icons'
import { Toastify } from '@/app/components/Toastify/Toastify'
import { DotIcon } from '@/app/components/DotIcon/DotIcon'
// import LanguagesChanger from '@/app/modules/header/LanguagesChanger/LanguagesChanger'

interface FormData {
  name: string
}

const socialsData = [
  // { normal: MobInstS, hover: MobInstH, link: instagramLink },
  { normal: MobFbS, hover: MobFbH, link: facebookLink },
  { normal: MobTgS, hover: MobTgH, link: telegramLink },
  // { normal: MobTikS, hover: MobTikH, link: tiktokLink },
]

const MobBurgerMenu: React.FC = () => {
  const t = useTranslations('header')
  const router = useRouter()
  const show = MobBurgerMenuStore((state) => state.show)
  const handleClose = MobBurgerMenuStore((state) => state.handleClose)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<FormData>({ mode: 'all' })

  const [phone, setPhone] = useState('')
  const [isBlurredPhone, setIsBlurredPhone] = useState(false)
  const toastId = useRef<string | number | null>(null)

  const isPhoneValid = (phone: string): boolean => {
    const phoneUtil = PhoneNumberUtil.getInstance()
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
    } catch {
      return false
    }
  }

  const isValid = isPhoneValid(phone)

  const onSubmit: SubmitHandler<FormData> = async ({ name }) => {
    if (!isValid) {
      setIsBlurredPhone(true)
      return
    }

    if (toastId.current) {
      toast.dismiss(toastId.current)
    }

    toastId.current = toast(<Toastify type="pending" />, {
      autoClose: 3000,
      hideProgressBar: true,
    })

    const msg = `Заявка на консультацію:\nName - ${name}\nPhone - ${phone}`
    const resp = await sendInTg(msg)

    if (resp.ok) {
      reset()
      setPhone('')
      setIsBlurredPhone(false)
      handleClose()
      router.push(THANK_ROUTE)
    } else {
      toast.update(toastId.current, {
        render: t('toastify.warning.title'),
        type: 'error',
        autoClose: 7000,
      })
    }
  }

  const inputStyle = (error: boolean, touched: boolean) => {
    if (error && touched)
      return { boxShadow: 'inset 0px 0px 5px 5px rgba(255,0,0,.1)' }
    if (!error && touched)
      return { boxShadow: 'inset 0px 0px 5px 5px rgba(100,255,100,.1)' }
    return {}
  }

  return (
    <div className={`${style.wrap} ${show ? style.wrap_active : ''}`}>
      <div className={`customContainer ${style.header}`}>
        <div className={style.header_top}>
          <Link href="/">
            <Image
              src={logo_svichka}
              alt="logo"
              className={style.header_top__logo}
            />
          </Link>
          {/*<LanguagesChanger />*/}
          <div className={style.header_top__right_burger} onClick={handleClose}>
            <Image
              src={mobMenuCloseBtn}
              alt="burger"
              className={style.header_top__right_burger__img}
              width={24}
              height={24}
            />
          </div>
        </div>

        <div className={style.header_center}>
          <form
            className={style.header_center__form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={style.header_center__form_inputs}>
              <input
                type="text"
                className={style.header_center__form_inputs__nameInput}
                id="name"
                placeholder={t('headerForm.name.placeholder')}
                {...register('name', {
                  required: false,
                  minLength: 2,
                  maxLength: 30,
                })}
                autoComplete="off"
                style={inputStyle(!!errors.name, !!touchedFields.name)}
              />

              <div className={style.header_center__form_inputs__telWrap}>
                <DotIcon
                  fill={
                    !isValid && isBlurredPhone
                      ? 'rgb(195,2,2)'
                      : isValid && isBlurredPhone
                        ? 'rgb(47,161,47)'
                        : '#FFAC1C'
                  }
                  className={style.header_center__form_inputs__telWrap_dot}
                />
                <PhoneInput
                  defaultCountry="ua"
                  className={style.header_center__form_inputs__telWrap_inp}
                  onChange={(phone) => setPhone(phone)}
                  value={phone}
                  onBlur={() => setIsBlurredPhone(true)}
                />
              </div>
            </div>
            <div className={style.header_center__form_btns}>
              <div className={style.header_center__form_btns__btnsBox}>
                <button className={style.header_center__form_btns__btnsBox_btn}>
                  {t('headerForm.btn.name')}
                </button>
                {/*<button*/}
                {/*  className={style.header_center__form_btns__btnsBox_btnTg}*/}
                {/*>*/}
                {/*  {t('telegram')}{' '}*/}
                {/*  <Image src={tg_blue} alt="tgIcon" width={24} height={24} />*/}
                {/*</button>*/}
              </div>
              <div className={style.header_center__form_btns__txtsBox}>
                <p className={style.header_center__form_btns__txtsBox_txt}>
                  <DotIcon fill="#FFAC1C" /> {t('headerForm.tel.txt')}
                </p>
                <p className={style.header_center__form_btns__txtsBox_txt}>
                  {t('headerForm.name.txt')}
                </p>
              </div>
            </div>
          </form>
          <div className={style.header_center__links}>
            <ContactItem
              icon={MobMailIcon}
              text={eMail}
              subText={t('telDropdown.mailSubText')}
              link={`mailto:${eMail}`}
            />
            <ContactItem
              icon={MobTelIcon}
              text={mobTel}
              subText={t('telDropdown.telSubText')}
              link={`tel:${mobTel}`}
            />
          </div>
        </div>
        <div className={style.header_bottom}>
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
  <a href={link} className={style.header_center__links_box}>
    <Image
      src={icon}
      alt="contact-icon"
      className={style.header_center__links_box__img}
      width={24}
      height={24}
    />
    <div className={style.header_center__links_box__wrap}>
      <div className={style.header_center__links_box__wrap_txt}>{text}</div>
      <div className={style.header_center__links_box__wrap_time}>{subText}</div>
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
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Image
        src={isHovered ? hover : normal}
        alt="social-icon"
        onMouseDown={() => setIsHovered(true)}
        onMouseUp={() => setIsHovered(false)}
        className={style.header_bottom__img}
        // width={24}
        // height={24}
      />
    </a>
  )
}

export { MobBurgerMenu }
