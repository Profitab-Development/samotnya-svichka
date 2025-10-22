'use client'

import React from 'react'
import './post_card.css'
import Image, { StaticImageData } from 'next/image'
import { Authoricon, DateIcon, PostArrow } from '@/assets/Images/PostCard'
import Link from 'next/link'

type BlogCardProps = {
  image: StaticImageData
  // category: string
  title: string
  author: string
  date: string
  description: string
  link: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  // category,
  title,
  author,
  date,
  description,
  link,
}) => {
  return (
    <div className="post_card">
      <div className="post_card_img_block">
        <Image className="post_card_img" src={image} alt={title} />
        {/*<div className="post_card_category_block">*/}
        {/*  <p className="post_card_category_text">{category}</p>*/}
        {/*</div>*/}
      </div>
      <div className="post_card_info_block">
        <div>
          <p className="post_card_info_title">{title}</p>
        </div>
        <div className="post_card_date_info">
          <div className="post_card_info_author_block">
            <Image src={Authoricon} alt="Author icon" />
            <p className="post_card_date_info_text">{author}</p>
          </div>
          <div className="post_card_info_author_block">
            <Image src={DateIcon} alt="Date icon" />
            <p className="post_card_date_info_text">{date}</p>
          </div>
        </div>
        <div>
          <p className="post_card_info_text">{description}</p>
        </div>
        <div className="post_card_info_btn_block">
          <Link className="btn_link" href={link}>
            <button className="post_card_info_btn">
              Читати далі
              <Image src={PostArrow} alt="Arrow icon" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
