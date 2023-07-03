'use client'
import React from 'react'

const EyeWrapper = ({ theme, color }) => {
    return (
        <svg width={75} height={44} viewBox="0 0 75 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M74.9563 21.9749C74.9563 21.9749 58.1829 44 37.4782 44C16.7734 44 0 21.9749 0 21.9749C0.0436808 21.9749 16.8171 0 37.5218 0C58.2266 0 75 22.0251 75 22.0251L74.9563 21.9749Z" fill={color} />
        </svg>
    )
}

export default EyeWrapper