'use client'

import React, { useRef, useState } from 'react'
// import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useStaticTranslations } from '@/hooks/useStaticTranslations'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { PhoneInput } from 'react-international-phone'
import { toast } from 'react-toastify'
import { TabletBurgerMenuStore } from './TabletBurgerMenuStore'
import style from './TabletBurgerMenu.module.css'
import 'react-international-phone/style.css'

import {
  sendInTg,
  THANK_ROUTE,
} from '@/constants'
// import { tg_white, MobTelIcon } from '@/assets/Icons'
import { Toastify } from '@/app/components/Toastify/Toastify'
import { DotIcon } from '@/app/components/DotIcon/DotIcon'

interface FormData {
  name: string
}

interface LinkItem {
  to: string
  label: string
}

const TabletBurgerMenu: React.FC = () => {
  const { t } = useStaticTranslations()
  const router = useRouter()
  const show = TabletBurgerMenuStore((state) => state.show)
  const handleClose = TabletBurgerMenuStore((state) => state.handleClose)

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

  const links: LinkItem[] = [
    { to: '/about', label: 'Про нас' },
    { to: '#projects', label: 'Проекти' },
    { to: '#events', label: 'Події' },
    { to: '#contacts', label: 'Контакти' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      handleClose()
    }
  }

  return (
    <>
      <div
        className={`${style.backdrop} ${show ? style.backdrop_active : ''}`}
        onClick={handleClose}
      ></div>
      <div className={`${style.wrap} ${show ? style.wrap_active : ''}`}>
        <div className={`customContainer ${style.wrap_right}`}>
          <nav className={style.wrap_right__nav}>
            {links.map(({ to, label }) => (
              <a
                key={to}
                href={to}
                className={style.wrap_right__nav_link}
                onClick={(e) => {
                  e.preventDefault()
                  if (to.startsWith('/')) {
                    // Перехід на іншу сторінку
                    window.location.href = to
                    handleClose()
                  } else {
                    // Скрол до секції на поточній сторінці
                    scrollToSection(to.replace('#', ''))
                  }
                }}
              >
                {label}
              </a>
            ))}
          </nav>
          <form
            className={style.wrap_right__form}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={style.wrap_right__form_inputs}>
              <input
                type="text"
                className={style.wrap_right__form_inputs__nameInput}
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

              <div className={style.wrap_right__form_inputs__telWrap}>
                <DotIcon
                  fill={
                    !isValid && isBlurredPhone
                      ? 'rgb(195,2,2)'
                      : isValid && isBlurredPhone
                        ? 'rgb(47,161,47)'
                        : '#FFAC1C'
                  }
                  className={style.wrap_right__form_inputs__telWrap_dot}
                />
                <PhoneInput
                  defaultCountry="ua"
                  className={style.wrap_right__form_inputs__telWrap_inp}
                  onChange={(phone) => setPhone(phone)}
                  value={phone}
                  onBlur={() => setIsBlurredPhone(true)}
                />
              </div>
            </div>
            <div className={style.wrap_right__form_btns}>
              <button className={style.wrap_right__form_btns__btn}>
                Надіслати
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export { TabletBurgerMenu }
