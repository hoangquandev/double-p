'use client'
import Image from "next/image"
import { useEffect, useState } from "react"


const CardHome = ({ index, indexHover, bgImage, text, mouseOverHandle }) => {
    const arrText = text.split(" ")
    const [isHover, setHover] = useState(false)
    const handleMouseOver = (e) => {
        mouseOverHandle(index)
        setHover(true)
    }
    const mouseOutHandle = () => {
        if (indexHover === 3) {
            setHover(false)
        }

    }
    useEffect(() => {
        // console.log(indexHover);
        mouseOutHandle()
    }, [indexHover])
    return (

        <div
            onMouseOver={handleMouseOver}
            style={isHover ? { flex: 4 } : { flex: 1 }}
            className={`relative w-full  ease-in duration-800 h-full bg-black dark:bg-white rounded-3xl  overflow-hidden`}>
            <div className="absolute bottom-0 right-0 w-[200px] h-[185px] lg:w-[400px] lg:h-[370px]">
                <Image
                    src={bgImage}
                    placeholder="blur"
                    quality={10}
                    blurDataURL={bgImage}
                    fill
                    alt="background image"
                    priority
                // fill
                />
            </div>
            <div className="absolute top-[30px] left-[30px] text-white dark:text-black text-base font-bold">{arrText.map((item, index) => {
                return (
                    <h2 key={index}>{item}</h2>
                )
            })}</div>

        </div>

    )
}

export default CardHome