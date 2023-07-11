'use client'
import ThemeSwitch from "@/helper/ThemeSwitch"
import Link from "next/link"
import { useState } from "react"


const NavBar = () => {
    const [isHover, setHover] = useState(false)
    const handleMouseOver = () => {
        setHover(true)
    }
    const handleMouseOut = () => {
        setHover(false)
    }
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-[rgba(255,255,255,0)] font-primary font-normal text-sm pl-3 pt-[60px] uppercase">
            <div className="w-[1240px] min-[1920px]:w-[1720px] mx-auto flex justify-between items-center">
                <div>
                    <ThemeSwitch />
                </div>
                <div
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    className="flex items-center justify-center">
                    {/* {isHover ?
                        <svg width={203} height={182} viewBox="0 0 203 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_1074_20751)">
                                <circle cx="101.5" cy="71.5" r="32.5" fill="#808080" fillOpacity="0.3" style={{ mixBlendMode: 'luminosity' }} />
                                <circle cx="101.5" cy="71.5" r={32} stroke="url(#paint0_linear_1074_20751)" />
                            </g>
                            <g filter="url(#filter1_d_1074_20751)">
                                <path d="M127.969 71.9817C127.969 71.9817 116.116 88 101.485 88C86.8532 88 75 71.9817 75 71.9817C75.0309 71.9817 86.8841 56 101.515 56C116.147 56 128 72.0183 128 72.0183L127.969 71.9817Z" fill="#FD9A08" />
                            </g>
                            <mask id="mask0_1074_20751" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={75} y={56} width={53} height={32}>
                                <path d="M127.969 71.9817C127.969 71.9817 116.116 88 101.485 88C86.8532 88 75 71.9817 75 71.9817C75.0309 71.9817 86.8841 56 101.515 56C116.147 56 128 72.0183 128 72.0183L127.969 71.9817Z" fill="#2F2629" />
                            </mask>
                            <g mask="url(#mask0_1074_20751)">
                                <circle cx="101.5" cy="72.5" r="20.5" fill="#D94539" />
                                <g filter="url(#filter2_d_1074_20751)">
                                    <path d="M122.975 71.9909C122.975 71.9909 113.358 80 101.487 80C89.6168 80 80 71.9909 80 71.9909C80.025 71.9909 89.6418 64 101.513 64C113.383 64 123 72.0091 123 72.0091L122.975 71.9909Z" fill="white" />
                                </g>
                                <circle cx={102} cy={72} r={16} fill="#1E54B6" />
                            </g>
                            <g filter="url(#filter3_d_1074_20751)">
                                <path d="M102 84C108.627 84 114 78.6274 114 72C114 65.3726 108.627 60 102 60C95.3726 60 90 65.3726 90 72C90 78.6274 95.3726 84 102 84Z" fill="#010101" />
                                <path d="M113.5 72C113.5 78.3513 108.351 83.5 102 83.5C95.6487 83.5 90.5 78.3513 90.5 72C90.5 65.6487 95.6487 60.5 102 60.5C108.351 60.5 113.5 65.6487 113.5 72Z" stroke="white" />
                            </g>
                            <path d="M102 72L103 71M103 72L102 71" stroke="black" />
                            <g filter="url(#filter4_d_1074_20751)">
                                <path d="M110.5 69C112.985 69 115 66.9853 115 64.5C115 62.0147 112.985 60 110.5 60C108.015 60 106 62.0147 106 64.5C106 66.9853 108.015 69 110.5 69Z" fill="white" />
                                <path d="M114.5 64.5C114.5 66.7091 112.709 68.5 110.5 68.5C108.291 68.5 106.5 66.7091 106.5 64.5C106.5 62.2909 108.291 60.5 110.5 60.5C112.709 60.5 114.5 62.2909 114.5 64.5Z" stroke="white" />
                            </g>
                            <g filter="url(#filter5_d_1074_20751)">
                                <path d="M97.5 79C98.8807 79 100 77.8807 100 76.5C100 75.1193 98.8807 74 97.5 74C96.1193 74 95 75.1193 95 76.5C95 77.8807 96.1193 79 97.5 79Z" fill="white" />
                                <path d="M99.5 76.5C99.5 77.6046 98.6046 78.5 97.5 78.5C96.3954 78.5 95.5 77.6046 95.5 76.5C95.5 75.3954 96.3954 74.5 97.5 74.5C98.6046 74.5 99.5 75.3954 99.5 76.5Z" stroke="white" />
                            </g>
                            <path d="M85.0581 59.1712C84.1467 57.644 82.1753 57.1462 80.6482 58.0576C82.1753 57.1462 82.6731 55.1749 81.7617 53.6477C82.6731 55.1749 84.6445 55.6727 86.1716 54.7613C84.6445 55.6727 84.1467 57.644 85.0581 59.1712Z" fill="white" />
                            <path d="M89.0525 58.1187C89.6139 56.4311 88.7035 54.6131 87.016 54.0517C88.7035 54.6131 90.5215 53.7028 91.083 52.0152C90.5215 53.7028 91.4319 55.5208 93.1194 56.0822C91.4319 55.5208 89.6139 56.4311 89.0525 58.1187Z" fill="white" />
                            <path d="M125.185 101.609C123.202 98.2855 118.911 97.2021 115.587 99.1858C118.911 97.2021 119.995 92.9115 118.011 89.5876C119.995 92.9115 124.285 93.9949 127.609 92.0113C124.285 93.9949 123.202 98.2855 125.185 101.609Z" fill="white" />
                            <defs>
                                <filter id="filter0_b_1074_20751" x={38} y={8} width={127} height={127} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="15.5" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1074_20751" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1074_20751" result="shape" />
                                </filter>
                                <filter id="filter1_d_1074_20751" x={0} y={0} width={203} height={182} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy={19} />
                                    <feGaussianBlur stdDeviation="37.5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1074_20751" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1074_20751" result="shape" />
                                </filter>
                                <filter id="filter2_d_1074_20751" x={5} y={8} width={193} height={166} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy={19} />
                                    <feGaussianBlur stdDeviation="37.5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1074_20751" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1074_20751" result="shape" />
                                </filter>
                                <filter id="filter3_d_1074_20751" x={86} y={60} width={32} height={32} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy={4} />
                                    <feGaussianBlur stdDeviation={2} />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1074_20751" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1074_20751" result="shape" />
                                </filter>
                                <filter id="filter4_d_1074_20751" x={102} y={60} width={17} height={17} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy={4} />
                                    <feGaussianBlur stdDeviation={2} />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1074_20751" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1074_20751" result="shape" />
                                </filter>
                                <filter id="filter5_d_1074_20751" x={91} y={74} width={13} height={13} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy={4} />
                                    <feGaussianBlur stdDeviation={2} />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1074_20751" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1074_20751" result="shape" />
                                </filter>
                                <linearGradient id="paint0_linear_1074_20751" x1="73.5536" y1={39} x2="104.522" y2="110.294" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" stopOpacity="0.4" />
                                    <stop offset="0.405687" stopColor="white" stopOpacity="0.01" />
                                    <stop offset="0.574372" stopColor="white" stopOpacity="0.01" />
                                    <stop offset={1} stopColor="white" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                        </svg>



                        :
                        <svg width={203} height={182} viewBox="0 0 203 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_1074_20766)">
                                <circle cx="101.5" cy="71.5" r="32.5" fill="#808080" fillOpacity="0.3" style={{ mixBlendMode: 'luminosity' }} />
                                <circle cx="101.5" cy="71.5" r={32} stroke="url(#paint0_linear_1074_20766)" />
                            </g>
                            <g filter="url(#filter1_d_1074_20766)">
                                <path d="M127.969 71.9817C127.969 71.9817 116.116 88 101.485 88C86.8532 88 75 71.9817 75 71.9817C75.0309 71.9817 86.8841 56 101.515 56C116.147 56 128 72.0183 128 72.0183L127.969 71.9817Z" fill="#FD9A08" />
                            </g>
                            <mask id="mask0_1074_20766" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={75} y={56} width={53} height={32}>
                                <path d="M127.969 71.9817C127.969 71.9817 116.116 88 101.485 88C86.8532 88 75 71.9817 75 71.9817C75.0309 71.9817 86.8841 56 101.515 56C116.147 56 128 72.0183 128 72.0183L127.969 71.9817Z" fill="#FD9A08" />
                            </mask>
                            <g mask="url(#mask0_1074_20766)">
                                <circle cx="101.5" cy="72.5" r="26.5" fill="#7CC8DD" />
                                <g filter="url(#filter2_d_1074_20766)">
                                    <path d="M125.971 71.9829C125.971 71.9829 115.013 87 101.486 87C87.9586 87 77 71.9829 77 71.9829C77.0285 71.9829 87.9872 57 101.514 57C115.041 57 126 72.0171 126 72.0171L125.971 71.9829Z" fill="white" />
                                </g>
                                <circle cx={102} cy={72} r={13} fill="#1E54B6" />
                            </g>
                            <g filter="url(#filter3_d_1074_20766)">
                                <path d="M102 84C108.627 84 114 78.6274 114 72C114 65.3726 108.627 60 102 60C95.3726 60 90 65.3726 90 72C90 78.6274 95.3726 84 102 84Z" fill="#010101" />
                                <path d="M113.5 72C113.5 78.3513 108.351 83.5 102 83.5C95.6487 83.5 90.5 78.3513 90.5 72C90.5 65.6487 95.6487 60.5 102 60.5C108.351 60.5 113.5 65.6487 113.5 72Z" stroke="white" />
                            </g>
                            <g filter="url(#filter4_d_1074_20766)">
                                <path d="M101.5 73C102.328 73 103 72.3284 103 71.5C103 70.6716 102.328 70 101.5 70C100.672 70 100 70.6716 100 71.5C100 72.3284 100.672 73 101.5 73Z" fill="white" />
                                <path d="M102.5 71.5C102.5 72.0523 102.052 72.5 101.5 72.5C100.948 72.5 100.5 72.0523 100.5 71.5C100.5 70.9477 100.948 70.5 101.5 70.5C102.052 70.5 102.5 70.9477 102.5 71.5Z" stroke="white" />
                            </g>
                            <path d="M101.5 77C101.5 73.9586 99.0414 71.5 96 71.5C99.0414 71.5 101.5 69.0414 101.5 66C101.5 69.0414 103.959 71.5 107 71.5C103.959 71.5 101.5 73.9586 101.5 77Z" fill="white" />
                            <path d="M104 69L99 74M99 69L104 74" stroke="black" />
                            <defs>
                                <filter id="filter0_b_1074_20766" x={38} y={8} width={127} height={127} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="15.5" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1074_20766" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1074_20766" result="shape" />
                                </filter>
                                <filter id="filter1_d_1074_20766" x={0} y={0} width={203} height={182} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy={19} />
                                    <feGaussianBlur stdDeviation="37.5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1074_20766" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1074_20766" result="shape" />
                                </filter>
                                <filter id="filter2_d_1074_20766" x={2} y={1} width={199} height={180} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy={19} />
                                    <feGaussianBlur stdDeviation="37.5" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1074_20766" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1074_20766" result="shape" />
                                </filter>
                                <filter id="filter3_d_1074_20766" x={86} y={60} width={32} height={32} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy={4} />
                                    <feGaussianBlur stdDeviation={2} />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1074_20766" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1074_20766" result="shape" />
                                </filter>
                                <filter id="filter4_d_1074_20766" x={96} y={70} width={11} height={11} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy={4} />
                                    <feGaussianBlur stdDeviation={2} />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1074_20766" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1074_20766" result="shape" />
                                </filter>
                                <linearGradient id="paint0_linear_1074_20766" x1="73.5536" y1={39} x2="104.522" y2="110.294" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" stopOpacity="0.4" />
                                    <stop offset="0.405687" stopColor="white" stopOpacity="0.01" />
                                    <stop offset="0.574372" stopColor="white" stopOpacity="0.01" />
                                    <stop offset={1} stopColor="white" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                        </svg>


                    } */}



                </div>
            </div>

        </nav>
    )
}

export default NavBar