import { StaticImageData } from 'next/image'

export interface Service {
  name: string
  logo: string | StaticImageData
}

export interface Content {
  subtitle?: string
  subtitleImage?: string
  title?: string
  description?: string
  benefits?: string[]
  servicesText?: string
  services?: Service[]
  buttonText?: string
  href?: string
}

export interface Review {
  image: string | StaticImageData
  name: string
  position: string
  stars: number
  text: string
}

export interface Review {
  image: string | StaticImageData
  name: string
  position: string
  stars: number
  text: string
}

export interface CustomClasses {
  subtitleContainer?: string
  subtitleImage?: string
  subtitle?: string
  title?: string
  description?: string
  benefitsList?: string
  benefitItem?: string
  servicesText?: string
  services?: string
  serviceItem?: string
  serviceImage?: string
  button?: string
  name?: string
  reviewCard?: string
  text?: string
  rating?: string
  top?: string
  bottom?: string
  header?: string
  image?: string
  info?: string
  position?: string
  star?: string
}

export interface UTMParams {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
}

export interface CrmMessage {
  lead_name: string
  lead_phone: string
  lead_email: string
  lead_source: string
  page_url: string
  page_path: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
}
