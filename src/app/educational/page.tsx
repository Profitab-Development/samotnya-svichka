import React from 'react'
import { Footer } from '@/app/modules/Footer/Footer'
import { Header } from '@/app/modules/header'
import { Prices } from '@/app/modules/PricesInstagram'
import { FormSecond } from '@/app/modules/FormSecond'
import { MainEducation } from '@/app/educational/MainEducation'
import { ProcessEducation } from '@/app/educational/ProcessEducation'
import ImportantEducation from '@/app/educational/ImportantEducation/ImportantEducation'
import { FaqEducation } from '@/app/educational/FaqEducation'
import MaterialsEducation from '@/app/educational/MaterialsEducation/MaterialsEducation'
import ExperienceEducation from '@/app/educational/ExperienceEducation/ExperienceEducation'
import OfferEducation from '@/app/educational/OfferEducation/OfferEducation'

export function generateMetadata() {
  return {
    title: 'Освітні заходи – Асоціація власників інтернет-магазинів',
    description:
      'Безкоштовні вебінари, майстер-класи та бізнес-зустрічі, щоб отримати актуальні знання, покращити маркетинг, SEO та розвиток інтернет-магазину.',
  }
}
const Page = () => {
  return (
    <div>
      <Header />
      <MainEducation />
      <ProcessEducation />
      <MaterialsEducation />
      <ExperienceEducation />
      <OfferEducation />
      <ImportantEducation />
      <FaqEducation />
      <Prices />
      <FormSecond />
      <Footer />
    </div>
  )
}

export default Page
