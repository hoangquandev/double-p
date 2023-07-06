'use client'
import ThemeSwitch from "@/helper/ThemeSwitch"
import Link from "next/link"
import { usePathname } from 'next/navigation'


const NavBar = () => {
    // const { pathname } = usePathname()
    const pathname = usePathname()
    // console.log(pathname);
    return (
        <nav className="fixed top-0 left-[50%] translate-x-[-50%] w-[1240px] backdrop-blur-lg bg-[rgba(255,255,255,0)] z-50 font-primary font-normal text-sm flex justify-between px-7 py-10 uppercase">
            <div>
                <ThemeSwitch />
            </div>
            <div>
                <ul className="text-right">
                    <li >
                        <Link href="/work" >
                            WORK
                        </Link>
                    </li>
                    <li className="mt-2">
                        <Link href={`/contact`}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
            {/* <div className="text-xl font-extrabold text-left text-[#F00]">
                <button>
                    <h2>
                        CAO <br />
                        SON
                    </h2>
                </button>
            </div>
            <div className="hidden md:block text-center">
                <ThemeSwitch />
            </div>
            <div>
                <ul className="text-right">
                    <li >
                        <Link href="/work" scroll={false} >
                            <button>WORK</button>
                        </Link>
                    </li>
                    <li className="mt-2">
                        <Link href={`/contact`} scroll={false}>
                            <button>CONTACT</button>
                        </Link>
                    </li>
                </ul>
            </div> */}
        </nav>
    )
}

export default NavBar