'use client'

import React, { useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useStaticTranslations } from '@/hooks/useStaticTranslations'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { PhoneInput } from 'react-international-phone'
import { toast } from 'react-toastify'
import { MobBurgerMenuStore } from './MobBurgerMenuStore'
import style from './MobBurgerMenu.module.css'
import 'react-international-phone/style.css'

import {
  sendInTg,
  THANK_ROUTE,
} from '@/constants'
import {
  mobMenuCloseBtn,
  MobTelIcon,
  logo_svichka,
} from '@/assets/Icons/Header/header'
import { Toastify } from '@/app/components/Toastify/Toastify'
import { DotIcon } from '@/app/components/DotIcon/DotIcon'

interface FormData {
  name: string
}

// const socialsData = [
//   // { normal: MobInstS, hover: MobInstH, link: instagramLink },
//   { normal: MobFbS, hover: MobFbH, link: facebookLink },
//   { normal: MobTgS, hover: MobTgH, link: telegramLink },
//   // { normal: MobTikS, hover: MobTikH, link: tiktokLink },
// ]

const MobBurgerMenu: React.FC = () => {
  const { t } = useStaticTranslations()
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
          <nav className={style.header_center__nav}>
            <a
              href="/about"
              className={style.header_center__nav_link}
              onClick={(e) => {
                e.preventDefault()
                window.location.href = '/about'
                handleClose()
              }}
            >
              Про нас
            </a>
            <a
              href="#projects"
              className={style.header_center__nav_link}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('projects')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                  handleClose()
                }
              }}
            >
              Проекти
            </a>
            <a
              href="#events"
              className={style.header_center__nav_link}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('events')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                  handleClose()
                }
              }}
            >
              Події
            </a>
            <a
              href="#contacts"
              className={style.header_center__nav_link}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('contacts')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                  handleClose()
                }
              }}
            >
              Контакти
            </a>
          </nav>
          <form
            className={style.header_center__form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={style.header_center__form_inputs}>
              <input
                type="text"
                className={style.header_center__form_inputs__nameInput}
                id="name"
                placeholder="Ваше ім&apos;я"
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
                  Надіслати
                </button>
              </div>
              <div className={style.header_center__form_btns__txtsBox}>
                <p className={style.header_center__form_btns__txtsBox_txt}>
                  <DotIcon fill="#FFAC1C" /> *Поля з позначкою є обов&apos;язковими для заповнення
                </p>
                <p className={style.header_center__form_btns__txtsBox_txt}>
                  *Натискаючи кнопку, ви дозволяєте обробку персональних даних
                </p>
              </div>
            </div>
          </form>
          <div className={style.header_center__links}>
            <ContactItem
              icon={MobTelIcon}
              text="+38 055 555 55 55"
              subText="Зворотний дзвінок"
              link="tel:+380555555555"
            />
          </div>
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

export { MobBurgerMenu }
