"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";


const ThemeSwitch = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date())
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const hour = today.getHours();
    // const hour = 14
    // let time = new Date();
    useEffect(() => {
        if (hour > 5 && hour < 17) {
            setTheme('light')
        } else {
            setTheme('dark')
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

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
    return (
        <button
            onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
        >
            {time}
        </button>
    )
}


export default ThemeSwitch