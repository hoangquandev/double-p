
import HomeBanner from './components/banner/HomeBanner'
import Double from './components/layout/Double'
import TextHome from './components/text/TextHome'

export default function Home() {

  return (
    <main className="font-primary text-xl font-extrabold">
      <HomeBanner />
      <Double />
      <TextHome />
    </main>
  )
}
