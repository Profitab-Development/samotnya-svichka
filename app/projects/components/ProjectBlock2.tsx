'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import style from './ProjectBlock2.module.css'

const ProjectBlock2 = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(fieldName)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const donationDetails = [
    {
      label: 'Одержувач:',
      value: 'Благодійний фонд «Самотня Свічка»',
      fieldName: 'recipient'
    },
    {
      label: 'ЄДРПОУ:',
      value: '45494028',
      fieldName: 'edrpou'
    },
    {
      label: 'IBAN:',
      value: 'UA073052990000026005041047398',
      fieldName: 'iban'
    },
    {
      label: 'Банк:',
      value: 'АТ КБ «ПРИВАТБАНК»',
      fieldName: 'bank'
    }
  ]

  return (
    <section className={style.project}>
      <div className={`customContainer ${style.project_container}`}>
        <div className={style.project_content}>
          <div className={style.project_text}>
            <h2 className={style.project_title}>Ваша підтримка — їхня надія</h2>
            <div className={style.donation_info}>
              <h3 className={style.donation_title}>
                Реквізити БФ «Самотня Свічка»:
              </h3>
              <div className={style.donation_details}>
                {donationDetails.map((detail, index) => (
                  <p 
                    key={index}
                    className={style.copyable_field}
                    onClick={() => copyToClipboard(detail.value, detail.fieldName)}
                    title="Натисніть, щоб скопіювати"
                  >
                    <strong>{detail.label}</strong> {detail.value}
                    {copiedField === detail.fieldName && (
                      <span className={style.copied_indicator}> ✓ Скопійовано!</span>
                    )}
                  </p>
                ))}
              </div>
              <a 
                href="https://send.monobank.ua/jar/qbu3WGhLU"
                target="_blank"
                rel="noopener noreferrer"
                className={style.donate_button}
              >
                Донат
              </a>
             
            </div>
          </div>
          <div className={style.project_image}>
            <Image
              src="/images/projects/DQ6B8008.jpg"
              alt="Підтримка літніх людей - тепла зустріч"
              className={style.project_img}
              width={500}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectBlock2
