import React from 'react'
import { Footer } from '@/app/modules/Footer/Footer'
import { Header } from '@/app/modules/header'
import { Prices } from '@/app/modules/PricesInstagram'
import { FormSecond } from '@/app/modules/FormSecond'
import { MainNetworking } from '@/app/networking/MainNetworking'
import OfferNetworking from '@/app/networking/OfferNetworking/OfferNetworking'
import { FaqNetworking } from '@/app/networking/FaqNetworking'
import ImportantNetworking from '@/app/networking/ImportantNetworking/ImportantNetworking'
import FormatsNetworking from '@/app/networking/formatsNetworking/FormatsNetworking'
import GetNetworking from '@/app/networking/GetNetworking/GetNetworking'

export function generateMetadata() {
  return {
    title: 'Нетворкінг та співпраця – Асоціація власників інтернет-магазинів',
    description:
      'Долучайтеся до спільноти підприємців, знаходьте партнерів, інвесторів і обмінюйтеся досвідом на заходах Асоціації.',
  }
}
const Page = () => {
  return (
    <div>
      <Header />
      <MainNetworking />
      <GetNetworking />
      <FormatsNetworking />
      <OfferNetworking />
      <ImportantNetworking />
      <FaqNetworking />
      <Prices />
      <FormSecond />
      <Footer />
    </div>
  )
}

export default Page
