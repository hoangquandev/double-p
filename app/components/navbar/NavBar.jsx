

const NavBar = () => {
    return (
        <nav className="font-primary font-normal text-sm flex justify-between px-7 py-10">
            <div className="text-xl font-extrabold text-left">
                <h2>
                    VARIAN <br />
                    VISUAL
                </h2>
            </div>
            <div className="hidden md:block text-center">
                <p>DAY</p>
            </div>
            <div>
                <ul className="text-right">
                    <li>WORK</li>
                    <li className="pt-2">CONTACT</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar