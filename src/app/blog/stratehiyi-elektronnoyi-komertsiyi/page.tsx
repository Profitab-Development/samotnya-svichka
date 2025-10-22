import React from 'react'
import { Header } from '@/app/modules/header'
import { Footer } from '@/app/modules/Footer/Footer'
import { Prices } from '@/app/modules/PricesInstagram'
import { FormSecond } from '@/app/modules/FormSecond'
import DevelopedBy from '@/app/modules/Developedby/DevelopedBy'
import { PostMain } from '@/app/blog/stratehiyi-elektronnoyi-komertsiyi/PostsMain'
import PostContent from '@/app/blog/stratehiyi-elektronnoyi-komertsiyi/PostContent/PostContent'

export function generateMetadata() {
  return {
    title:
      'Стратегії електронної комерції: як побудувати успішний інтернет-магазин - Блог Асоціації',
    description:
      'Дізнайтеся, як вибрати нішу, налаштувати платформу, автоматизувати процеси та масштабувати інтернет-магазин. Практичні поради для розвитку e-commerce бізнесу. ',
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
