import React from 'react'
import { Header } from '@/app/modules/header'
import { Footer } from '@/app/modules/Footer/Footer'
import { Prices } from '@/app/modules/PricesInstagram'
import { FormSecond } from '@/app/modules/FormSecond'
import DevelopedBy from '@/app/modules/Developedby/DevelopedBy'
import { PostMain } from '@/app/blog/zbilshyty-trafik-bez-vytrat/PostsMain'
import PostContent from '@/app/blog/zbilshyty-trafik-bez-vytrat/PostContent/PostContent'

export function generateMetadata() {
  return {
    title:
      'Як збільшити трафік на сайт інтернет-магазину без додаткових витрат? - Блог Асоціації',
    description:
      'У статті розказуємо про ефективні способи залучення відвідувачів без вкладень: SEO, контент-маркетинг, соцмережі, партнерства та інші безкоштовні методи.',
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
