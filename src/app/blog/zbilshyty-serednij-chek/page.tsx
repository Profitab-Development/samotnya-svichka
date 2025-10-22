import React from 'react'
import { Header } from '@/app/modules/header'
import { Footer } from '@/app/modules/Footer/Footer'
import { Prices } from '@/app/modules/PricesInstagram'
import { FormSecond } from '@/app/modules/FormSecond'
import DevelopedBy from '@/app/modules/Developedby/DevelopedBy'
import { PostMain } from '@/app/blog/zbilshyty-serednij-chek/PostsMain'
import PostContent from '@/app/blog/zbilshyty-serednij-chek/PostContent/PostContent'

export function generateMetadata() {
  return {
    title:
      '5 способів збільшити середній чек покупця без додаткових витрат - Блог Асоціації',
    description:
      'Про те, як підвищити прибутковість інтернет-магазину без додаткових витрат. Огляд ефективних стратегій.',
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
