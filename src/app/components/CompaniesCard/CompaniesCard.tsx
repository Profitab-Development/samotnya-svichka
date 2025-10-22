'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './CompaniesCard.module.css'

interface CompaniesCardProps {
  companiesLogo: StaticImageData
  companiesTitle: string
  firstImg?: StaticImageData
  secondImg: StaticImageData
  companiesText: string
  companiesWrapItems: { text: string }[]
  cardColor: string
  companiesMark: React.ReactNode
  number: string
}

const CompaniesCard: React.FC<CompaniesCardProps> = ({
  companiesLogo,
  companiesTitle,
  firstImg,
  secondImg,
  companiesText,
  companiesWrapItems,
  cardColor,
  companiesMark,
  number,
}) => {
  return (
    <div className={`${styles.companies_card} ${cardColor}`}>
      <Image
        src={companiesLogo}
        alt="Company Logo"
        className={styles.companies_img}
        width={100}
        height={100}
      />
      <h2 className={styles.companies_title}>{companiesTitle}</h2>
      <p className={styles.companies_text}>{companiesText}</p>

      <div className={styles.companies_wrap}>
        {companiesWrapItems.map((item, index) => (
          <div key={index} className={styles.companies_wrap__item}>
            {companiesMark}
            <p className={styles.companies_wrap__text}>{item.text}</p>
          </div>
        ))}
      </div>

      {firstImg && (
        <Image
          src={firstImg}
          alt="Company Image 1"
          className={styles.companies_imageFirst}
          width={300}
          height={200}
        />
      )}

      <Image
        src={secondImg}
        alt="Company Image 2"
        className={`${styles.companies_imageSecond} ${
          number === 'second'
            ? styles.secondImageMob
            : number === 'third'
              ? styles.thirdImageMob
              : ''
        }`}
        width={300}
        height={200}
      />
    </div>
  )
}

export default CompaniesCard
