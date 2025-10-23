import React from 'react'
import { Header } from '../modules/header'
import { Footer } from '../modules/Footer/Footer'
import ContactHero from './components/ContactHero'
import ProjectBlock2 from '../projects/components/ProjectBlock2'
import DevelopedBy from '../modules/Developedby/DevelopedBy'

export function generateMetadata() {
  return {
    title: 'Контакти - Самотня Свічка',
    description: 'Зв\'яжіться з благодійним фондом «Самотня Свічка» - наші контакти, адреса та реквізити для підтримки літніх людей.',
  }
}

export default function ContactsPage() {
  return (
    <div suppressHydrationWarning={true}>
      <Header />
      <main>
        <ContactHero />
        <ProjectBlock2 />
      </main>
      <Footer />
      <DevelopedBy />
    </div>
  )
}
