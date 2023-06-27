
import ThemeSwitch from "@/app/helper/ThemeSwitch"
import Link from "next/link"


const NavBar = () => {
    return (
        <nav className="font-primary font-normal text-sm flex justify-between px-7 py-10">
            <div className="text-xl font-extrabold text-left text-[#F00]">
                <h2>
                    CC <br />
                    STUDIO
                </h2>
            </div>
            <div className="hidden md:block text-center">
                <ThemeSwitch />
            </div>
            <div>
                <ul className="text-right">
                    <li>
                        <Link href="/#work" scroll={false}>
                            WORK
                        </Link>
                    </li>
                    <li className="mt-2">
                        <Link href="/#contact" scroll={false}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar