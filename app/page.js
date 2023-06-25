
import CardHome from './components/card/CardHome'
import Double from './components/layout/Double'
import TextHome from './components/text/TextHome'

export default function Home() {
  const service = [
    {
      bgImage: "/home-design.png",
      text: "VISUAL YOUR MIND",
      width: "402",
      height: "365",
      right: "0",
      bottom: "0",
    },
    {
      bgImage: "/home-dev.png",
      text: "DEVELOPE YOUR SITE",
      width: "532",
      height: "414",
      right: "-28px",
      bottom: "-49px",
    },
  ]
  return (
    <main className="font-primary text-xl font-extrabold">

      <Double>
        {service.map((item, index) => {
          return (
            <CardHome key={index}
              bgImage={item.bgImage}
              text={item.text}
              width={item.width}
              height={item.height}
              right={item.right}
              bottom={item.bottom} />
          )
        })}
      </Double>
      <TextHome />
    </main>
  )
}
