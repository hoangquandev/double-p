import Image from "next/image"


const HomeBanner = () => {
    return (
        <div className='flex flex-col justify-between items-center backdrop-blur-lg bg-[rgba(255,255,255,0)] lg:w-[1240px] min-[1920px]:w-[1720px] min-[1920px]:h-[1080px] mx-auto w-full relative h-[calc(100vh-242px)] mt-[142px] py-[100px] mb-[100px]'>
            <div className=" uppercase font-primary text-[96px] min-[1920px]:text-[131.18px] min-[1920px]:leading-[42.122px] font-extrabold">
                <h2 >bring order</h2>
            </div>

            <div className="relative lg:w-[1240px] min-[1920px]:w-[1720px] lg:h-[368px] min-[1920px]:h-[510px]">
                <Image
                    src={'/banner-home.png'}
                    fill
                    alt="banner"
                    priority
                />
            </div>
        </div>
    )
}

export default HomeBanner