// 'use client'
//
// import React from 'react'
// import style from './FullWidthVideoBlock.module.css'
//
// const FullWidthVideoBlock = () => {
//   return (
//     <section className={style.wrap}>
//       <div className={`customContainer ${style.video_container}`}>
//         <div className={style.video_wrapper}>
//           <iframe
//             className={style.video_iframe}
//             src="https://drive.google.com/file/d/1bPcuSH5IuHY4hDaJCnX8BsZ4FCbUK9jj/preview"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   )
// }
//
// export default FullWidthVideoBlock

'use client'

import React from 'react'
import style from './FullWidthVideoBlock.module.css'

const VideoFullWidthBlock = () => {
  return (
    <section className={style.videoSection}>
      <div className={style.video_wrapper}>
        <iframe
          className={style.video_iframe}
          src="https://drive.google.com/file/d/1bPcuSH5IuHY4hDaJCnX8BsZ4FCbUK9jj/preview"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

export default VideoFullWidthBlock
