
import HomeBanner from './components/banner/HomeBanner'
import Poster from './components/banner/Poster'
import Double from './components/layout/Double'
import TabHome from './components/navbar/TabHome'
import TextHome from './components/text/TextHome'

export default function Home() {

  return (
    <main className="font-primary text-xl font-extrabold">
      <HomeBanner />
      <Double />
      <TextHome />
      <TabHome />
      <Poster
        w={"1240px"}
        h={"h-[400px] lg:h-[695px]"}
        title={"Yen Thien Viet iTVC"}
        desc={"is a creative studio specializing in custom animation, branded content, motion design, and short films. It was founded by Qieer Wang, a multimedia artist,"}
      />
      <Poster
        w={"1240px"}
        h={"h-[300px] lg:h-[400px]"}
        title={"Music Video Visualization"}
        desc={"is a creative studio specializing in custom animation, branded content, motion design, and short films. It was founded by Qieer Wang, a multimedia artist"}
      />
      <Poster
        w={"1240px"}
        h={"h-[300px] lg:h-[400px]"}
        title={"Gen Nest iTVC"}
        desc={"is a creative studio specializing in custom animation, branded content, motion design, and short films. It was founded by Qieer Wang, a multimedia artist"}
      />
      <Poster
        w={"1240px"}
        h={"h-[300px] lg:h-[400px]"}
        title={"The Modern Light Product"}
        desc={"is a creative studio specializing in custom animation, branded content, motion design, and short films. It was founded by Qieer Wang, a multimedia artist"}
      />
    </main>
  )
}
