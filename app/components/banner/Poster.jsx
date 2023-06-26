"use client"
import React, { useState } from 'react'

const Poster = ({ w, h, title, desc }) => {
    const [hover, setHover] = useState(false)
    const handleMouseOver = (e) => {
        setHover(true)
    }
    const handleMouseOut = (e) => {
        setHover(false)
    }
    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={hover ? { backgroundColor: "black", color: "#F00" } : null}
            className={`relative w-[${w}]] h-[${h}] rounded-[20px] bg-gray-200 duration-500 ease-linear flex items-end p-[30px] my-[20px]`}>
            <div className={`absolute top-0 left-0  rounded-[20px] w-[${w}] h-[${h}]`}>
                {/* <Image
                    src="/yen-xao-banner.png"
                    alt='poster'
                    className='top-0 left-0'
                    fill
                /> */}
            </div>
            <div className='z-50 absolute w-[650px] h-min bottom-[30px]'>
                <h2 className='font-bold text-base'>{title}</h2>
                <p className='text-base font-third font-light italic'>{desc}</p>
            </div>

        </div>
    )
}

export default Poster