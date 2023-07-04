'use client'
import ThemeSwitch from "@/helper/ThemeSwitch"
import Link from "next/link"
import { usePathname } from 'next/navigation'


const NavBar = () => {
    // const { pathname } = usePathname()
    const pathname = usePathname()
    // console.log(pathname);
    return (
        <nav className="font-primary font-normal text-sm flex justify-between px-7 py-10">
            <div className="text-xl font-extrabold text-left text-[#F00]">
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
                        <Link href="/#work" scroll={false} >
                            <button>WORK</button>
                        </Link>
                    </li>
                    <li className="mt-2">
                        <Link href={`/contact`} scroll={false}>
                            <button>CONTACT</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar