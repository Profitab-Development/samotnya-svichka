import React from 'react'
import { Footer } from '@/app/modules/Footer/Footer'
import { Header } from '@/app/modules/header'
import { Prices } from '@/app/modules/PricesInstagram'
import { FormSecond } from '@/app/modules/FormSecond'
import { MainAbout } from '@/app/about/MainAbout'
import MissionAbout from '@/app/about/MissinAbout/MissionAbout'
import WhyAbout from '@/app/about/WhyAbout/WhyAbout'
export function generateMetadata() {
  return {
    title: 'Про нас – Асоціація власників інтернет-магазинів',
    description:
      'Дізнайтеся більше про Асоціацію власників інтернет-магазинів: наша місія, цілі, можливості для підприємців та переваги членства у спільноті e-commerce.',
  }
}
const Page = () => {
  return (
    <div>
      <Header />
      <MainAbout />
      <MissionAbout />
      <WhyAbout />
      <Prices />
      <FormSecond />
      <Footer />
    </div>
  )
}

export default Page
