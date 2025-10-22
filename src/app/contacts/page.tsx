import React from 'react'
import { Footer } from '@/app/modules/Footer/Footer'
import { Header } from '@/app/modules/header'
import ContactsBlock from '@/app/contacts/ContacsBlock/ContactsBlock'
import { Prices } from '@/app/modules/PricesInstagram'
import { FormSecond } from '@/app/modules/FormSecond'
export function generateMetadata() {
  return {
    title: 'Контакти – Асоціація власників інтернет-магазинів',
    description:
      'Контактна інформація Асоціації власників інтернет-магазинів: телефон, email, соціальні мережі.',
  }
}
const Page = () => {
  return (
    <div>
      <Header />
      <ContactsBlock />
      <Prices />
      <FormSecond />
      <Footer />
    </div>
  )
}

export default Page
