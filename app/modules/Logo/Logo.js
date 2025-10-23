'use client'
import React from 'react'
import { Logo1, Logo2, Logo3, Logo4, Logo5, Logo6 } from '@/assets/Images/Logos/Index'
import Image from 'next/image'
import styles from './Logo.module.css'

const Logo = () => {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6]

  return (
    <div className={styles.logos} suppressHydrationWarning>
      <div className={styles.titleContainer} suppressHydrationWarning>
        <p className={styles.title}>
          Наші <span className={styles.titleSpan}>ПАРТНЕРИ</span>
        </p>
      </div>
      <div className="customContainer" suppressHydrationWarning>
        <div className={styles.content} suppressHydrationWarning>
          <div className={styles.logosContainer} suppressHydrationWarning>
            <div className={styles.logosStatic} suppressHydrationWarning>
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className={styles.img}
                />
              ))}
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfScWHcnDDobtWhdhFYUVJ6Yw0OpxUvoB6mf0z16wpginkR3w/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.partnerButton}
            >
              Стати партнером
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logo