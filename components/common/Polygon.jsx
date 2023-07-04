'use client'

import { useEffect, useState } from "react"

const Polygon = ({ top, right, rot, theme }) => {
    const [t, setTop] = useState('')
    const [r, setRight] = useState('')
    const [rotate, setRot] = useState('')
    const [isDark, setTheme] = useState('')
    useEffect(() => {
        setTop(top)
        setRight(right)
        setRot(rot)
        setTheme(theme)
    }, [theme])
    return (

        <svg style={{
            position: "absolute",
            top: t,
            right: r,
            transform: `rotate(${rotate})`,
            display: isDark === "dark" ? "block" : "none"
        }} width={6} height={17} viewBox="0 0 6 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Polygon 1" d="M0.577391 16.35L3 0.964365L5.42261 16.35H0.577391Z" fill="#F2B92C" stroke="white" strokeWidth="0.3" />
        </svg>


    )
}

export default Polygon