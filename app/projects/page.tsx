import React from 'react'
import { Header } from '../modules/header'
import { Footer } from '../modules/Footer/Footer'
import ProjectBlock1 from './components/ProjectBlock1'
import ProjectBlock2 from './components/ProjectBlock2'
import DevelopedBy from '../modules/Developedby/DevelopedBy'

export function generateMetadata() {
  return {
    title: 'Проекти - Самотня Свічка',
    description: 'Дізнайтеся про наші благодійні проекти та ініціативи фонду «Самотня Свічка» - як ми допомагаємо людям похилого віку.',
  }
}

export default function ProjectsPage() {
  return (
    <div suppressHydrationWarning={true}>
      <Header />
      <main>
        <ProjectBlock1 />
        <ProjectBlock2 />
      </main>
      <Footer />
      <DevelopedBy />
    </div>
  )
}
