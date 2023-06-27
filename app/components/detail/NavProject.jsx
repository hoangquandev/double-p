'use client'
import { useTheme } from 'next-themes';

const NavProject = () => {
    const { theme } = useTheme();
    return (
        <div className='flex justify-between'>
            <div>
                <svg width="88" height="87" viewBox="0 0 88 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63 47.6H44.2C40.6 47.6 38.8 51.9 41.4 54.4L44.2 57.2C45.8 58.8 45.8 61.3 44.2 62.9C42.6 64.5 40.1 64.5 38.5 62.9L22 46.4C20.4 44.8 20.4 42.3 22 40.7L38.5 24.2C40.1 22.6 42.6 22.6 44.2 24.2C45.8 25.8 45.8 28.3 44.2 29.9L41.4 32.7C38.9 35.2 40.7 39.5 44.2 39.5H63C65.2 39.5 67 41.3 67 43.5C67 45.7 65.2 47.5 63 47.5V47.6Z" fill={theme === "dark" ? "white" : "black"} />
                </svg>
            </div>
            <div>
                <svg width="88" height="87" viewBox="0 0 88 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 47.6H43.8C47.4 47.6 49.2 51.9 46.6 54.4L43.8 57.2C42.2 58.8 42.2 61.3 43.8 62.9C45.4 64.5 47.9 64.5 49.5 62.9L66 46.4C67.6 44.8 67.6 42.3 66 40.7L49.5 24.2C47.9 22.6 45.4 22.6 43.8 24.2C42.2 25.8 42.2 28.3 43.8 29.9L46.6 32.7C49.1 35.2 47.3 39.5 43.8 39.5H25C22.8 39.5 21 41.3 21 43.5C21 45.7 22.8 47.5 25 47.5V47.6Z" fill={theme === "dark" ? "white" : "black"} />
                </svg>
            </div>
        </div>
    )
}

export default NavProject