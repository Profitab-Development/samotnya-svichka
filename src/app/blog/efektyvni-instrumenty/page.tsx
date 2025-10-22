import React from 'react'
import { Header } from '@/app/modules/header'
import { Footer } from '@/app/modules/Footer/Footer'
import { Prices } from '@/app/modules/PricesInstagram'
import { FormSecond } from '@/app/modules/FormSecond'
import DevelopedBy from '@/app/modules/Developedby/DevelopedBy'
import { PostMain } from '@/app/blog/efektyvni-instrumenty/PostsMain'
import PostContent from '@/app/blog/efektyvni-instrumenty/PostContent/PostContent'

export function generateMetadata() {
  return {
    title:
      'Ефективні інструменти онлайн-маркетингу для зростання бізнесу - Блог Асоціації',
    description:
      'Дізнайтесь про використання інструментів інтернет-маркетингу для залучення нових клієнтів з допомогою стратегічних видів онлайн-реклами.',
  }
}
const Page = () => {
  return (
    <div>
      <Header />
      <PostMain />
      <PostContent />
      <Prices />
      <FormSecond />
      <Footer />
      <DevelopedBy />
    </div>
  )
}

export default Page
