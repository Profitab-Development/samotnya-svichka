'use client'
import React from 'react'
import Image from 'next/image'
import style from './ProjectsGrid.module.css'

const ProjectsGrid = () => {
  const projects = [
    {
      title: 'Даруючи красу — допомагаємо',
      description: 'Саме під таким гаслом на території Західної України проводиться унікальний благодійний проект – «Подаруй красу».',
      image: '/images/projects/DQ6B2022.jpg'
    },
    {
      title: 'Безперервна доброта',
      description: '— не просто слоган. Це наша філософія. Проєкт діє безперервно: щомісяця ми проводимо нові акції, залучаємо партнерів, створюємо можливості для тих, хто втратив надію.',
      image: '/images/projects/DQ6B2027.jpg'
    },
    {
      title: 'Коли турбота — це дія',
      description: 'Проєкт створено, щоб підтримати тих, хто найбільше цього потребує. Ми об\'єднуємо зусилля б\'юті-експертів, волонтерів і всіх небайдужих, щоб дарувати не лише зовнішню трансформацію, а й внутрішнє світло.',
      image: '/images/projects/DQ6B2238.jpg'
    },
    {
      title: 'Даруючи Доброту',
      description: '– Благодійний фонд "Самотня свічка" допомагає самотнім пенсіонерам відчути себе потрібними та захищеними. Ми забезпечуємо їх необхідними речами, організовуємо дозвілля та надаємо психологічну підтримку.',
      image: '/images/projects/DQ6B7369.jpg'
    }
  ]

  return (
    <section className={style.projects}>
      <div className={`customContainer ${style.projects_container}`}>
        <h1 className={style.projects_title}>Наші проекти</h1>
        <div className={style.projects_grid}>
          {projects.map((project, index) => (
            <div key={index} className={style.project_card}>
              <div className={style.project_image}>
                <Image
                  src={project.image}
                  alt={project.title}
                  className={style.project_img}
                  width={300}
                  height={200}
                  priority={index < 2}
                />
              </div>
              <div className={style.project_content}>
                <h3 className={style.project_title}>{project.title}</h3>
                <p className={style.project_description}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGrid
