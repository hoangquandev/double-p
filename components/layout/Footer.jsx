import Image from "next/image"


const Footer = () => {
    return (
        <div className="relative h-[380px]">
            <div className="absolute top-[140px]  right-[-56px]">
                <div className="flex justify-between">
                    <div className="relative w-[315px] h-[88px] rotate-[10deg]">
                        <Image
                            src={'/say.png'}
                            alt="say"
                            style={{
                                top: "10px",
                                // left: "-56px"
                            }}
                            fill
                            priority
                        />
                    </div>
                    <div className="relative w-[290px] h-[146px] right-0">
                        <Image
                            src={'/hello-footer.png'}
                            alt="hello"
                            style={{
                                top: "-40px",
                                // right: "-50px"
                                zIndex: 10
                            }}
                            fill
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 background w-full p-[20px] grid grid-cols-3">
                <div className="flex items-center justify-between">
                    <h3 className="uppercase text-xl font-primary font-bold">drop me a <br /> message</h3>
                    <div className="relative bg-[#8080804d] backdrop-blur-lg rounded-full w-[144px] h-[144px]">
                        <Image
                            src={'/footer.gif'}
                            alt="footer"
                            style={{
                                filter: "grayscale(100%)",
                                // top: "50%",
                                // left: "50%",
                                // transform: "translate(-50%,-50%)"
                            }}
                            fill
                            priority
                        />
                    </div>
                </div>
                <div className="relative col-start-2 col-end-4 flex font-third font-light">
                    <h3 className="uppercase text-xl font-primary font-bold w-1/3 min-[1920px]:w-1/4 pl-[20px] my-auto">PHAM BUI <br /> CAO SON</h3>
                    <p className="my-auto w-1/4 pl-[30px]">
                        <a href="mailto:caosonwork@gmail.com">caosonwork@gmail.com</a>
                        <br />
                        <a href="tel:+84 972 091 245">+84 972 091 245</a>
                    </p>
                    <p className="w-5/12 my-auto text-right">FACEBOOK <br /> BEHANCE</p>
                </div>
            </div>
        </div>
    )
}

export default Footer