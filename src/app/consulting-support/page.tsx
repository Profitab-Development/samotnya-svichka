import React from 'react'
import { Footer } from '@/app/modules/Footer/Footer'
import { Header } from '@/app/modules/header'
import { Prices } from '@/app/modules/PricesInstagram'
import { FormSecond } from '@/app/modules/FormSecond'
import { MainConsult } from '@/app/consulting-support/MainConsult'
import { ProcessConsult } from '@/app/consulting-support/ProcessConsult'
import ImportantConsult from '@/app/consulting-support/ImportantСonsult/ImportantConsult'
import { FaqConsult } from '@/app/consulting-support/FaqConsult'

export function generateMetadata() {
  return {
    title: 'Консультаційна підтримка – Асоціація власників інтернет-магазинів',
    description:
      'Безкоштовні експертні консультації щодо вибору платформи, налаштування реклами, інтеграцій та інших важливих аспектів ведення інтернет-магазину.',
  }
}
const Page = () => {
  return (
    <div>
      <Header />
      <MainConsult />
      <ProcessConsult />
      <ImportantConsult />
      <FaqConsult />
      <Prices />
      <FormSecond />
      <Footer />
    </div>
  )
}

export default Page
