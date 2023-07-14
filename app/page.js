
import Work from '@/components/home/Work'
// import HomeBanner from '../components/home/HomeBanner'
import Service from '@/components/home/Service'
import FooterHome from '@/components/home/FooterHome'
import Container from '@/components/layout/Container'
import HeroSection from '@/components/home/HeroSection'

export default function Home() {

  return (
    <main className="font-primary text-xl font-extrabold">
      <Container>
        <HeroSection />
        {/* <Service /> */}
        <Work />


      </Container>
      <FooterHome />
    </main>
  )
}
