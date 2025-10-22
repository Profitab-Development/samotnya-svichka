import { Header } from '@/app/modules/header'
import { MainBlock } from '@/app/modules/MainBlock'
import About from '@/app/modules/About/About'
import Geography from '@/app/modules/Geography/Geography'
import Logo from '@/app/modules/Logo/Logo'
import { Footer } from '@/app/modules/Footer/Footer'
import DevelopedBy from '@/app/modules/Developedby/DevelopedBy'

export function generateMetadata() {
  return {
    title:
      'Асоціація власників інтернет-магазинів – підтримка та розвиток e-commerce бізнесу',
    description:
      'Приєднуйтесь до спільноти власників інтернет-магазинів! Освітні заходи, консультації, партнерські програми та нетворкінг для розвитку вашого e-commerce бізнесу.',
  }
}

export default function Home() {
  return (
    <div suppressHydrationWarning={true}>
      <Header />
      <MainBlock />
      <About />
      <Geography />
      {/* <OurServices />
      <Blog />
      <Prices />
      <FormSecond /> */}
      <Logo /> 
      <Footer />
      <DevelopedBy />
    </div>
  )
}
