'use client'

import React from 'react'
import { Header } from '@/app/modules/header'
import { Footer } from '@/app/modules/Footer/Footer'
import PrivacyPolicy from '@/app/privacy/Privacy/Privacy'
export default function Privacy() {
  return (
    <div>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  )
}
