// // import React from 'react'
// // import Image, { StaticImageData } from 'next/image'
// // import { useTranslations } from 'next-intl'
// // import './ServiceCard.scss'
// //
// // interface ServiceCardProps {
// //   info: {
// //     titleFirst: string
// //     titleSecond: string
// //     photo: StaticImageData
// //     text: string
// //     fn: (titleFirst: string, titleSecond: string) => void
// //   }
// // }
// //
// // const ServiceCard: React.FC<ServiceCardProps> = ({ info }) => {
// //   const t = useTranslations()
// //
// //   return (
// //     <div className="serviceCard">
// //       <div className="serviceCard__header">
// //         <Image
// //           src={info.photo}
// //           alt={info.titleFirst}
// //           width={300}
// //           height={200}
// //           className="serviceCard__img"
// //         />
// //       </div>
// //
// //       <div className="serviceCard__footer">
// //         <div>
// //           <div className="serviceCard__title">
// //             {' '}
// //             <p className="serviceCard__title">{info.titleFirst}</p>
// //             <p className="serviceCard__title">{info.titleSecond}</p>
// //           </div>
// //           <div className="serviceCard__description">{info.text}</div>
// //         </div>
// //
// //         <div className="serviceCard__btns">
// //           <button
// //             className="serviceCard__btn serviceCard__btn_details"
// //             onClick={() => info.fn(info.titleFirst, info.titleSecond)}
// //           >
// //             {t('ourServices.cardBtn')}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// //
// // export default ServiceCard
//
// 'use client'
//
// import React from 'react'
// import Image, { StaticImageData } from 'next/image'
// import { useTranslations } from 'next-intl'
// import { popUpStore } from '@/app/modules/MainPopUp/popUpStore'
// import './ServiceCard.scss'
//
// interface ServiceCardProps {
//   info: {
//     titleFirst: string
//     titleSecond: string
//     photo: StaticImageData
//     text: string
//   }
// }
//
// const ServiceCard: React.FC<ServiceCardProps> = ({ info }) => {
//   const t = useTranslations()
//   const handleShow = popUpStore((state) => state.handleShow)
//
//   return (
//     <div className="serviceCard">
//       <div className="serviceCard__header">
//         <Image
//           src={info.photo}
//           alt={info.titleFirst}
//           width={300}
//           height={200}
//           className="serviceCard__img"
//         />
//       </div>
//       <div className="serviceCard__footer">
//         <div>
//           <div className="serviceCard__title">
//             <p className="serviceCard__title">{info.titleFirst}</p>
//             <p className="serviceCard__title">{info.titleSecond}</p>
//           </div>
//           <div className="serviceCard__description">{info.text}</div>
//         </div>
//         <div className="serviceCard__btns">
//           <button
//             className="serviceCard__btn serviceCard__btn_details"
//             onClick={handleShow}
//           >
//             {t('ourServices.cardBtn')}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// export default ServiceCard

// import React from 'react'
// import Image, { StaticImageData } from 'next/image'
// import { useTranslations } from 'next-intl'
// import './ServiceCard.scss'
//
// interface ServiceCardProps {
//   info: {
//     titleFirst: string
//     titleSecond: string
//     photo: StaticImageData
//     text: string
//     fn: (titleFirst: string, titleSecond: string) => void
//   }
// }
//
// const ServiceCard: React.FC<ServiceCardProps> = ({ info }) => {
//   const t = useTranslations()
//
//   return (
//     <div className="serviceCard">
//       <div className="serviceCard__header">
//         <Image
//           src={info.photo}
//           alt={info.titleFirst}
//           width={300}
//           height={200}
//           className="serviceCard__img"
//         />
//       </div>
//
//       <div className="serviceCard__footer">
//         <div>
//           <div className="serviceCard__title">
//             {' '}
//             <p className="serviceCard__title">{info.titleFirst}</p>
//             <p className="serviceCard__title">{info.titleSecond}</p>
//           </div>
//           <div className="serviceCard__description">{info.text}</div>
//         </div>
//
//         <div className="serviceCard__btns">
//           <button
//             className="serviceCard__btn serviceCard__btn_details"
//             onClick={() => info.fn(info.titleFirst, info.titleSecond)}
//           >
//             {t('ourServices.cardBtn')}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// export default ServiceCard

'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { useTranslations } from 'next-intl'
import { popUpStore } from '@/app/modules/MainPopUp/popUpStore'
import './ServiceCard.scss'

interface ServiceCardProps {
  info: {
    titleFirst: string
    titleSecond: string
    photo: StaticImageData
    text: string
    fn?: () => void // <- додали опціональну функцію
  }
}

const ServiceCard: React.FC<ServiceCardProps> = ({ info }) => {
  const t = useTranslations()

  const handleClick = () => {
    if (info.fn) {
      info.fn()
    } else {
      const handleShow = popUpStore.getState().handleShow
      handleShow()
    }
  }

  return (
    <div className="serviceCard">
      <div className="serviceCard__header">
        <Image
          src={info.photo}
          alt={info.titleFirst}
          width={300}
          height={200}
          className="serviceCard__img"
        />
      </div>
      <div className="serviceCard__footer">
        <div>
          <div className="serviceCard__title">
            <p className="serviceCard__title">{info.titleFirst}</p>
            <p className="serviceCard__title">{info.titleSecond}</p>
          </div>
          <div className="serviceCard__description">{info.text}</div>
        </div>
        <div className="serviceCard__btns">
          <button
            className="serviceCard__btn serviceCard__btn_details"
            onClick={handleClick}
          >
            {t('ourServices.cardBtn')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
