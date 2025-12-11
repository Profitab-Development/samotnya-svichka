// app/volunteer-verification/page.tsx
import React from 'react'
import { Header } from '@/app/modules/header'
// import { Footer } from '@/app/modules/Footer/Footer'
import DevelopedBy from '@/app/modules/Developedby/DevelopedBy'

import VolunteerHero from './components/VolunteerHero'
import AboutInitiative from './components/AboutInitiative'
import VerificationPortal from './components/VerificationPortal'
import VerifiedVolunteers from './components/VerifiedVolunteers'
import VolunteerProfile from './components/VolunteerProfile'
import ContactVerification from './components/ContactVerification'

export function generateMetadata() {
  return {
    title: 'Volunteer Verification - Lonely Candle Initiative',
    description:
      'Official verification page for volunteer service with the Lonely Candle Initiative. Information for universities, scholarship committees, and award organizations.',
  }
}

export default function VolunteerVerificationPage() {
  return (
    <div suppressHydrationWarning={true}>
      <Header />
      <main>
        <VolunteerHero />
        <AboutInitiative />
        <VerificationPortal />
        <VerifiedVolunteers />
        <VolunteerProfile />
        <ContactVerification />
      </main>
      {/*<Footer />*/}
      <DevelopedBy />
    </div>
  )
}
