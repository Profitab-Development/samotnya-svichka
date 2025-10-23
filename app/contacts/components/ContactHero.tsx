'use client'
import React from 'react'
import style from './ContactHero.module.css'

const ContactHero = () => {
  return (
    <section className={style.hero}>
      <div className={`customContainer ${style.hero_container}`}>
        <div className={style.hero_content}>
          <div className={style.hero_left}>
            <h1 className={style.hero_title}>Наші контакти</h1>
            
            <div className={style.contact_info}>
              <div className={style.contact_row}>
                <div className={style.contact_item}>
                  <div className={style.contact_icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9844 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.271 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06679 2.16708 8.43376 2.48353C8.80073 2.79999 9.03997 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9596 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={style.contact_content}>
                    <h3 className={style.contact_label}>Телефон</h3>
                    <a href="tel:+380956989072" className={style.contact_value}>
                      +380 95 698 90 72
                    </a>
                    <p className={style.contact_note}>Цілодобово</p>
                  </div>
                </div>

                <div className={style.contact_item}>
                  <div className={style.contact_icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={style.contact_content}>
                    <h3 className={style.contact_label}>Email</h3>
                    <a href="mailto:lonely-candle@online.ua" className={style.contact_value}>
                      lonely-candle@online.ua
                    </a>
                    <p className={style.contact_note}>Цілодобово</p>
                  </div>
                </div>
              </div>

              <div className={style.contact_item}>
                <div className={style.contact_icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={style.contact_content}>
                  <h3 className={style.contact_label}>Адреса</h3>
                  <a 
                    href="https://maps.app.goo.gl/YxhJSqM9ddj3xkjs6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.contact_value}
                  >
                    Україна, 79019, Львівська обл., місто Львів, вул. Хмельницького Б., будинок 33, квартира 11
                  </a>
                  <p className={style.contact_note}>*Працюємо в будні дні, з 10:00 до 18:00 год.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={style.hero_right}>
            <div className={style.map_container}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.740087463365!2d24.02552717688996!3d49.84734103060487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add0ce72ecad5%3A0xf8d2447e2eb8bf00!2z0LLRg9C70LjRhtGPINCR0L7Qs9C00LDQvdCwINCl0LzQtdC70YzQvdC40YbRjNC60L7Qs9C-LCAzMywg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1761243712040!5m2!1suk!2sua"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Локація фонду Самотня Свічка"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
