'use client'
import type React from 'react'
import { useState } from 'react'
import styles from './Accordion.module.css'

interface AccordionProps {
  title: string
  content: string
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.accordion} onClick={toggleAccordion}>
      <div className={styles.header}>
        <h3 className={styles.header_title}>{title}</h3>
        <div
          className={`${styles.header_icon} ${isOpen ? styles.openIcon : styles.closedIcon}`}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="4"
              viewBox="0 0 22 4"
              fill="none"
            >
              <path
                d="M13.8947 0.262695H20.2632C21.2224 0.262695 22 1.04031 22 1.99954C22 2.95877 21.2224 3.73638 20.2632 3.73638H13.8947H8.10526H1.73684C0.777611 3.73638 0 2.95877 0 1.99954C0 1.04031 0.777611 0.262695 1.73684 0.262695H8.10526H13.8947Z"
                fill="#D92D20"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M20.2632 9.26316H13.8947C13.2552 9.26316 12.7368 8.74475 12.7368 8.10526V1.73684C12.7368 0.777611 11.9592 0 11 0C10.0408 0 9.26316 0.777611 9.26316 1.73684V8.10526C9.26316 8.74475 8.74475 9.26316 8.10526 9.26316H1.73684C0.777611 9.26316 0 10.0408 0 11C0 11.9592 0.777611 12.7368 1.73684 12.7368H8.10526C8.74475 12.7368 9.26316 13.2552 9.26316 13.8947V20.2632C9.26316 21.2224 10.0408 22 11 22C11.9592 22 12.7368 21.2224 12.7368 20.2632V13.8947C12.7368 13.2552 13.2552 12.7368 13.8947 12.7368H20.2632C21.2224 12.7368 22 11.9592 22 11C22 10.0408 21.2224 9.26316 20.2632 9.26316Z"
                fill="#D92D20"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={`${styles.content} ${isOpen ? styles.open : styles.closed}`}
      >
        <p className={styles.content_txt}> {content}</p>
      </div>
    </div>
  )
}

export { Accordion }
