'use client'
import React from 'react'
import style from './DevelopedBy.module.css'
const DevelopedBy = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <span className={style.copyright}>Designed and Developed by</span>
        <div className={style.developer}>
          <a
            href="https://www.znaesh.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className={style.agencyLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M19.7088 6.10847C17.5594 1.02161 11.6935 -1.35803 6.6085 0.791253C1.52157 2.94062 -0.858066 8.80639 1.2913 13.8915C3.44067 18.9784 9.30643 21.358 14.3915 19.2087C19.4784 17.0594 21.858 11.1954 19.7088 6.10847ZM6.31463 4.1445L14.3878 3.65396L15.352 4.85035L9.2821 9.80433L9.13417 7.3554L10.9671 5.79018L6.43067 6.0654L6.31463 4.1445ZM10.7219 16.8515C7.04481 17.0743 5.13508 14.2828 4.59769 13.7268L6.36517 12.4442C6.90246 12.9984 7.99778 14.9324 10.6002 14.8445C12.9443 14.7659 13.9497 12.9909 13.8729 11.7365C13.8392 11.1711 13.4984 10.293 12.2665 9.95604L13.9122 8.60982C15.5654 9.34 15.9998 10.8566 16.0503 11.6878C16.172 13.6968 14.8165 16.6025 10.7219 16.8515Z"
                fill="black"
              />
            </svg>
            Знаєш Agency
          </a>
          <span> in Ukraine</span>
        </div>
      </div>
    </footer>
  )
}

export default DevelopedBy
