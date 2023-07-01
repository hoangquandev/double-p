'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {
    const cursorRef = useRef(null)
    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const { clientX, clientY } = event
            // console.log(cursorRef.current);
            const mouseX = clientX - cursorRef.current.clientWidth / 2
            const mouseY = clientY - cursorRef.current.clientHeight / 2
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        })
    }, [])
    return (
        <div ref={cursorRef} className='ease-linear duration-150 fixed z-0 w-[200px] h-[200px] overflow-hidden' style={{ transform: "translate3d(0, 0, 0)" }}>
            <Image
                src={"/cursor.png"}
                fill
                priority
                alt='background cursor'
            />
        </div>
    )
}

export default CustomCursor