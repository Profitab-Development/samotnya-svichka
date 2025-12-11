'use client'

import React from 'react'
import style from './VerifiedVolunteers.module.css'

const VerifiedVolunteers = () => {
  return (
    <section className={style.section}>
      <div className={`customContainer ${style.container}`}>
        <h2 className={style.title}>Verified Volunteers</h2>

        <div className={style.table_wrapper}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Volunteer – Elderly Support Program</th>
                <th>Certificate ID</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Yuliia Novosilska</td>
                <td>Volunteer – Elderly Support Program</td>
                <td>LC–2024–018</td>
                <td>Verified</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className={style.note}>
          Each volunteer listed above has completed documented service hours as
          part of the Lonely Candle Initiative. Certificates are issued and
          signed by the Foundation Director, Maria Lozynska.
        </p>
      </div>
    </section>
  )
}

export default VerifiedVolunteers
