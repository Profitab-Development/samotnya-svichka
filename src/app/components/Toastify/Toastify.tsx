import React from 'react'
import styles from './Toastify.module.css'

interface ToastifyProps {
  type: 'pending' | 'success'
}

const Toastify: React.FC<ToastifyProps> = ({ type }) => {
  if (type === 'pending') {
    return (
      <div className={styles.wrap}>
        <div className={styles.spinner}></div>
        <div className={styles.wrap_text}>
          <h3 className={styles.wrap_text__title}>Надсилаємо заявку</h3>
          <p className={styles.wrap_text__subTitle}>
            Триває процес надсилання заявки...
          </p>
        </div>
      </div>
    )
  }
  if (type === 'success') {
    return (
      <div className={styles.wrap}>
        <div className={styles.wrap_text}>
          <h3 className={styles.wrap_text__title}>Заявку надіслано!</h3>
          <p className={styles.wrap_text__subTitle}>
            Ваша заявка була успішно надіслана, наш менеджер зв&apos;яжеться з
            вами найближчим часом
          </p>
        </div>
      </div>
    )
  }

  return null
}

export { Toastify }
