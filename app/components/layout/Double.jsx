'use client'
import { useEffect, useState } from "react"
import CardHome from "../card/CardHome"
import Image from "next/image"

const service = [
    {
        bgImage: "/home-design.gif",
        text: "VISUAL YOUR MIND",
        name: "CAO SON",
        desc: "Tốt nghiệp trường đại học Kiến trúc Thành Phố Hồ Chí Minh và hiện đang tìm kiếm sự phát triển trong lĩnh vực thiết kế.Với các kỹ năng dàn trải và linh hoạt trong từng trường hợp cụ thể. ",
        role: [
            "Design",
            "Art Direction",
            "Brand &",
            "Identity",
            "3D Product &",
            "Animation",
            "Web Design"
        ]
    },
    {
        bgImage: "/home-dev.gif",
        text: "DEVELOPE YOUR SITE",
        name: "CAO SON",
        desc: "Tốt nghiệp trường đại học Kiến trúc Thành Phố Hồ Chí Minh và hiện đang tìm kiếm sự phát triển trong lĩnh vực thiết kế.Với các kỹ năng dàn trải và linh hoạt trong từng trường hợp cụ thể. ",
        role: [
            "Design",
            "Art Direction",
            "Brand &",
            "Identity",
            "3D Product &",
            "Animation",
            "Web Design"
        ]
    },
]


const Double = () => {
    const [isHoverService, setHover] = useState(false)
    const [indexHover, setIndexHover] = useState(3)

    const mouseOverHandle = (e, index) => {

        setHover(true)
        setIndexHover(index)
    }
    const mouseOutHandle = (e) => {

        setHover(false)
        setIndexHover(3)
    }
    useEffect(() => {

    }, [indexHover])
    return (
        <section
            // onMouseOut={mouseOutHandle}
            className=" relative w-full xl:w-[1240px] flex-col lg:flex-row flex justify-between items-center gap-5 h-[400px]">
            {service.map((item, index) => {
                return (
                    <CardHome key={index}
                        index={index}
                        // service={service}
                        indexHover={indexHover}
                        bgImage={item.bgImage}
                        text={item.text}
                        width={item.width}
                        height={item.height}
                        right={item.right}
                        bottom={item.bottom}
                        mouseOverHandle={(e) => mouseOverHandle(e, index)}
                    // mouseOutHandle={mouseOutHandle}
                    />
                )
            })}
            <div onMouseOut={mouseOutHandle} style={isHoverService ? { opacity: 1, zIndex: 10 } : { opacity: 0, zIndex: -10 }} className="hidden bg-white dark:bg-black lg:block absolute top-0 left-0  h-[400px] lg:w-[1240px] ease-linear duration-1000 rounded-3xl">
                <div className="relative w-full xl:w-[1240px] flex-col lg:flex-row flex justify-between items-center gap-5 h-[400px]">
                    <div style={indexHover === 0 ? { flexGrow: 5 } : { flexGrow: 1 }} className="relative w-full lg:w-4/5 ease-linear duration-500 h-full bg-white dark:bg-black rounded-3xl  overflow-hidden ">
                        {indexHover === 0 ?
                            <div className=" flex gap-[20px] justify-between p-[30px]">
                                <div className="[&>*]:w-full w-2/3 ">
                                    <h2 className="text-xl font-bold">{service[indexHover]?.name}</h2>
                                    <p className="text-base font-light mt-[10px] font-third italic">{service[indexHover]?.desc}</p>
                                </div>
                                <div className="relative w-[400px] h-[400px]">
                                    {service[indexHover]?.bgImage && <Image
                                        src={service[indexHover]?.bgImage}
                                        alt='hehe'
                                        fill
                                    />}
                                </div>
                            </div>
                            : <div className="text-left font-bold text-base p-[30px]">
                                <ul>
                                    <li className="text-base font-light font-third italic">role</li>
                                    {service[indexHover]?.role.map((item, index) => {
                                        return (
                                            <li key={index}>{item}</li>
                                        )
                                    })}
                                </ul>
                            </div>}
                    </div>
                    <div style={indexHover === 1 ? { flexGrow: 5 } : { flexGrow: 1 }} className="relative lg:w-auto ease-linear duration-500 h-full bg-white dark:bg-black rounded-3xl  overflow-hidden w-1/5">
                        {indexHover === 0 ?
                            <div className="text-right font-bold text-base p-[30px]">
                                <ul>
                                    <li className="text-base font-light font-third italic">role</li>
                                    {service[indexHover]?.role.map((item, index) => {
                                        return (
                                            <li key={index}>{item}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            : <div className=" flex gap-[20px] justify-between p-[30px]">
                                <div className="[&>*]:w-full w-2/3 ">
                                    <h2 className="text-xl font-bold">{service[indexHover]?.name}</h2>
                                    <p className="text-base font-light mt-[10px] font-third italic">{service[indexHover]?.desc}</p>
                                </div>
                                <div className="relative w-[400px] h-[400px]">
                                    {service[indexHover]?.bgImage && <Image
                                        src={service[indexHover]?.bgImage}
                                        alt='hehe'
                                        fill
                                    />}
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Double