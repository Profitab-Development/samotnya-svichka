'use client'

import React from 'react'
import Image from 'next/image'
import styles from './OurProductItem.module.css'

interface ProductData {
  logo: string
  title: string
  description: string
}

interface ProductItemProps {
  product: ProductData
  btnAction: () => void
}

const OurProductItem: React.FC<ProductItemProps> = ({ product, btnAction }) => {
  return (
    <div className={styles.productItem}>
      <Image
        src={product.logo || '/placeholder.svg'}
        alt="Company Logo"
        className={styles.logo}
        width={100} // заміни на актуальні розміри
        height={100} // заміни на актуальні розміри
      />
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.description}>{product.description}</p>
      <div onClick={btnAction} className={styles.detailsLink}>
        Детальніше
      </div>
    </div>
  )
}

export default OurProductItem
