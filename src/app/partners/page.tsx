import React from 'react'
import { Footer } from '@/app/modules/Footer/Footer'
import { Header } from '@/app/modules/header'
import { Prices } from '@/app/modules/PricesInstagram'
import { FormSecond } from '@/app/modules/FormSecond'
import { MainPartners } from '@/app/partners/MainPartners'
import ImportantPartners from '@/app/partners/ImportantPartners/ImportantPartners'
import { FaqPartners } from '@/app/partners/FaqPartners'
import OfferPartners from '@/app/partners/OfferPartners/OfferPartners'
import GetPartners from '@/app/partners/GetPartners/GetPartners'
import { OurCompanies } from '@/app/partners/OurCompanies/OurCompanies'

export function generateMetadata() {
  return {
    title: 'Партнерські програми – Асоціація власників інтернет-магазинів',
    description:
      'Отримуйте знижки та спеціальні умови від наших партнерів: маркетингових агентств, CRM-сервісів та інших e-commerce рішень.',
  }
}
const Page = () => {
  return (
    <div>
      <Header />
      <MainPartners />
      <GetPartners />
      <OurCompanies />
      <OfferPartners />
      <ImportantPartners />
      <FaqPartners />
      <Prices />
      <FormSecond />
      <Footer />
    </div>
  )
}

export default Page
