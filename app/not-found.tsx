import React from 'react'
import Link from 'next/link'
import { Header } from './modules/header'
import { Footer } from './modules/Footer/Footer'
import DevelopedBy from './modules/Developedby/DevelopedBy'
import styles from './not-found.module.css'

export function generateMetadata() {
  return {
    title: '404 - Сторінку не знайдено | Самотня Свічка',
    description: 'Сторінку, яку ви шукаєте, не знайдено. Поверніться на головну сторінку благодійного фонду «Самотня Свічка».',
  }
}

export default function NotFound() {
  return (
    <div suppressHydrationWarning={true}>
      <Header />
      <main className={styles.notFoundMain}>
        <div className={`customContainer ${styles.notFoundContainer}`}>
          <div className={styles.notFoundContent}>
            <div className={styles.notFoundText}>
              <h1 className={styles.notFoundTitle}>404</h1>
              <h2 className={styles.notFoundSubtitle}>Сторінку не знайдено</h2>
              <p className={styles.notFoundDescription}>
                Вибачте, але сторінку, яку ви шукаєте, не існує або була переміщена.
              </p>
              <div className={styles.notFoundActions}>
                <Link href="/" className={`${styles.notFoundButton} ${styles.notFoundButtonPrimary}`}>
                  На головну
                </Link>
                <Link href="/about" className={`${styles.notFoundButton} ${styles.notFoundButtonSecondary}`}>
                  Про нас
                </Link>
              </div>
            </div>
            <div className={styles.notFoundImage}>
              <div className={styles.notFoundIcon}>🕯️</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <DevelopedBy />
    </div>
  )
}
