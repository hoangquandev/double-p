'use client'

import { useEffect, useState } from "react"

const CircleLarge = ({ currentTheme }) => {
    const [isTrue, setTrue] = useState(false)
    useEffect(() => {
        setTrue(currentTheme)
    }, [])
    if (isTrue) { return <div className='absolute top-[-2px] right-[2px] w-[10px] aspect-square rounded-full bg-white'></div> }
    return <div></div>
}
const CircleSmall = ({ currentTheme }) => {
    const [isTrue, setTrue] = useState(false)
    useEffect(() => {
        setTrue(currentTheme)
    }, [])
    if (isTrue) { return <div className='absolute bottom-[-1px] left-[2px] w-[7px] aspect-square rounded-full bg-white'></div> }
    return <div></div>
}
const CircleLage = ({ theme, color }) => {
    const currentTheme = theme === "dark"
    return (
        <div className='absolute w-[28px] aspect-square rounded-full bg-white flex justify-center items-center z-10'>
            <div
                style={{
                    // backgroundColor: currentTheme ? "#FD9A08" : "#D1D8E0"
                }}
                className='relative w-[25px] aspect-square rounded-full bg-yellow-600 flex justify-center items-center'>
                <div className='w-[7px] aspect-square rounded-full bg-black'></div>
                <CircleLarge currentTheme={currentTheme} />
                <CircleSmall currentTheme={currentTheme} />
                {/* {currentTheme ? <div className='absolute top-[-2px] right-[2px] w-[10px] aspect-square rounded-full bg-white'></div> : null} */}
                {/* {currentTheme && <div className='absolute bottom-[-1px] left-[2px] w-[7px] aspect-square rounded-full bg-white'></div>} */}
            </div>

        </div >
    )
}

export default CircleLage