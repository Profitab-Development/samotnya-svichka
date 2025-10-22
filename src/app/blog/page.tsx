import React from 'react'
import { Prices } from '@/app/modules/PricesInstagram'
import { FormSecond } from '@/app/modules/FormSecond'
import { Footer } from '@/app/modules/Footer/Footer'
import DevelopedBy from '@/app/modules/Developedby/DevelopedBy'
import { Header } from '@/app/modules/header'
import BlogPage from '@/app/blog/Blog/BlogPage'
import { BlogMain } from '@/app/blog/BlogMain'

export function generateMetadata() {
  return {
    title: 'Блог Асоціації – корисні матеріали для e-commerce',
    description:
      'Актуальні статті, аналітика, маркетингові стратегії, технічні рішення та кейси успішних e-commerce бізнесів. Читайте блог Асоціації!',
  }
}

const Page = () => {
  return (
    <div>
      <Header />
      <BlogMain />
      <BlogPage />
      <Prices />
      <FormSecond />
      <Footer />
      <DevelopedBy />
    </div>
  )
}

export default Page
