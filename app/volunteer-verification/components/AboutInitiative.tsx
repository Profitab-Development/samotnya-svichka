'use client'

import React from 'react'
import style from './AboutInitiative.module.css'

const AboutInitiative = () => {
  return (
    <section className={style.section}>
      <div className={`customContainer ${style.container}`}>
        <h2 className={style.title}>About the Lonely Candle Initiative</h2>
        <p className={style.paragraph}>
          Lonely Candle Initiative is a humanitarian program founded by Dr.
          Myroslava Novosilska. Our mission is to support elderly individuals
          living alone in Ukraine by providing them with emotional support,
          essential supplies, and regular care.
        </p>
        <p className={style.paragraph}>
          The initiative operates under the coordination of Foundation Director
          Maria Lozynska and a network of volunteers who help prepare and
          deliver aid packages, organize outreach missions, and raise awareness
          about the needs of vulnerable seniors.
        </p>
      </div>
    </section>
  )
}

export default AboutInitiative
