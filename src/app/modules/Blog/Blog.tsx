'use client'

import React from 'react'
import style from './blog.module.css'
import BlogCard from '@/app/components/BlogCard/BlogCard'
import { Post1_1 } from '@/assets/Images/Posts/Post1'
import { Post2_1 } from '@/assets/Images/Posts/Post2'
import { Post3_1 } from '@/assets/Images/Posts/Post3'
import { Post4_1 } from '@/assets/Images/Posts/Post4'

const Blog = () => {
  const blogPosts = [
    {
      image: Post1_1,
      category: 'Маркетинг',
      title:
        'Стратегії електронної комерції: як побудувати успішний інтернет-магазин',
      author: 'Анатолій Маліновський',
      date: '9.03.2025',
      description:
        'Електронна комерція стрімко розвивається, а конкуренція на ринку стає дедалі жорсткішою. Створення інтернет-магазину – це лише перший крок, але для стабільного зростання та прибутковості потрібна чітка стратегія.',
      link: 'blog/stratehiyi-elektronnoyi-komertsiyi',
    },
    {
      image: Post2_1,
      category: 'Загальне',
      title: 'Ефективні інструменти онлайн-маркетингу для зростання бізнесу',
      author: 'Анатолій Маліновський',
      date: '12.03.2025',
      description:
        'Інтернет-маркетинг - це ключовий аспект успішного бізнесу у сучасному цифровому світі. Інтернет надає безмежні можливості для досягнення нових клієнтів та розширення аудиторії.',
      link: 'blog/efektyvni-instrumenty',
    },
    {
      image: Post3_1,
      category: 'Загальне',
      title:
        'Як збільшити трафік на сайт інтернет-магазину без додаткових витрат?',
      author: 'Анатолій Маліновський',
      date: '15.03.2025',
      description:
        'Збільшення трафіку на сайт інтернет-магазину – одна з ключових задач для кожного підприємця. Однак не завжди є можливість витрачати великі бюджети на рекламу.',
      link: 'blog/zbilshyty-trafik-bez-vytrat',
    },
    {
      image: Post4_1,
      category: 'Загальне',
      title: '5 способів збільшити середній чек покупця без додаткових витрат',
      author: 'Анатолій Маліновський',
      date: '25.04.2025',
      description:
        'Збільшення середнього чека – один із найефективніших способів підвищити прибутковість інтернет-магазину без залучення додаткового трафіку.',
      link: 'blog/zbilshyty-serednij-chek',
    },
  ]

  return (
    <div className={style.blog_block}>
      <div className="customContainer">
        <div className={style.wrap_top}>
          <h2 className={style.wrap_top__title}>
            Останні
            <span>
              {' '}новини{' '}
            </span>
            та<span>{' '}корисні матеріали</span>
          </h2>

          <div className={style.wrap_top__back}>новини</div>
          <p className={style.mission_subtile}>
            Ми допомагаємо малому бізнесу з ключовими аспектами роботи
            інтернет-магазину: від вибору платформи до інтернет-маркетингу. Усі
            наші послуги надаються безкоштовно, адже наша мета – розвиток
            онлайн-торгівлі навіть у найскладніші часи.
          </p>
        </div>

        <div className={style.card_blocks}>
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
