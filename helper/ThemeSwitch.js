"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import Eyes from '@/components/common/Eyes';


const ThemeSwitch = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date())
    const [color, setColor] = useState("#D94539")
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const hour = today.getHours();
    const minute = today.getMinutes();
    // const hour = 14
    // let time = new Date();
    useEffect(() => {
        if (hour > 5 && hour < 17) {
            setTheme('light')
            setColor("#1A1617")
        } else {
            setTheme('dark')
            setColor("#D94539")
        }
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, [])
    // const day = today.toLocaleDateString(locale, { weekday: 'long' });
    // const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    // const hour = today.getHours();
    // const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
    const handleDark = () => {
        setTheme("dark")
        setColor("#D94539")
    }
    const handleLight = () => {
        setTheme("light")
        setColor("#1A1617")
    }

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
    return (
        <div
            onClick={theme == "dark" ? handleLight : handleDark}
            className='flex items-center text-lg'
        >
            {hour}<Eyes theme={theme} color={color} />{minute < 10 ? "0" + minute : minute}
        </div>
    )
}


export default ThemeSwitch