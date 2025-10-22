// 'use client'
// import React, { useRef, useState } from 'react'
// import { useForm, SubmitHandler } from 'react-hook-form'
// import { useRouter } from 'next/navigation'
// import { useTranslations } from 'next-intl'
// import { PhoneNumberUtil } from 'google-libphonenumber'
// import { toast, ToastContainer } from 'react-toastify'
// import { PhoneInput } from 'react-international-phone'
// import { headerFormStore } from './headerFormStore'
// import { sendInTg, THANK_ROUTE } from '@/constants'
// import style from './HeaderForm.module.css'
// import 'react-toastify/dist/ReactToastify.css'
// import 'react-international-phone/style.css'
// import { Toastify } from '@/app/components/Toastify/Toastify'
// import { DotIcon } from '@/app/components/DotIcon/DotIcon'
//
// interface FormData {
//   name: string
// }
//
// const HeaderForm: React.FC = () => {
//   const t = useTranslations()
//   const router = useRouter()
//   // eslint-disable-next-line
//   const show = headerFormStore((state: any) => state.show)
//   // eslint-disable-next-line
//   const handleClose = headerFormStore((state: any) => state.handleClose)
//
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, touchedFields },
//   } = useForm<FormData>({ mode: 'all' })
//
//   const [phone, setPhone] = useState('')
//   const [isBlurredPhone, setIsBlurredPhone] = useState(false)
//   const toastId = useRef<string | number | null>(null)
//
//   const isPhoneValid = (phone: string): boolean => {
//     const phoneUtil = PhoneNumberUtil.getInstance()
//     try {
//       return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
//     } catch {
//       return false
//     }
//   }
//
//   const isValid = isPhoneValid(phone)
//   // eslint-disable-next-line
//   const onSubmit: SubmitHandler<FormData> = async ({ name }: any) => {
//     if (!isValid) {
//       setIsBlurredPhone(true)
//       return
//     }
//
//     if (toastId.current) {
//       toast.dismiss(toastId.current)
//     }
//
//     toastId.current = toast(<Toastify type={'pending'} />, {
//       autoClose: 3000,
//       hideProgressBar: true,
//     })
//
//     const msg = `Заявка на консультацію:\nName - ${name}\nPhone - ${phone}`
//     const resp = await sendInTg(msg)
//
//     if (resp.ok) {
//       reset()
//       setPhone('')
//       setIsBlurredPhone(false)
//       handleClose()
//       router.push(THANK_ROUTE)
//     } else {
//       toast.update(toastId.current, {
//         render: t('toastify.warning.title'),
//         type: 'error',
//         autoClose: 7000,
//       })
//     }
//   }
//
//   const inputStyle = (error: boolean, touched: boolean) => {
//     if (error && touched)
//       return { boxShadow: 'inset 0px 0px 5px 5px rgba(255,0,0,.1)' }
//     if (!error && touched)
//       return { boxShadow: 'inset 0px 0px 5px 5px rgba(100,255,100,.1)' }
//     return {}
//   }
//
//   return (
//     <div className={`${style.wrap} ${show ? style.wrap_active : ''}`}>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className={`customContainer ${style.wrap_form}`}
//       >
//         <div className={style.wrap_form__box}>
//           <input
//             type="text"
//             className={style.wrap_form__box_input}
//             id="name"
//             placeholder={t('header.headerForm.name.placeholder')}
//             {...register('name', {
//               required: false,
//               minLength: 2,
//               maxLength: 30,
//             })}
//             autoComplete="off"
//             style={inputStyle(!!errors.name, !!touchedFields.name)}
//           />
//           <p className={style.wrap_form__box_txt}>
//             {t('header.headerForm.name.txt')}
//           </p>
//         </div>
//         <div className={style.wrap_form__box}>
//           <div className={style.wrap_form__box_telWrap}>
//             <DotIcon
//               fill={
//                 !isValid && isBlurredPhone
//                   ? 'rgb(195,2,2)'
//                   : isValid && isBlurredPhone
//                     ? 'rgb(47,161,47)'
//                     : '#FFAC1C'
//               }
//               className={style.wrap_form__box_telWrap__dot}
//             />
//             <PhoneInput
//               defaultCountry="ua"
//               className={style.wrap_form__box_telWrap__inp}
//               onChange={(phone) => setPhone(phone)}
//               value={phone}
//               onBlur={() => setIsBlurredPhone(true)}
//             />
//           </div>
//           <p className={style.wrap_form__box_txt}>
//             <DotIcon fill={'#FFAC1C'} /> {t('header.headerForm.tel.txt')}
//           </p>
//         </div>
//         <div className={style.wrap_form__boxBtn}>
//           <button className={style.wrap_form__boxBtn_btn} type="submit">
//             {t('header.headerForm.btn.name')}
//           </button>
//           <p className={style.wrap_form__box_txt}>
//             {t('header.headerForm.btn.txt')}
//           </p>
//         </div>
//       </form>
//       <ToastContainer />
//     </div>
//   )
// }
//
// export { HeaderForm }

'use client'
import type React from 'react'
import { useRef, useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { toast, ToastContainer } from 'react-toastify'
import { PhoneInput } from 'react-international-phone'
import { headerFormStore } from './headerFormStore'
import { sendInTg, sendInCrm, THANK_ROUTE } from '@/constants'
import style from './HeaderForm.module.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-international-phone/style.css'
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
  name: string
}

const HeaderForm: React.FC = () => {
  const t = useTranslations()
  const router = useRouter()
  // eslint-disable-next-line
  const show = headerFormStore((state: any) => state.show)
  // eslint-disable-next-line
  const handleClose = headerFormStore((state: any) => state.handleClose)

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

  // eslint-disable-next-line
  const onSubmit: SubmitHandler<FormData> = async ({ name }: any) => {
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
    const msg = `Заявка на консультацію (HeaderForm):\nName - ${name}\nPhone - ${phone}\nСторінка - ${currentPageUrl}\nUTM Source - ${utmParams.utm_source}\nUTM Medium - ${utmParams.utm_medium}\nUTM Campaign - ${utmParams.utm_campaign}\nUTM Term - ${utmParams.utm_term}\nUTM Content - ${utmParams.utm_content}`

    // Create CRM data with all form fields
    const crmData = {
      ...utmParams,
      lead_name: name,
      lead_phone: phone,
      lead_email: '',
      lead_business: '',
      lead_webpage: '',
      lead_source: 'Сайт AIMA (HeaderForm)',
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

  const inputStyle = (error: boolean, touched: boolean) => {
    if (error && touched)
      return { boxShadow: 'inset 0px 0px 5px 5px rgba(255,0,0,.1)' }
    if (!error && touched)
      return { boxShadow: 'inset 0px 0px 5px 5px rgba(100,255,100,.1)' }
    return {}
  }

  return (
    <div className={`${style.wrap} ${show ? style.wrap_active : ''}`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`customContainer ${style.wrap_form}`}
      >
        <div className={style.wrap_form__box}>
          <input
            type="text"
            className={style.wrap_form__box_input}
            id="name"
            placeholder={t('header.headerForm.name.placeholder')}
            {...register('name', {
              required: false,
              minLength: 2,
              maxLength: 30,
            })}
            autoComplete="off"
            style={inputStyle(!!errors.name, !!touchedFields.name)}
          />
          <p className={style.wrap_form__box_txt}>
            {t('header.headerForm.name.txt')}
          </p>
        </div>
        <div className={style.wrap_form__box}>
          <div className={style.wrap_form__box_telWrap}>
            <DotIcon
              fill={
                !isValid && isBlurredPhone
                  ? 'rgb(195,2,2)'
                  : isValid && isBlurredPhone
                    ? 'rgb(47,161,47)'
                    : '#FFAC1C'
              }
              className={style.wrap_form__box_telWrap__dot}
            />
            <PhoneInput
              defaultCountry="ua"
              className={style.wrap_form__box_telWrap__inp}
              onChange={(phone) => setPhone(phone)}
              value={phone}
              onBlur={() => setIsBlurredPhone(true)}
            />
          </div>
          <p className={style.wrap_form__box_txt}>
            <DotIcon fill={'#FFAC1C'} /> {t('header.headerForm.tel.txt')}
          </p>
        </div>
        <div className={style.wrap_form__boxBtn}>
          <button className={style.wrap_form__boxBtn_btn} type="submit">
            {t('header.headerForm.btn.name')}
          </button>
          <p className={style.wrap_form__box_txt}>
            {t('header.headerForm.btn.txt')}
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export { HeaderForm }
