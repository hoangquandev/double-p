'use client'
import ThemeSwitch from "@/helper/ThemeSwitch"
import { useIsomorphicLayoutEffect } from "@/helper/isomorphicEffect";
import { gsap } from 'gsap/dist/gsap';
import Image from "next/image";
import Link from "next/link"
import { useRef, useState } from "react"



const NavBar = () => {
    const [isHover, setHover] = useState(false)
    const [isShow, setShow] = useState(false)
    const container = useRef();
    const menuRef = useRef();
    const imageRef = useRef()
    const hello = useRef()
    const nav = useRef()
    const info = useRef()
    const footer = useRef()
    const tl = useRef();

    const toggleTimeline = () => {
        tl.current.reversed(!tl.current.reversed());
    };

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context((self) => {

            tl.current = gsap
                .timeline()
                .to(container.current, {
                    height: "100vh", backgroundColor: "rgba(128,128,128,0.3)",
                    backdropFilter: "blur(24px)"
                })
                .to(menuRef.current, {
                    display: "block"
                })
                .from(hello.current, {
                    opacity: 0,
                    y: 20,
                    duration: 0.2,
                    delay: 0.1
                })
                .from(nav.current, {
                    opacity: 0,
                    y: 20,
                    duration: 0.2,
                    delay: 0.1
                })
                .from(info.current, {
                    opacity: 0,
                    y: 20,
                    duration: 0.2,
                    delay: 0.1
                })
                .from(footer.current, {
                    opacity: 0,
                    y: 20,
                    duration: 0.2,
                    delay: 0.1
                })
                .from(imageRef.current, {
                    x: "-110%",
                    duration: 0.3,
                })
                .reverse();
        }, container);
        return () => ctx.revert();
    }, []);
    const handleOpenMenu = () => {
        setShow(true)
        toggleTimeline()
    }
    const handleCloseMenu = () => {
        setShow(false)
        toggleTimeline()
    }
    const handleMouseOver = () => {
        setHover(true)
    }
    const handleMouseOut = () => {
        setHover(false)
    }
    return (
        <nav
            ref={container}
            // style={
            //     // isShow ?
            //     {
            //         height: "100vh",
            //         backgroundColor: "rgba(128,128,128,0.3)",
            //         backdropFilter: "blur(24px)"
            //     }
            //     // :
            //     // {
            //     //     height: "auto",
            //     //     backgroundColor: "rgba(255,255,255,0.3)",
            //     //     backdropFilter: "blur(24px)"
            //     // }
            // }
            className="fixed top-0 w-full z-50  font-primary font-normal text-sm pl-3 pr-6 pt-[60px] uppercase">
            <div className="relative max-w-[1240px] min-[1920px]:max-w-[1720px] mx-auto flex justify-between items-center">
                <div>
                    <ThemeSwitch />
                </div>
                <div
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onClick={isShow ? handleCloseMenu : handleOpenMenu}
                    className="flex items-center justify-center cursor-pointer ">


                    {isShow ?
                        <svg width={65} height={65} viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32.5" cy="32.5" r={32} fill="#808080" fillOpacity="0.3" style={{ mixBlendMode: 'luminosity' }} />
                            <circle cx="32.5" cy="32.5" r={32} stroke="url(#paint0_linear_1131_20982)" />
                            <path d="M58.9691 32.9817C58.9691 32.9817 47.1159 49 32.4846 49C17.8532 49 6 32.9817 6 32.9817C6.03087 32.9817 17.8841 17 32.5154 17C47.1468 17 59 33.0183 59 33.0183L58.9691 32.9817Z" fill="#FD9A08" />
                            <mask id="mask0_1131_20982" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={8} y={26} width={49} height={14}>
                                <path d="M56.9715 32.992C56.9715 32.992 46.0128 40 32.4857 40C18.9586 40 8 32.992 8 32.992C8.02854 32.992 18.9872 26 32.5143 26C46.0414 26 57 33.008 57 33.008L56.9715 32.992Z" fill="#2F2629" />
                            </mask>
                            <g mask="url(#mask0_1131_20982)">
                                <circle cx="32.5" cy="33.5" r="24.5" fill="#D94539" />
                                <path d="M50.9785 32.992C50.9785 32.992 42.7036 40 32.4892 40C22.2749 40 14 32.992 14 32.992C14.0215 32.992 22.2964 26 32.5108 26C42.7251 26 51 33.008 51 33.008L50.9785 32.992Z" fill="white" />
                                <circle cx={33} cy={33} r={12} fill="#1E54B6" />
                            </g>
                            <path d="M41.5 33C41.5 37.6944 37.6944 41.5 33 41.5C28.3056 41.5 24.5 37.6944 24.5 33C24.5 28.3056 28.3056 24.5 33 24.5C37.6944 24.5 41.5 28.3056 41.5 33Z" fill="#010101" stroke="white" />
                            <path d="M37 29L30 36M30 29L37 36" stroke="white" />
                            <path d="M42.5 25.5C42.5 26.6046 41.6046 27.5 40.5 27.5C39.3954 27.5 38.5 26.6046 38.5 25.5C38.5 24.3954 39.3954 23.5 40.5 23.5C41.6046 23.5 42.5 24.3954 42.5 25.5Z" fill="white" stroke="white" />
                            <path d="M28.5 38.5C28.5 39.6046 27.6046 40.5 26.5 40.5C25.3954 40.5 24.5 39.6046 24.5 38.5C24.5 37.3954 25.3954 36.5 26.5 36.5C27.6046 36.5 28.5 37.3954 28.5 38.5Z" fill="white" stroke="white" />
                            <path d="M15.2721 14.7294C14.8989 14.1041 14.0917 13.9002 13.4664 14.2734C14.0917 13.9002 14.2955 13.093 13.9223 12.4677C14.2955 13.093 15.1027 13.2969 15.728 12.9237C15.1027 13.2969 14.8989 14.1041 15.2721 14.7294Z" fill="white" />
                            <path d="M19.4954 18.7869C19.8118 17.8359 19.2988 16.8114 18.3478 16.4951C19.2988 16.8114 20.3232 16.2984 20.6396 15.3475C20.3232 16.2984 20.8362 17.3229 21.7872 17.6393C20.8362 17.3229 19.8118 17.8359 19.4954 18.7869Z" fill="white" />
                            <path d="M43.7854 58.5879C43.1288 57.4876 41.7086 57.129 40.6083 57.7856C41.7086 57.129 42.0672 55.7087 41.4106 54.6085C42.0672 55.7087 43.4874 56.0674 44.5877 55.4108C43.4874 56.0674 43.1288 57.4876 43.7854 58.5879Z" fill="white" />
                            <defs>
                                <linearGradient id="paint0_linear_1131_20982" x1="4.55357" y1="-1.44118e-05" x2="35.522" y2="71.2942" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" stopOpacity="0.4" />
                                    <stop offset="0.405687" stopColor="white" stopOpacity="0.01" />
                                    <stop offset="0.574372" stopColor="white" stopOpacity="0.01" />
                                    <stop offset={1} stopColor="white" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                        </svg>


                        : isHover ?
                            <svg xmlns="http://www.w3.org/2000/svg" width={65} height={65} viewBox="0 0 65 65" fill="none">
                                <circle cx="32.5" cy="32.5" r={32} fill="#808080" fillOpacity="0.3" style={{ mixBlendMode: 'luminosity' }} />
                                <circle cx="32.5" cy="32.5" r={32} stroke="url(#paint0_linear_580_1043)" />
                                <path d="M58.9691 32.9817C58.9691 32.9817 47.1159 49 32.4846 49C17.8532 49 6 32.9817 6 32.9817C6.03087 32.9817 17.8841 17 32.5154 17C47.1468 17 59 33.0183 59 33.0183L58.9691 32.9817Z" fill="#FD9A08" />
                                <mask id="mask0_580_1043" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={6} y={17} width={53} height={32}>
                                    <path d="M58.9691 32.9817C58.9691 32.9817 47.1159 49 32.4846 49C17.8532 49 6 32.9817 6 32.9817C6.03087 32.9817 17.8841 17 32.5154 17C47.1468 17 59 33.0183 59 33.0183L58.9691 32.9817Z" fill="#2F2629" />
                                </mask>
                                <g mask="url(#mask0_580_1043)">
                                    <circle cx="32.5" cy="33.5" r="20.5" fill="#D94539" />
                                    <path d="M53.975 32.9909C53.975 32.9909 44.3582 41 32.4875 41C20.6168 41 11 32.9909 11 32.9909C11.025 32.9909 20.6418 25 32.5125 25C44.3832 25 54 33.0091 54 33.0091L53.975 32.9909Z" fill="white" />
                                    <circle cx={33} cy={33} r={16} fill="#1E54B6" />
                                </g>
                                <path d="M44.5 33C44.5 39.3513 39.3513 44.5 33 44.5C26.6487 44.5 21.5 39.3513 21.5 33C21.5 26.6487 26.6487 21.5 33 21.5C39.3513 21.5 44.5 26.6487 44.5 33Z" fill="#010101" stroke="white" />
                                <path d="M33 33L34 32M34 33L33 32" stroke="black" />
                                <path d="M45.5 25.5C45.5 27.7091 43.7091 29.5 41.5 29.5C39.2909 29.5 37.5 27.7091 37.5 25.5C37.5 23.2909 39.2909 21.5 41.5 21.5C43.7091 21.5 45.5 23.2909 45.5 25.5Z" fill="white" stroke="white" />
                                <path d="M30.5 37.5C30.5 38.6046 29.6046 39.5 28.5 39.5C27.3954 39.5 26.5 38.6046 26.5 37.5C26.5 36.3954 27.3954 35.5 28.5 35.5C29.6046 35.5 30.5 36.3954 30.5 37.5Z" fill="white" stroke="white" />
                                <path d="M16.0581 20.1712C15.1467 18.644 13.1753 18.1462 11.6482 19.0576C13.1753 18.1462 13.6731 16.1749 12.7617 14.6477C13.6731 16.1749 15.6445 16.6727 17.1716 15.7613C15.6445 16.6727 15.1467 18.644 16.0581 20.1712Z" fill="white" />
                                <path d="M20.0525 19.1187C20.6139 17.4311 19.7035 15.6131 18.016 15.0517C19.7035 15.6131 21.5215 14.7028 22.083 13.0152C21.5215 14.7028 22.4319 16.5208 24.1194 17.0822C22.4319 16.5208 20.6139 17.4311 20.0525 19.1187Z" fill="white" />
                                <path d="M56.1855 62.6095C54.2018 59.2855 49.9112 58.2021 46.5872 60.1858C49.9112 58.2021 50.9946 53.9115 49.011 50.5876C50.9946 53.9115 55.2852 54.9949 58.6092 53.0113C55.2852 54.9949 54.2018 59.2855 56.1855 62.6095Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_580_1043" x1="4.55357" y1="-1.44118e-05" x2="35.522" y2="71.2942" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0.4" />
                                        <stop offset="0.405687" stopColor="white" stopOpacity="0.01" />
                                        <stop offset="0.574372" stopColor="white" stopOpacity="0.01" />
                                        <stop offset={1} stopColor="white" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width={65} height={65} viewBox="0 0 65 65" fill="none">
                                <circle cx="32.5" cy="32.5" r={32} fill="#808080" fillOpacity="0.3" style={{ mixBlendMode: 'luminosity' }} />
                                <circle cx="32.5" cy="32.5" r={32} stroke="url(#paint0_linear_580_1041)" />
                                <path d="M58.9691 32.9817C58.9691 32.9817 47.1159 49 32.4846 49C17.8532 49 6 32.9817 6 32.9817C6.03087 32.9817 17.8841 17 32.5154 17C47.1468 17 59 33.0183 59 33.0183L58.9691 32.9817Z" fill="#FD9A08" />
                                <mask id="mask0_580_1041" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={6} y={17} width={53} height={32}>
                                    <path d="M58.9691 32.9817C58.9691 32.9817 47.1159 49 32.4846 49C17.8532 49 6 32.9817 6 32.9817C6.03087 32.9817 17.8841 17 32.5154 17C47.1468 17 59 33.0183 59 33.0183L58.9691 32.9817Z" fill="#FD9A08" />
                                </mask>
                                <g mask="url(#mask0_580_1041)">
                                    <circle cx="32.5" cy="33.5" r="26.5" fill="#7CC8DD" />
                                    <path d="M56.9715 32.9829C56.9715 32.9829 46.0128 48 32.4857 48C18.9586 48 8 32.9829 8 32.9829C8.02854 32.9829 18.9872 18 32.5143 18C46.0414 18 57 33.0171 57 33.0171L56.9715 32.9829Z" fill="white" />
                                    <circle cx={33} cy={33} r={13} fill="#1E54B6" />
                                </g>
                                <path d="M44.5 33C44.5 39.3513 39.3513 44.5 33 44.5C26.6487 44.5 21.5 39.3513 21.5 33C21.5 26.6487 26.6487 21.5 33 21.5C39.3513 21.5 44.5 26.6487 44.5 33Z" fill="#010101" stroke="white" />
                                <path d="M33.5 32.5C33.5 33.0523 33.0523 33.5 32.5 33.5C31.9477 33.5 31.5 33.0523 31.5 32.5C31.5 31.9477 31.9477 31.5 32.5 31.5C33.0523 31.5 33.5 31.9477 33.5 32.5Z" fill="white" stroke="white" />
                                <path d="M32.5 38C32.5 34.9586 30.0414 32.5 27 32.5C30.0414 32.5 32.5 30.0414 32.5 27C32.5 30.0414 34.9586 32.5 38 32.5C34.9586 32.5 32.5 34.9586 32.5 38Z" fill="white" />
                                <path d="M35 30L30 35M30 30L35 35" stroke="black" />
                                <defs>
                                    <linearGradient id="paint0_linear_580_1041" x1="4.55357" y1="-1.44118e-05" x2="35.522" y2="71.2942" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" stopOpacity="0.4" />
                                        <stop offset="0.405687" stopColor="white" stopOpacity="0.01" />
                                        <stop offset="0.574372" stopColor="white" stopOpacity="0.01" />
                                        <stop offset={1} stopColor="white" stopOpacity="0.1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                    }



                </div>
                {/* <div className="bg-[rgba(128,128,128,0.3)] backdrop-blur-xl fixed w-screen h-screen top-0 left-0 z-[10000]">

                </div> */}
            </div>
            <div ref={menuRef} className="hidden relative pt-[70px] pb-[95px]">
                <ul className="w-[1240px] min-[1920px]:w-[1720px] mx-auto text-[70px] font-primary font-extrabold uppercase text-right flex flex-col justify-between items-end gap-[70px] min-[1920px]:gap-[70px]">
                    <li ref={hello} className="flex flex-col justify-between h-[142px] leading-[47px]">
                        <div>xin</div>
                        <div>chào</div>
                    </li>
                    <li ref={nav}>
                        <ul className="flex flex-col gap-[20px] min-[1920px]:gap-[30px] justify-between text-title">
                            <li onClick={handleCloseMenu}>
                                <Link href={'/'}>home</Link>
                            </li>
                            <li onClick={handleCloseMenu}>
                                <Link href={'/work'}>work</Link>
                            </li>
                            <li onClick={handleCloseMenu}>
                                <Link href={'/about'}>about</Link>
                            </li>
                            <li onClick={handleCloseMenu}>
                                <Link href={'/contact'}>contact</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul ref={info} className="flex flex-col gap-[5px] min-[1920px]:gap-[15px] justify-between text-mini">
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>+84 972 091 245</li>
                            <li>caosonwork@gmail.com</li>
                        </ul>
                    </li>
                    <li ref={footer} className="flex items-center justify-end w-1/2 text-right">
                        <ul className="flex gap-[67px] justify-between text-mini ">
                            <li>© Design by CAO SON</li>
                            <li>Located in Viet Nam</li>
                            <li>© Code by Hoang Quan</li>
                        </ul>
                    </li>
                </ul>
                <div ref={imageRef} className="absolute top-[44%] min-[1920px]:top-[40%] left-0 translate-y-[-50%] w-3/5">
                    <div className="relative aspect-[1985/569] rounded-[20px] overflow-hidden">
                        <Image
                            src={'/menu-home.png'}
                            alt="menu home"
                            style={{ objectFit: "cover" }}
                            fill
                            priority
                        />
                    </div>
                </div>
                <div>

                </div>
            </div>

        </nav>
    )
}

export default NavBar