'use client'
import React from 'react'
import styles from './ContactsBlock.module.css'
import Image from 'next/image'
import '../../../assets/Images/ContactPage/index'
import { ContactArrow } from '@/assets/Images/ContactPage'

const ContactsBlock = () => {
  return (
    <div className={styles.wrapContainer}>
      <section className={styles.container}>
        <h1 className={styles.title}>
          НАШІ <span>КОНТАКТИ</span>
        </h1>
        <div className={styles.wrapper}>
          <div className={styles.wrap}>
            <p className={styles.subtitle}>Зв’яжіться з нами:</p>
            <div className={styles.wrap1}>
              <div className={styles.card}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <g clip-path="url(#clip0_418_2121)">
                    <path
                      d="M30 20.7685L21.2159 19.7517L17.0155 23.9521C12.2838 21.5456 8.43776 17.6996 6.03125 12.9678L10.2483 8.75076L9.23153 0H0.0474002C-0.91935 16.9681 13.0319 30.9193 30 29.9526V20.7685Z"
                      fill="#D92D20"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_418_2121">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <a href="tel:+380934407378" className={styles.info}>
                    +380934407378
                  </a>
                  <p className={styles.infoSmall}>Цілодобово</p>
                </div>
              </div>

              <div className={styles.card}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M29 8.96762V21.5769C29 22.75 28.5555 23.875 27.7644 24.7045C26.9732 25.534 25.9001 26 24.7812 26H6.21875C5.09987 26 4.02681 25.534 3.23564 24.7045C2.44447 23.875 2 22.75 2 21.5769V8.96762L15.0714 17.0318C15.2012 17.1121 15.3492 17.1544 15.5 17.1544C15.6508 17.1544 15.7988 17.1121 15.9286 17.0318L29 8.96762ZM24.7812 3C25.8193 2.99983 26.821 3.40092 27.5947 4.12654C28.3683 4.85216 28.8597 5.85137 28.9747 6.933L15.5 15.2431L2.02531 6.933C2.14033 5.85137 2.63167 4.85216 3.40534 4.12654C4.17901 3.40092 5.18069 2.99983 6.21875 3H24.7812Z"
                    fill="#D92D20"
                  />
                </svg>
                <div>
                  <p className={styles.info}>clients@aoso.org.ua</p>
                  <p className={styles.infoSmall}>Цілодобово</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.wrap} ${styles.wrap3}`}>
            <p className={`${styles.subtitle} ${styles.subtitle2}`}>
              Наш офіс за адресою:
            </p>
            <div className={`${styles.wrap1} ${styles.wrap2}`}>
              <div className={styles.card}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M15.0957 0C9.52002 0 5 4.52002 5 10.0957C5 12.5849 5.90497 14.8597 7.39842 16.62L15.0957 25.6852L22.7927 16.6197C24.2861 14.8597 25.1911 12.5846 25.1911 10.0954C25.1914 4.52002 20.6714 0 15.0957 0ZM15.0957 13.9C12.8026 13.9 10.9438 12.0412 10.9438 9.74809C10.9438 7.45497 12.8026 5.59622 15.0957 5.59622C17.3888 5.59622 19.2476 7.45497 19.2476 9.74809C19.2476 12.0412 17.3888 13.9 15.0957 13.9Z"
                    fill="#D92D20"
                  />
                </svg>
                <div>
                  <p className={styles.info}>м. Львів, вул. Героїв УПА, 73Ж</p>
                  <p className={styles.infoSmall}>
                    *Працюємо в будні дні, з 10:00 до 18:00 год.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Image
            className={styles.contact_arrow}
            src={ContactArrow}
            alt="ContactArrow"
          />
        </div>
      </section>
      <div className={styles.mapWrap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.7095215440727!2d23.994879299999997!3d49.8291245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae77e531728d9%3A0xb892e28cf1cf6db6!2z0LLRg9C70LjRhtGPINCT0LXRgNC-0ZfQsiDQo9Cf0JAsIDcz0LYsINCb0YzQstGW0LIsINCb0YzQstGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1suk!2sua!4v1741011363754!5m2!1suk!2sua"
          loading="lazy"
          className={styles.map}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default ContactsBlock
