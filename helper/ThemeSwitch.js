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
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'} `;
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
            className='flex items-center gap-[20px]'
        >
            <div>
                <svg width={63} height={62} viewBox="0 0 63 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_799_21423)">
                        <path d="M18.4375 22.2812C18.4375 14.7909 24.5096 8.71875 32 8.71875C39.4904 8.71875 45.5625 14.7909 45.5625 22.2812V31V39.7188C45.5625 47.2091 39.4904 53.2812 32 53.2812C24.5096 53.2812 18.4375 47.2091 18.4375 39.7188V22.2812Z" fill="black" />
                        <path d="M31.9678 59.3204C38.7182 59.3204 44.1905 53.8481 44.1905 47.0977C44.1905 40.3473 38.7182 34.875 31.9678 34.875C25.2174 34.875 19.7451 40.3473 19.7451 47.0977C19.7451 53.8481 25.2174 59.3204 31.9678 59.3204Z" fill="white" />
                        <path d="M1.31641 13.8057V48.1938C1.31641 55.6668 7.33275 61.6831 14.8057 61.6831H49.1938C56.6668 61.6831 62.6831 55.6668 62.6831 48.1938V13.8057C62.6831 6.33275 56.6668 0.316406 49.1938 0.316406H14.8057C7.33275 0.316406 1.31641 6.33275 1.31641 13.8057ZM31.9681 53.1969C24.4952 53.1969 18.4788 47.1806 18.4788 39.7076V22.2919C18.4788 18.8721 19.7454 15.8322 21.772 13.4257C24.2418 10.5759 27.8516 8.80262 31.9048 8.80262C35.9579 8.80262 39.5677 10.5759 42.0376 13.4257C44.1274 15.7689 45.394 18.8721 45.394 22.2919V39.7076C45.394 47.1806 39.3777 53.1969 31.9048 53.1969H31.9681Z" fill="black" stroke="#DFDFDF" strokeMiterlimit={10} />
                        <g clipPath="url(#clip1_799_21423)">
                            <path d="M25.2188 25.1875C25.2188 26.2531 24.3469 27.125 23.2812 27.125C24.3469 27.125 25.2188 27.9969 25.2188 29.0625C25.2188 27.9969 26.0906 27.125 27.1562 27.125C26.0906 27.125 25.2188 26.2531 25.2188 25.1875Z" fill="white" />
                        </g>
                        <g clipPath="url(#clip2_799_21423)">
                            <path d="M39.75 15.5C39.75 16.5656 38.8781 17.4375 37.8125 17.4375C38.8781 17.4375 39.75 18.3094 39.75 19.375C39.75 18.3094 40.6219 17.4375 41.6875 17.4375C40.6219 17.4375 39.75 16.5656 39.75 15.5Z" fill="white" />
                        </g>
                        <g clipPath="url(#clip3_799_21423)">
                            <path d="M40.7188 30.0312C40.7188 31.0969 39.8469 31.9688 38.7812 31.9688C39.8469 31.9688 40.7188 32.8406 40.7188 33.9062C40.7188 32.8406 41.5906 31.9688 42.6562 31.9688C41.5906 31.9688 40.7188 31.0969 40.7188 30.0312Z" fill="white" />
                        </g>
                        <path d="M26.1875 22.2832C29.3695 19.1012 34.5944 19.0619 37.8157 22.2832C34.6337 25.4652 29.4088 25.5045 26.1875 22.2832Z" fill="white" />
                        <circle cx={32} cy="22.2812" r="1.9375" fill="black" />
                    </g>
                    <path d="M31.6533 61.6192V53.1963" stroke="white" strokeMiterlimit={10} />
                    <path d="M31.6533 8.80359V0.317383" stroke="white" strokeMiterlimit={10} />
                    <path d="M49.386 61.6205L41.9131 48.7012" stroke="white" strokeMiterlimit={10} />
                    <path d="M21.5206 13.4267L13.9844 0.317383" stroke="white" strokeMiterlimit={10} />
                    <path d="M62.304 48.7006L45.1416 38.7578" stroke="white" strokeMiterlimit={10} />
                    <path d="M18.2257 23.1793L1 13.2998" stroke="white" strokeMiterlimit={10} />
                    <path d="M62.304 30.9688H45.1416" stroke="white" strokeMiterlimit={10} />
                    <path d="M18.2257 30.9688H1" stroke="white" strokeMiterlimit={10} />
                    <path d="M62.304 13.2998L45.1416 23.1793" stroke="white" strokeMiterlimit={10} />
                    <path d="M18.2257 38.7578L1 48.7006" stroke="white" strokeMiterlimit={10} />
                    <path d="M49.3849 0.317383L41.8486 13.4267" stroke="white" strokeMiterlimit={10} />
                    <path d="M21.5206 48.5752L13.9844 61.6212" stroke="white" strokeMiterlimit={10} />
                    <defs>
                        <clipPath id="clip0_799_21423">
                            <rect width={62} height={62} fill="white" transform="translate(1)" />
                        </clipPath>
                        <clipPath id="clip1_799_21423">
                            <rect width="3.875" height="3.875" fill="white" transform="translate(23.2812 25.1875)" />
                        </clipPath>
                        <clipPath id="clip2_799_21423">
                            <rect width="3.875" height="3.875" fill="white" transform="translate(37.8125 15.5)" />
                        </clipPath>
                        <clipPath id="clip3_799_21423">
                            <rect width="3.875" height="3.875" fill="white" transform="translate(38.7812 30.0312)" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div>
                <ul>
                    <li>{hour}:{minute < 10 ? "0" + minute : minute}</li>
                    <li className='mt-2'>{wish}</li>
                </ul>
            </div>

        </div>
    )
}


export default ThemeSwitch