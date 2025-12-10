import React from 'react'
import { Header } from '../modules/header'
import { Footer } from '../modules/Footer/Footer'
// import EventHero from './components/EventHero'
import EventStories from './components/EventStories'
// import EventDetails from './components/EventDetails'
import DevelopedBy from '../modules/Developedby/DevelopedBy'

export function generateMetadata() {
  return {
    title: 'Події - Самотня Свічка',
    description:
      "Дізнайтеся про благодійні події та заходи фонду «Самотня Свічка» - як ми об'єднуємо людей для допомоги літнім мешканцям геріатричних пансіонатів.",
  }
}

export default function EventsPage() {
  return (
    <div suppressHydrationWarning={true}>
      <Header />
      <main>
        {/*<EventHero />*/}

        {/*<EventDetails />*/}
        <EventStories />
      </main>
      <Footer />
      <DevelopedBy />
    </div>
  )
}
