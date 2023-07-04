'use client'
import React, { useEffect, useState } from 'react'

const IconGrid = () => {
    const [grid, setGrid] = useState("section")
    const handleGrid = () => {
        if (grid === "section") {
            setGrid('detail')
        } else {
            setGrid('section')
        }
    }

    if (grid === "section") {
        return (
            <svg onClick={handleGrid} width={45} height={35} viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x={16} y={27} width={1} height={2} fill="#D9D9D9" />
                <rect x={16} y={31} width={1} height={2} fill="#D9D9D9" />
                <rect x={16} y={17} width={1} height={2} fill="#D9D9D9" />
                <rect x={16} y={4} width={1} height={2} fill="#D9D9D9" />
                <rect x={16} y={13} width={1} height={2} fill="#D9D9D9" />
                <rect x={16} width={1} height={2} fill="#D9D9D9" />
                <rect y={13} width={45} height={9} rx="4.5" fill="black" />
                <rect y={26} width={45} height={9} rx={2} fill="black" />
                <rect width={45} height={9} rx={2} fill="black" />
            </svg>

        )
    }
    return (
        <svg onClick={handleGrid} width={45} height={35} viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y={13} width={14} height={9} rx={2} fill="black" />
            <rect y={26} width={14} height={9} rx={2} fill="black" />
            <rect x={16} y={27} width={29} height={2} fill="black" />
            <rect x={16} y={31} width={17} height={2} fill="black" />
            <rect x={16} y={17} width={17} height={2} fill="black" />
            <rect x={16} y={4} width={17} height={2} fill="black" />
            <rect x={16} y={13} width={29} height={2} fill="black" />
            <rect x={16} width={29} height={2} fill="black" />
            <rect width={14} height={9} rx={2} fill="black" />
        </svg>


    )
}

export default IconGrid