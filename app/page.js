
import Work from '@/components/home/Work'
import HomeBanner from '../components/home/HomeBanner'
import Service from '@/components/home/Service'

export default function Home() {

  return (
    <main className="font-primary text-xl font-extrabold">
      <HomeBanner />
      <Service />
      <Work />

      {/* <TabHome />
      <Poster
        slug={"he-lo"}
        w={"1240px"}
        h={"h-[400px] lg:h-[695px]"}
        title={"Yen Thien Viet iTVC"}
        desc={"is a creative studio specializing in custom animation, branded content, motion design, and short films. It was founded by Qieer Wang, a multimedia artist,"}
      />
      <Poster
        slug={"he-lo"}
        w={"1240px"}
        h={"h-[300px] lg:h-[400px]"}
        title={"Music Video Visualization"}
        desc={"is a creative studio specializing in custom animation, branded content, motion design, and short films. It was founded by Qieer Wang, a multimedia artist"}
      />
      <Poster
        slug={"he-lo"}
        w={"1240px"}
        h={"h-[300px] lg:h-[400px]"}
        title={"Gen Nest iTVC"}
        desc={"is a creative studio specializing in custom animation, branded content, motion design, and short films. It was founded by Qieer Wang, a multimedia artist"}
      />
      <Poster
        path={"he-lo"}
        w={"1240px"}
        h={"h-[300px] lg:h-[400px]"}
        title={"The Modern Light Product"}
        desc={"is a creative studio specializing in custom animation, branded content, motion design, and short films. It was founded by Qieer Wang, a multimedia artist"}
      /> */}
    </main>
  )
}
