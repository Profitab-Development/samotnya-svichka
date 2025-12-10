import React from 'react'
import { Header } from '../modules/header'
import { Footer } from '../modules/Footer/Footer'
import AboutIntro from './components/AboutIntro'
import AboutStory from './components/AboutStory'
import AboutCare from './components/AboutCare'
import AboutFounder from './components/AboutFounder'
import DevelopedBy from '../modules/Developedby/DevelopedBy'
import FullWidthVideoBlock from '@/app/about/components/FullWidthVideoBlock'

export function generateMetadata() {
  return {
    title: 'Про нас - Самотня Свічка',
    description:
      'Дізнайтеся більше про благодійний фонд «Самотня Свічка» - нашу місію, цінності, команду та історію допомоги людям похилого віку.',
  }
}

export default function AboutPage() {
  return (
    <div suppressHydrationWarning={true}>
      <Header />
      <main>
        <FullWidthVideoBlock />
        <AboutIntro />
        <AboutStory />
        <AboutCare />
        <AboutFounder />
      </main>
      <Footer />
      <DevelopedBy />
    </div>
  )
}
