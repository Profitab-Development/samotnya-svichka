'use client'
import React from 'react'
import Image from 'next/image'
import style from './ProjectBlock1.module.css'

const ProjectBlock1 = () => {
  return (
    <section className={style.project}>
      <div className={`customContainer ${style.project_container}`}>
        <div className={style.project_content}>
          <div className={style.project_text}>
            <h2 className={style.project_title}>Даруючи красу — допомагаємо</h2>
            <p className={style.project_description}>
              Саме під таким гаслом на території Західної України проводиться унікальний благодійний проект – «Подаруй красу».
            </p>
          </div>
          <div className={style.project_image}>
            <Image
              src="/images/projects/beauty-project.jpg"
              alt="Проект 'Подаруй красу' - стрижка літніх людей"
              className={style.project_img}
              width={500}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectBlock1
