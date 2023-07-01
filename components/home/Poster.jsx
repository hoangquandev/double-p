// "use client"
// import { useState } from 'react'

import Link from "next/link"

const Poster = ({ h, title, desc, slug }) => {
    // const [hover, setHover] = useState(false)
    // console.log(w, h, title, desc);
    // const handleMouseOver = (e) => {
    //     setHover(true)
    // }
    // const handleMouseOut = (e) => {
    //     setHover(false)
    // }
    return (
        <Link href={`/${slug}`}>
            <div
                // onMouseOver={handleMouseOver}
                // onMouseOut={handleMouseOut}
                // style={hover ? { backgroundColor: "black", color: "#F00" } : null}
                className={`relative lg:w-[1240px] ${h} rounded-[20px] bg-gray-200 hover:text-[#F00] hover:bg-black duration-500 ease-linear  p-[30px] my-[20px]`}>
                {/* <div className={`absolute top-0 left-0  rounded-[20px] lg:w-[${w}px] lg:h-[${h}px]`}> */}
                {/* <Image
                    src="/yen-xao-banner.png"
                    alt='poster'
                    className='top-0 left-0'
                    fill
                /> */}
                {/* </div> */}
                <div className='z-50 absolute w-3/4 lg:w-[650px] h-min bottom-[30px]'>
                    <h2 className='font-bold text-base'>{title}</h2>
                    <p className='text-base font-third font-light italic'>{desc}</p>
                </div>

            </div>
        </Link>
    )
}

export default Poster