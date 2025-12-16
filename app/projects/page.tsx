import React from 'react'
import { Header } from '../modules/header'
import { Footer } from '../modules/Footer/Footer'
import ProjectsGrid from './components/ProjectsGrid'
import ProjectBlock2 from './components/ProjectBlock2'
import DevelopedBy from '../modules/Developedby/DevelopedBy'

export function generateMetadata() {
  return {
    title: 'Проєкти - Самотня Свічка',
    description:
      'Дізнайтеся про наші благодійні проєкти та ініціативи фонду «Самотня Свічка» - як ми допомагаємо людям похилого віку.',
  }
}

export default function ProjectsPage() {
  return (
    <div suppressHydrationWarning={true}>
      <Header />
      <main>
        <ProjectsGrid />
        <ProjectBlock2 />
      </main>
      <Footer />
      <DevelopedBy />
    </div>
  )
}
