import { Header } from '@/app/modules/header'
import { MainBlock } from '@/app/modules/MainBlock'
// import About from '@/app/modules/About/About'
import Geography from '@/app/modules/Geography/Geography'
import Logo from '@/app/modules/Logo/Logo'
// import { Footer } from '@/app/modules/Footer/Footer'
// import DevelopedBy from '@/app/modules/Developedby/DevelopedBy'

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
      {/* <About /> */}
      <Geography />
      <Logo /> 
      {/* <Footer />
      <DevelopedBy /> */}
    </div>
  )
}
