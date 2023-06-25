'use client'
import Image from "next/image"
import { useEffect, useState } from "react"


const CardHome = ({ index, indexHover, bgImage, text, width, height, right, bottom, mouseOverHandle }) => {
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
            style={isHover ? { flexGrow: 5 } : { flexGrow: 1 }}
            className={`relative w-full lg:w-auto ease-linear duration-500 h-full bg-black p- rounded-3xl  overflow-hidden`}>
            <div className="absolute " style={{ right: right, bottom: bottom }}>
                <Image
                    src={bgImage}
                    width={width}
                    height={height}
                    alt="background image"
                    priority
                // fill
                />
            </div>
            <div className="absolute top-[30px] left-[30px] text-white text-3xl md:text-4xl font-bold">{arrText.map((item, index) => {
                return (
                    <h2 key={index}>{item}</h2>
                )
            })}</div>

        </div>

    )
}

export default CardHome