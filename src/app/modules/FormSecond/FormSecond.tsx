// 'use client'
//
// import type React from 'react'
// import { useRef, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { useForm } from 'react-hook-form'
// import { PhoneNumberUtil } from 'google-libphonenumber'
// import { toast, ToastContainer } from 'react-toastify'
// import { Toastify } from '../../components/Toastify/Toastify'
// import { DotIcon } from '../../components/DotIcon/DotIcon'
// import { THANK_ROUTE, sendInTg } from '@/constants'
// import style from './FormSecond.module.css'
// import { PhoneInput } from 'react-international-phone'
//
// interface FormData {
//   name: string
// }
//
// const FormSecond: React.FC = () => {
//   const router = useRouter()
//
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, touchedFields },
//   } = useForm<FormData>({ mode: 'all' })
//
//   const [phone, setPhone] = useState<string>('')
//   const [isBlurredPhone, setIsBlurredPhone] = useState<boolean>(false)
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
//
//   const onSubmit = async ({ name }: FormData) => {
//     if (!isValid) {
//       setIsBlurredPhone(true)
//       return
//     }
//
//     if (toastId.current) {
//       toast.dismiss(toastId.current)
//     }
//
//     // Show success message immediately
//     toast.success(<Toastify type="success" />, {
//       autoClose: 1200,
//       hideProgressBar: false,
//       onClose: () => {
//         reset()
//         setPhone('')
//         setIsBlurredPhone(false)
//         router.push(THANK_ROUTE)
//       },
//     })
//
//     const msg = `Заявка на консультацію:\nName - ${name}\nPhone - ${phone}`
//
//     // Send the request without waiting for the response
//     sendInTg(msg)
//       .then((resp) => {
//         console.log('Server response:', resp)
//       })
//       .catch((error) => {
//         console.error('Error sending message:', error)
//       })
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
//     <div className={style.bg} id="formSecond">
//       <div className={`${style.wrap} customContainer`}>
//         <div className={style.wrap_top}>
//           <p className={style.wrap_top__title}>
//             <span>замовлення</span> зворотного зв&#39;язку
//           </p>
//           <p className={style.wrap_top__subtitle}>
//             Залиште своє запитання, і ми відповімо найближчим часом!
//           </p>
//         </div>
//         <form className={style.wrap_form} onSubmit={handleSubmit(onSubmit)}>
//           <div className={style.wrap_form__box}>
//             <input
//               type="text"
//               className={style.wrap_form__box_input}
//               id="name"
//               placeholder="Імʼя"
//               {...register('name', {
//                 required: true,
//                 minLength: 2,
//                 maxLength: 30,
//               })}
//               autoComplete="off"
//               style={inputStyle(!!errors?.name, !!touchedFields?.name)}
//             />
//             <p className={style.wrap_form__box_txt}>
//               *Працюємо в будні дні з 10:00 до 18:00 год.
//               <br /> Заявки залишені на вихідних опрацьовуються в перший робочий
//               день
//             </p>
//           </div>
//
//           <div className={style.wrap_form__box}>
//             <div className={style.wrap_form__box_telWrap}>
//               <DotIcon
//                 fill={
//                   !isValid && isBlurredPhone
//                     ? 'rgb(195,2,2)'
//                     : isValid && isBlurredPhone
//                       ? 'rgb(47,161,47)'
//                       : '#FFAC1C'
//                 }
//                 className={style.wrap_form__box_telWrap__dot}
//               />
//               <PhoneInput
//                 defaultCountry="ua"
//                 className={style.wrap_form__box_telWrap__inp}
//                 onChange={(value) => setPhone(value)}
//                 value={phone}
//                 onFocus={() => setIsBlurredPhone(true)}
//               />
//             </div>
//             <p className={style.wrap_form__box_txt}>
//               <DotIcon fill="#FFAC1C" /> *Форми з позначкою є обов’язковими для
//               заповнення
//             </p>
//           </div>
//
//           <div className={style.wrap_form__boxBtn}>
//             <button className={style.wrap_form__boxBtn_btn} type="submit">
//               Надіслати
//             </button>
//             <p className={style.wrap_form__box_txt}>
//               *Натискаючи кнопку, ти дозволяєш обробку персональних даних та
//               погоджуєшся з політикою конфіденційності
//             </p>
//           </div>
//           <div className={style.mobTexts}>
//             <p className={style.mobTexts_txt}>
//               *Працюємо в будні дні з 10:00 до 18:00 год. <br />
//               Заявки залишені на вихідних опрацьовуються в перший робочий день
//             </p>
//             <p className={style.mobTexts_txt}>
//               <DotIcon fill="#FFAC1C" /> *Форми з позначкою є обов’язковими для
//               заповнення
//             </p>
//             <p className={style.mobTexts_txt}>
//               *Натискаючи кнопку, ти дозволяєш обробку персональних даних та
//               погоджуєшся з політикою конфіденційності
//             </p>
//           </div>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   )
// }
//
// export { FormSecond }

'use client'
import type React from 'react'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { PhoneNumberUtil } from 'google-libphonenumber'
import { toast, ToastContainer } from 'react-toastify'
import { Toastify } from '../../components/Toastify/Toastify'
import { DotIcon } from '../../components/DotIcon/DotIcon'
import { THANK_ROUTE, sendInTg, sendInCrm } from '@/constants'
import style from './FormSecond.module.css'
import { PhoneInput } from 'react-international-phone'
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

const FormSecond: React.FC = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<FormData>({ mode: 'all' })

  const [phone, setPhone] = useState<string>('')
  const [isBlurredPhone, setIsBlurredPhone] = useState<boolean>(false)
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

  const onSubmit = async ({ name }: FormData) => {
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
    const msg = `Заявка на консультацію (Форма):\nName - ${name}\nPhone - ${phone}\nСторінка - ${currentPageUrl}\nUTM Source - ${utmParams.utm_source}\nUTM Medium - ${utmParams.utm_medium}\nUTM Campaign - ${utmParams.utm_campaign}\nUTM Term - ${utmParams.utm_term}\nUTM Content - ${utmParams.utm_content}`

    // Create CRM data with all form fields
    const crmData = {
      ...utmParams,
      lead_name: name,
      lead_phone: phone,
      lead_email: '',
      lead_business: '',
      lead_webpage: '',
      lead_source: 'Сайт AIMA (FormSecond)',
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
    <div className={style.bg} id="formSecond">
      <div className={`${style.wrap} customContainer`}>
        <div className={style.wrap_top}>
          <p className={style.wrap_top__title}>
            <span>замовлення</span> зворотного зв&#39;язку
          </p>
          <p className={style.wrap_top__subtitle}>
            Залиште своє запитання, і ми відповімо найближчим часом!
          </p>
        </div>
        <form className={style.wrap_form} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.wrap_form__box}>
            <input
              type="text"
              className={style.wrap_form__box_input}
              id="name"
              placeholder={'Імʼя'}
              {...register('name', {
                required: true,
                minLength: 2,
                maxLength: 30,
              })}
              autoComplete="off"
              style={inputStyle(!!errors?.name, !!touchedFields?.name)}
            />
            <p className={style.wrap_form__box_txt}>
              *Працюємо в будні дні з 10:00 до 18:00 год.
              <br /> Заявки залишені на вихідних опрацьовуються в перший робочий
              день
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
                onChange={(value) => setPhone(value)}
                value={phone}
                onFocus={() => setIsBlurredPhone(true)}
              />
            </div>
            <p className={style.wrap_form__box_txt}>
              <DotIcon fill="#FFAC1C" />{' '}
              {"*Форми з позначкою є обов'язковими для заповнення"}
            </p>
          </div>
          <div className={style.wrap_form__boxBtn}>
            <button className={style.wrap_form__boxBtn_btn} type="submit">
              Надіслати
            </button>
            <p className={style.wrap_form__box_txt}>
              {
                '*Натискаючи кнопку, ти дозволяєш обробку персональних даних та погоджуєшся з політикою конфіденційності'
              }
            </p>
          </div>
          <div className={style.mobTexts}>
            <p className={style.mobTexts_txt}>
              *Працюємо в будні дні з 10:00 до 18:00 год. <br />
              Заявки залишені на вихідних опрацьовуються в перший робочий день
            </p>
            <p className={style.mobTexts_txt}>
              <DotIcon fill="#FFAC1C" />{' '}
              {"*Форми з позначкою є обов'язковими для заповнення"}
            </p>
            <p className={style.mobTexts_txt}>
              {
                '*Натискаючи кнопку, ти дозволяєш обробку персональних даних та погоджуєшся з політикою конфіденційності'
              }
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export { FormSecond }
