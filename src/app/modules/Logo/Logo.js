'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { Logo1, Logo2 } from '@/assets/Images/Logos/Index'
import Image from 'next/image'
import { popUpStore } from '@/app/modules/MainPopUp/popUpStore'
import styles from './Logo.module.css'

const Logo = () => {
  const handleShow = popUpStore((state) => state.handleShow)
  const customCreatives = [Logo1, Logo2, Logo1, Logo2]

  return (
    <div className={styles.logos}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>
          Наші <span className={styles.titleSpan}>ПАРТНЕРИ</span>
        </p>
      </div>
      <div className="customContainer">
        <div className={styles.content}>
          <div className={styles.buttonContainer}>
            <button className={styles.partnerButton} onClick={handleShow}>
              Стати партнером
            </button>
          </div>
          <div className={styles.logosContainer}>
            {/* <Marquee
              speed={20}
              direction="left"
              pauseOnHover={true}
              gradient={false}
            >
              {customCreatives.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className={styles.img}
                />
              ))}
            </Marquee> */}
            <div className={styles.logosStatic}>
              <Image
                src={Logo1}
                alt="Logo 1"
                className={styles.img}
              />
              <Image
                src={Logo2}
                alt="Logo 2"
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logo
