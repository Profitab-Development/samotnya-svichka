'use client'

import React from 'react'
import style from './VerificationPortal.module.css'

const VerificationPortal = () => {
  return (
    <section className={style.section}>
      <div className="customContainer">
        <div className={style.columns}>
          <div className={style.left}>
            <h2 className={style.title}>Volunteer Verification Portal</h2>
            <p className={style.text}>
              This page is intended for universities, scholarship committees,
              and award organizations who wish to verify the volunteer service
              of individuals involved in the Lonely Candle Initiative.
            </p>
            <p className={style.text}>
              All information below is based on documented records maintained by
              the Foundation.
            </p>
          </div>

          <div className={style.right}>
            <h3 className={style.subtitle}>How to Verify a Volunteer</h3>
            <p className={style.text}>
              To verify the volunteer service of a specific person, you may:
            </p>
            <ol className={style.list}>
              <li>Check the list of confirmed volunteers below, or</li>
              <li>
                Contact our Foundation Director using the email provided in the
                “Contact” section.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VerificationPortal
