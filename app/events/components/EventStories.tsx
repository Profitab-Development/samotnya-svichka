'use client'
import React from 'react'
import Image from 'next/image'
import style from './EventStories.module.css'

const EventStories = () => {
  return (
    <section className={style.stories}>
      <div className={`customContainer ${style.stories_container}`}>
        <div className={style.stories_content}>
          <div className={style.stories_text}>
            <h2 className={style.stories_title}>
              У Кожного своя історія і своя самотність
            </h2>
            
            <p className={style.stories_paragraph}>
              У Кожного нашого підопічного своя історія. Свій великий біль, який потребує турботи, уваги та Любові! Кожен з нас може подарувати їм тепло, любов або простягнути руку допомоги. Зараз у кожного з нас купа турбот і справ, але ми буває забуваємо про наших старих людей, яким життєво необхідна наша допомога, тож давайте не будемо забуватимемо про них...
            </p>
            
            <a 
              href="https://send.monobank.ua/jar/qbu3WGhLU"
              target="_blank"
              rel="noopener noreferrer"
              className={style.donate_button}
            >
              Донат
            </a>
          </div>
          
          <div className={style.stories_image}>
            <Image
              src="/images/event/DQ6B2233.jpg"
              alt="Історії наших підопічних"
              className={style.stories_img}
              width={500}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventStories
