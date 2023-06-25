'use client'
import { useEffect, useState } from "react"
import CardHome from "../card/CardHome"

const service = [
    {
        bgImage: "/home-design.png",
        text: "VISUAL YOUR MIND",
        width: "402",
        height: "365",
        right: "0",
        bottom: "0",
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
        bgImage: "/home-dev.png",
        text: "DEVELOPE YOUR SITE",
        width: "532",
        height: "414",
        right: "-28px",
        bottom: "-49px",
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
            <div onMouseOut={mouseOutHandle} style={isHoverService ? { opacity: 1, zIndex: 10 } : { opacity: 0, zIndex: -10 }} className="hidden bg-white lg:block absolute top-0 left-0  h-[400px] lg:w-[1240px] ease-linear duration-1000">
                <div className="relative w-full xl:w-[1240px] flex-col lg:flex-row flex justify-between items-center gap-5 h-[400px]">
                    <div style={indexHover === 0 ? { flexGrow: 5 } : { flexGrow: 1 }} className="relative w-full lg:w-auto ease-linear duration-500 h-full bg-white p- rounded-3xl  overflow-hidden">
                        {indexHover === 0 ?
                            <div>text</div>
                            : <div>
                                role
                            </div>}
                    </div>
                    <div style={indexHover === 1 ? { flexGrow: 5 } : { flexGrow: 1 }} className="relative w-full lg:w-auto ease-linear duration-500 h-full bg-white p- rounded-3xl  overflow-hidden">
                        {indexHover === 0 ?
                            <div>role</div>
                            : <div>
                                text
                            </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Double