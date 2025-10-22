'use client'

import type React from 'react'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Modal } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { PhoneInput } from 'react-international-phone'
import { useStaticTranslations } from '@/hooks/useStaticTranslations'
import { toast, ToastContainer } from 'react-toastify'
import { popUpStore } from './popUpStore'
import { sendInTg, sendInCrm, THANK_ROUTE } from '@/constants'
import style from './MainPopUp.module.css'
import 'react-international-phone/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import popUpImage from '@/assets/Icons/MainBlock/popup_image.webp'
import ExitIcon from '@/assets/Icons/MainBlock/ExitIcon.webp'
import mobMenuCloseBtn from '@/assets/Icons/Header/mobMenuCloseBtn.webp'
import { useWindowSize } from '@/hooks'
import { Toastify } from '@/app/components/Toastify/Toastify'
import { DotIcon } from '@/app/components/DotIcon/DotIcon'
import type { UTMParams } from '@/models'

// Add UTM parameter tracking function
const getUTMParams = (): UTMParams => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search)
    return {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || '',
    }
  }
  return {
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
  }
}

interface FormData {
  name: string | boolean
  business: string | boolean
  webPage: string | boolean
}

const MainPopUp: React.FC = () => {
  const { t } = useStaticTranslations()
  const { width } = useWindowSize()
  const router = useRouter()
  const show = popUpStore((state) => state.show)
  const handleClose = popUpStore((state) => state.handleClose)
  const [isBlurredPhone, setIsBlurredPhone] = useState<boolean>(false)
  const [phone, setPhone] = useState('')
  const [isBlurred] = useState(false)
  const [isBlurredName, setIsBlurredName] = useState(false)
  // const [isBlurredBusiness, setIsBlurredBusiness] = useState(false)
  // const [isBlurredWebPage, setIsBlurredWebPage] = useState(false)

  const phoneUtil = PhoneNumberUtil.getInstance()
  const isPhoneValid = () => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
      // eslint-disable-next-line
    } catch (error) {
      return false
    }
  }
  const isValid = isPhoneValid()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: 'all' })

  const toastId = useRef<string | number | null>(null)

  const onSubmit = async ({ name, business, webPage }: FormData) => {
    if (!isValid) {
      setIsBlurredPhone(true)
      return
    }

    if (toastId.current) {
      toast.dismiss(toastId.current)
    }

    // Show pending message
    toastId.current = toast(<Toastify type="pending" />, {
      autoClose: false,
      hideProgressBar: true,
    })

    // Get UTM parameters
    const utmParams = getUTMParams()

    // Get current page URL
    const currentPageUrl =
      typeof window !== 'undefined' ? window.location.href : ''
    const pagePath =
      typeof window !== 'undefined' ? window.location.pathname : ''

    // Create message with all form fields, UTM parameters, and page URL
    const msg = `Заявка на консультацію (Popup):\nName - ${name}\nPhone - ${phone}\nBusiness - ${business || 'не вказано'}\nWebPage - ${webPage || 'не вказано'}\nСторінка - ${currentPageUrl}\nUTM Source - ${utmParams.utm_source}\nUTM Medium - ${utmParams.utm_medium}\nUTM Campaign - ${utmParams.utm_campaign}\nUTM Term - ${utmParams.utm_term}\nUTM Content - ${utmParams.utm_content}`

    // Create CRM data with all form fields
    const crmData = {
      ...utmParams,
      lead_name: name as string,
      lead_phone: phone,
      lead_email: '',
      lead_business: (business as string) || '',
      lead_webpage: (webPage as string) || '',
      lead_source: 'Сайт AIMA (Popup)',
      page_url: currentPageUrl,
      page_path: pagePath,
    }

    try {
      // Send to both Telegram and CRM
      const respTg = await sendInTg(msg)
      const respCrm = await sendInCrm(crmData)

      if (respCrm || respTg?.ok) {
        toast.update(toastId.current, {
          render: <Toastify type="success" />,
          type: 'success',
          icon: false,
          autoClose: 1200,
          hideProgressBar: false,
          onClose: () => {
            reset()
            setPhone('')
            setIsBlurredPhone(false)
            handleClose()
            router.push(THANK_ROUTE)
          },
        })
      }
    } catch (error) {
      toast.update(toastId.current, {
        render: `Упс, щось пішло не так з відправкою... ${error}`,
        type: 'error',
        autoClose: 7000,
      })
    }
  }

  const inputStyle = (
    error: boolean,
    blurred: boolean,
    value: string | boolean,
  ) => {
    if (error) return style.errorInput
    if (!error && blurred && value) return style.validInput
    return ''
  }

  return (
    <Modal show={show} onHide={handleClose} className={style.myModal}>
      <Image
        src={popUpImage || '/placeholder.svg'}
        alt="Pop-up background"
        layout="fill"
        objectFit="cover"
      />
      <Modal.Body>
        <Image
          src={width > 720 ? ExitIcon : mobMenuCloseBtn}
          alt="Close"
          width={24}
          height={24}
          onClick={handleClose}
        />
        <form className={style.myModal_form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={style.myModal_form__title}>
            {t('mainPopUp.titleFirst')}{' '}
            <span>{t('mainPopUp.titleSecond')} </span>
          </h2>
          <h5 className={style.myModal_form__subTitle}>
            {t('mainPopUp.subTitleFirst')} <br />{' '}
            {t('mainPopUp.subTitleSecond')}
          </h5>
          <div className={style.myModal_form__box}>
            <label htmlFor="name" className={style.myModal_form__box_txt}>
              {t('mainPopUp.formName')}
            </label>
            <input
              type="text"
              id="name"
              placeholder={t('mainPopUp.formName')}
              className={`${style.myModal_form__box_inp} ${inputStyle(!!errors.name, isBlurredName, !!errors.name)}`}
              onFocus={() => setIsBlurredName(true)}
              autoComplete="off"
              {...register('name', {
                required: true,
                minLength: 2,
                maxLength: 30,
              })}
            />
          </div>
          <div className={style.myModal_form__box}>
            <label htmlFor="phone" className={style.myModal_form__box_txt}>
              {t('mainPopUp.formTel')}
            </label>
            <span className={style.myModal_form__box_inp__tel}>
              <PhoneInput
                defaultCountry="ua"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                className={`${style.myModal_form__box_inp} ${inputStyle(!isValid, isBlurred, phone)}`}
                onFocus={() => setIsBlurredPhone(true)}
              />
            </span>
            <DotIcon
              fill={
                !isValid && isBlurredPhone
                  ? 'rgb(195,2,2)'
                  : isValid && isBlurredPhone
                    ? 'rgb(47,161,47)'
                    : '#FFAC1C'
              }
              className={style.myModal_form__box_dot}
            />
          </div>
          {/*<div className={style.myModal_form__box}>*/}
          {/*  <label htmlFor="business" className={style.myModal_form__box_txt}>*/}
          {/*    {t('mainPopUp.formSphere')}*/}
          {/*  </label>*/}
          {/*  <input*/}
          {/*    type="text"*/}
          {/*    id="business"*/}
          {/*    placeholder={t('mainPopUp.formSphere')}*/}
          {/*    className={`${style.myModal_form__box_inp} ${inputStyle(!!errors.business, isBlurredBusiness, !!errors.business)}`}*/}
          {/*    onFocus={() => setIsBlurredBusiness(true)}*/}
          {/*    autoComplete="off"*/}
          {/*    {...register('business', {*/}
          {/*      required: false,*/}
          {/*      minLength: 2,*/}
          {/*      maxLength: 30,*/}
          {/*    })}*/}
          {/*  />*/}
          {/*</div>*/}
          <div className={style.myModal_form__box}>
            {/*<label htmlFor="webPage" className={style.myModal_form__box_txt}>*/}
            {/*  {t('mainPopUp.formWebPage')}*/}
            {/*</label>*/}
            {/*<input*/}
            {/*  type="text"*/}
            {/*  id="webPage"*/}
            {/*  placeholder={t('mainPopUp.formWebPagePlaceholder')}*/}
            {/*  className={`${style.myModal_form__box_inp} ${inputStyle(!!errors.webPage, isBlurredWebPage, !!errors.webPage)}`}*/}
            {/*  onFocus={() => setIsBlurredWebPage(true)}*/}
            {/*  autoComplete="off"*/}
            {/*  {...register('webPage', {*/}
            {/*    required: false,*/}
            {/*    minLength: 2,*/}
            {/*    maxLength: 200,*/}
            {/*  })}*/}
            {/*/>*/}
            <div>
              <sup>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                  fill="none"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" fill="#FFAC1C" />
                </svg>
              </sup>{' '}
              <span className={style.myModal_form__box_inf}>
                <sup>*</sup>
                {t('mainPopUp.formInf')}
              </span>
            </div>
          </div>

          <div className={style.myModal_form__boxBtn}>
            <button className={style.myModal_form__boxBtn_btn} type="submit">
              {t('mainPopUp.formBtn')}
            </button>
            <span className={style.myModal_form__boxBtn_txt}>
              <sup>*</sup> {t('mainPopUp.formTxt')}
            </span>
          </div>
        </form>
      </Modal.Body>
      <ToastContainer />
    </Modal>
  )
}

export { MainPopUp }
