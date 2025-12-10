import { Header } from './modules/header'
import { MainBlock } from './modules/MainBlock'
// import { EventBlock } from './modules/EventBlock/EventBlock'
import { AboutBlock } from './modules/AboutBlock/AboutBlock'
import { AboutUsBlock } from './modules/AboutUsBlock/AboutUsBlock'
// import About from './modules/About/About'
import Geography from './modules/Geography/Geography'
import Logo from './modules/Logo/Logo'
import { Footer } from './modules/Footer/Footer'
import DevelopedBy from './modules/Developedby/DevelopedBy'
import { CandleVideoBlock } from '@/app/modules/CandleVideoBlock/CandleVideoBlock'

export function generateMetadata() {
  return {
    title: 'Світло, яке не згасає',
    description:
      'Фонд, який щодня дарує тепло і турботу людям похилого віку в геріатричних центрах України.',
  }
}

export default function Home() {
  return (
    <div suppressHydrationWarning={true}>
      <Header />
      <MainBlock />
      <CandleVideoBlock />
      {/*<EventBlock />*/}
      <AboutBlock />

      <Geography />
      <Logo />
      <AboutUsBlock />

      <Footer />
      <DevelopedBy />
    </div>
  )
}
